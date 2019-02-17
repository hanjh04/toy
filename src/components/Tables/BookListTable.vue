<template>
<div>
    <md-table v-model="searched" md-card @md-selected="onSelect" md-fixed-header>
        <md-table-toolbar>
            <div class="md-toolbar-section-start">
                <h1 class="md-title">Book Info List</h1>
            </div>

            <md-field md-clearable class="md-toolbar-section-end">
                <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
            </md-field>
        </md-table-toolbar>

        <!-- <md-table-toolbar slot="md-table-alternate-footer" slot-scope="{ count }">
            <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

            <div class="md-toolbar-section-end">
                <md-button class="md-icon-button" @click="deleteSelectedBook()">
                    <md-icon>delete</md-icon>
                </md-button>
            </div>
        </md-table-toolbar> -->

        <md-table-empty-state v-show="this.searched.length === 0" md-label="No Books Found" :md-description="`No book found for this '${search}' query. Try a different search term or add new Book.`">
            <md-button class="md-primary md-raised" @click="addNewBook()">Add New Book</md-button>
            <!-- <md-button class="md-primary md-raised" @click="newUser">Add New Book</md-button> -->
        </md-table-empty-state>
      

        <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select @click="onClickRow($event)">
            <md-table-cell md-label="Title" md-sort-by="Title">{{item.title}}</md-table-cell>
            <md-table-cell md-label="Image" md-sort-by="Image"><img :src="item.imgUrl" alt="no image" style="height:100px;width:auto;"/></md-table-cell>
            <md-table-cell md-label="Publisher" md-sort-by="Publisher">{{item.publisher}}</md-table-cell>
            <md-table-cell md-label="Keywords" md-sort-by="Keywords">
                <md-chip v-for="keyword in item.keywords" :key="keyword">{{keyword}}</md-chip>
            </md-table-cell>
            <md-table-cell md-label="Owner" md-sort-by="Owner">{{item.owner}}</md-table-cell>
            <md-table-cell md-label="BuyDate" md-sort-by="BuyDate">{{item.buyDate.seconds}}</md-table-cell>
        </md-table-row>
    </md-table>

    <div>
      <md-button>Add</md-button>
      <md-button>Delete</md-button>
    </div>
</div>
</template>

<script>
const toLower = text => {
    return text.toString().toLowerCase()
}

const searchByName = (items, term) => {
    if (term) {
        return items.filter(item => toLower(item.title).includes(toLower(term)))
    }

    return items
}

export default {
    name: "booklist-table",
    // props:['bookInfoList']
    props:{
        bookInfoList:{
            type:Array,
            default:[]
        }
    },
    data: () => ({
        selected: [],
        searched:[],
        search:null,
    }),
    created(){
        this.searched = this.bookInfoList;
    },
    methods:{
        onSelect (items) {
            this.selected = items
        },
        getAlternateLabel (count) {
            let plural = ''

            if (count > 1) {
                plural = 's'
            }

            return `${count} books${plural} selected`
        },
        onClickRow(e){
            console.log(e);
            e.stopPropagation();
            e.preventDefault();
        },
        searchOnTable () {
            this.searched = searchByName(this.bookInfoList, this.search)
        },
        addNewBook(){
            console.log('addNewBook clicked')
        },
        deleteSelectedBook(){
            console.log('delete book btn is clicked');
            console.log(this.selected)
        }
    }
}
</script>

<style lang="scss" scoped>
small {
    display: block;
}
</style>
