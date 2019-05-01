<template>
<div>
    <div class="md-layout">
        <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
                <label>Title</label>
                <md-input class="bookInfo title" v-model="bookInfo.title" md-counter="30"></md-input>
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
            <md-chips md-placeholder="Add keywords..."></md-chips>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
            <div id="imgArea"></div>
        </div>
        <md-field class="md-layout-item md-small-size-100 md-size-100">
            <label>Only images</label>
            <md-file class="bookInfo image" id="imgFile" accept="image/*" @change="displayImage($event.target.files[0])"/>
            <!-- <md-file v-model="single" accept="image/*" /> -->
        </md-field>
        <div class="md-layout-item md-small-size-100 md-size-100">
            <!-- <md-datepicker v-model="selectedDate" md-immediately /> -->
            <md-datepicker class="bookInfo date" md-immediately v-model="bookInfo.buyDate">
                <label>Select date</label>
            </md-datepicker>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
                <label>요약</label>
                <md-textarea class="bookInfo comment" md-counter="80" v-model="bookInfo.comment"></md-textarea>
            </md-field>
        </div>
    </div>
    <div v-if="$route.name === 'addBook'" class="btnGroup save">
        <md-button @click="onClickSaveBtn()">Save</md-button>
        <md-button @click="onClickCancelBtn()">Cancel</md-button>
    </div>
    <div v-else class="btnGroup edit">
        <md-button @click="onClickEditBtn()">Edit</md-button>
        <!-- <md-button >Cancel</md-button> -->
    </div>
</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
// import { saveBookInfo } from '../../api';
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
            buyDate:""
        },
        bookImage:new Image(),
        bookImageBlob:new Blob()
    }),
    created() {
        console.log('created');
        reader.onload = this.fileReaderOnLoad;
        this.setBookInfo(this.fetchedBookDetail || this.bookInfo);
    },
    mounted() {
        this.toggle();
    },
    watch: {
        fetchedImage:function() {
            if(this.fetchedImage.size === 0) return;
            this.bookImageBlob = this.fetchedImage;
            this.displayImage(this.bookImageBlob);
        },
        $route(to, from){
            this.toggle();
        }
    },
    computed: {
         ...mapGetters(['fetchedBookDetail','fetchedImage', 'fetchedBookList'])
    },
    methods:{
        ...mapMutations({initBookinfo:'INIT_BOOKINFO'}),
        ...mapActions({saveBookInfo:'SAVE_BOOKINFO', saveBookImage:'SAVE_BOOKIMAGE'}),
        setBookInfo({title, owner, author, content, subject, imgUrl, buyDate, publisher, comment}){
            this.bookInfo.title = title || '';
            this.bookInfo.buyer = owner || '';
            this.bookInfo.content = content || '';
            this.bookInfo.subject = subject || '';
            this.bookInfo.imgUrl = imgUrl || '';
            this.bookInfo.author = author || '';
            this.bookInfo.publisher = publisher || '';
            this.bookInfo.comment = comment || '';
            
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
        onClickEditBtn(){
            this.$router.push({
                path:'/book/addBook'
            })
        },
        toggle(){
            const el = document.getElementsByClassName('bookInfo')
            if(this.$route.name === 'addBook'){
                for(var i = 0; i < el.length; i++){
                    el[i].removeAttribute('disabled', true);
                }
            }else if(this.$route.name === 'bookDetail'){
                for(var i = 0; i < el.length; i++){
                    el[i].setAttribute('disabled', true);
                }
            }
        },
        fileReaderOnLoad(e){
            this.bookImage.src = e.target.result;

            if (this.bookImage.height > 300) {
                this.bookImage.height = 300;
                this.bookImage.width = 'auto';
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
        onClickSaveBtn(){
            if(this.bookInfo.title === undefined || this.bookInfo.title === ''){
                alert('책 제목을 입력하세요');
                return;
            }
            // console.log(this.bookInfo)
            this.bookInfo.idx = this.fetchedBookList[this.fetchedBookList.length-1].idx + 1;
            this.bookInfo.buyDate = new Date(this.bookInfo.buyDate).toISOString().split('T')[0];
            if(document.getElementById('imgFile').files !== undefined && document.getElementById('imgFile').files[0] !== undefined){
                // save image... return 받고 
                const file = document.getElementById('imgFile').files[0];
                this.saveBookImage({file})
                .then(res => {
                    const imgUrl = res;
                    this.bookInfo.imgUrl = imgUrl;
                    this.saveBookInfo(this.bookInfo)
                    this.$router.push('/book')
                })
                .catch(error => {
                    alert('저장 실패!')
                    console.log(error)
                })
                return;
            }
            this.saveBookInfo(this.bookInfo)
            .then(res => {
                this.$router.push('/book')
            })
            .catch(error => {
                alert('저장 실패!')
                console.log(error)
            })
        },
        onClickCancelBtn(){
            const rtn = confirm('입력한 데이터가 초기화됩니다.')
            if(rtn){
                this.setBookInfo(this.fetchedBookDetail);
            }
        }
    },
    beforeDestroy() {
        this.$store.commit("INIT_BOOKINFO")
    },
}
</script>

<style>
/* #imgArea{
    height:250px;
    width:auto;
} */
</style>
