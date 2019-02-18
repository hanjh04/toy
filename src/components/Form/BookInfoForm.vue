<template>
<div>
    <div class="md-layout">
        <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
                <label>Title</label>
                <md-input class="bookInfo title" v-model="bookInfo.title" md-counter="30" disabled></md-input>
            </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
                <label>Publisher</label>
                <md-input class="bookInfo publisher" v-model="bookInfo.publisher" maxlength="30"></md-input>
            </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field :md-counter="false">
                <label>Owner</label>
                <md-input class="bookInfo owner" v-model="bookInfo.owner" maxlength="10"></md-input>
            </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
            <!-- <md-datepicker v-model="selectedDate" md-immediately /> -->
            <md-datepicker md-immediately v-model="bookInfo.buyDate">
                <label>Select date</label>
            </md-datepicker>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
            <md-chips md-placeholder="Add keywords..."></md-chips>
        </div>
        <md-field>
            <label>Only images</label>
            <md-file accept="image/*" />
            <div class="col-sm-10">
                <div id="imgArea" ></div>
            </div>
            <!-- <md-file v-model="single" accept="image/*" /> -->
        </md-field>
        <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
                <label>요약</label>
                <md-textarea v-model="textarea" md-counter="80"></md-textarea>
            </md-field>
        </div>
    </div>
    <div class="btnGroup save">
        <md-button @click="saveBookInfo()">Save</md-button>
        <md-button>Cancel</md-button>
    </div>
    <div class="btnGroup edit">
        <md-button @click="saveBookInfo()">Edit</md-button>
        <md-button>Cancel</md-button>
    </div>
</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { saveBookInfo } from '../../api';
const reader = new FileReader();

export default {
data: () => ({
        regular: null,
        maxLength: null,
        disabled: null,
        autogrow: null,
        textarea: null,
        bookInfo:{
            title:"",
            buyer:"",
            author:"",
            content:"",
            subject:"",
            imgUrl:"",
            publisher:"",
            owner:"",
            idx:new Number(),
            buyDate:"2019-02-16"
        },
        bookImage:new Image(),
        bookImageBlob:new Blob()
    }),
    created() {
        console.log('created')
        if(this.$route.params !== undefined && this.$route.params.idx !== undefined){
            
        }else{
            this.initBookinfo();
        }

        reader.onload = this.fileReaderOnLoad;
        this.setBookInfo(this.fetchedBookDetail)
    },
    watch: {
        fetchedImage:function() {
            if(this.fetchedImage.size === 0) return;
            this.bookImageBlob = this.fetchedImage;
            this.displayImage(this.bookImageBlob);
        }
    },
    computed: {
         ...mapGetters(['fetchedBookDetail','fetchedImage'])
    },
    methods:{
        ...mapMutations({initBookinfo:'INIT_BOOKINFO'}),
        ...mapActions({saveBookInfo:'SAVE_BOOKINFO', saveBookImage:'SAVE_BOOKIMAGE'}),
        setBookInfo({title, owner, author, content, subject, imgUrl, buyDate, publisher}){
            this.bookInfo.title = title || '';
            this.bookInfo.buyer = owner || '';
            this.bookInfo.content = content || '';
            this.bookInfo.subject = subject || '';
            this.bookInfo.imgUrl = imgUrl || '';
            this.bookInfo.author = author || '';
            this.bookInfo.publisher = publisher || '';
            
            if(buyDate === undefined || buyDate === ""){
                this.bookInfo.buyDate = new Date().toISOString().split("T")[0];
            }else{
                this.bookInfo.buyDate = buyDate;
            }

            if(this.bookInfo.imgUrl !== undefined && this.bookInfo.imgUrl !== ''){
                this.$store.dispatch('FETCH_IMAGE', this.bookInfo.imgUrl)
                    .then()
                    .catch((error) => console.log(error))
            }
        },
        toggle(){
            this.isAddPage = !this.isAddPage;
            console.log(document.getElementById('imgFile'))
        },
        fileReaderOnLoad(e){
            this.bookImage.src = e.target.result;

            if (this.bookImage.width > 300) {
                this.bookImage.width = 300;
            }
            
            this.setImage(this.bookImage)
        },
        displayImage(file){
            if(file.size === 0) return;
            reader.readAsDataURL(file);
        },
        setImage(img){
            const imgArea = document.getElementById('imgArea');
            imgArea.innerHTML = '';
            imgArea.appendChild(img);
            imgArea.firstElementChild.classList.add("img-thumbnail");
        },
        saveBookInfo(){
            if(this.bookInfo.title === undefined || this.bookInfo.title === ''){
                alert('책 제목을 입력하세요');
                return;
            }
            if(this.bookInfo.buyDate === undefined || this.bookInfo.buyDate === ''){
                alert('Buy Date 가 오늘로 설정되었습니다.')
                this.bookInfo.buyDate = new Date().toISOString().split("T")[0];
            }
            // console.log(this.bookInfo)
            this.bookInfo.idx = this.fetchedBookList[this.fetchedBookList.length-1].idx + 1;
            this.bookInfo.buyDate = new Date(this.bookInfo.buyDate);
            if(document.getElementById('imgFile').files !== undefined && document.getElementById('imgFile').files[0] !== undefined){
            //     save image... return 받고 
                console.log('image save')
                const file = document.getElementById('imgFile').files[0];
                this.saveBookImage({file})
                .then(res => {
                    const imgUrl = res;
                    this.bookInfo.imgUrl = imgUrl;
                    saveBookInfo(this.bookInfo)
                    this.$router.replace(this.$route.query.redirect || '/')
                })
                .catch(error => {
                    alert('저장 실패!')
                    console.log(error)
                })
                return;
            }
            saveBookInfo(this.bookInfo)
            .then(res => {
                this.$router.replace(this.$route.query.redirect || '/')
            })
            .catch(error => {
                console.log(error)
            })
            // saveBookInfo({"idx":4,"title":"Head First Design Patterns","author":"에릭프리먼","imgUrl":"https://firebasestorage.googleapis.com/v0/b/my-web-e191b.appspot.com/o/123104887.jpg?alt=media&token=529d6d78-e70c-448f-a50f-4f5cd7b0b0b3"});
            // console.log(JSON.stringify(this.bookInfo))
        },
    }
}
</script>

<style>
#imgArea{
    height:250px;
    width:auto;
}
</style>
