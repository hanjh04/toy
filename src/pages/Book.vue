<template>
  <div class="content">
    <div v-if="showList === true" class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Book Info</h4>
            <p class="category">list</p>
          </md-card-header>
          <md-card-content>
            <book-list-table table-header-color="green" :bookInfoList=fetchedBookList></book-list-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <div v-else class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Book Info</h4>
            <p class="category">list</p>
          </md-card-header>
          <md-card-content>
            <book-info-form></book-info-form>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/index.js';
import { mapGetters, mapActions } from 'vuex';
import { BookListTable, BookInfoForm } from "@/components";
// import {  } from "/@components";

export default {
  data(){
    return {
      showList:true
    }
  },
  components:{
      BookListTable,
      BookInfoForm
  },
  computed:{
      ...mapGetters(['fetchedBookList']),
  },
  created(){
    if(this.$route.name === 'bookInfo' || this.$route.name === 'bookDetail'){
      this.showList = false;
    }
  },
  beforeUpdate() {
    console.log('before update')
  },
  watch:{
    $route(to, from){
      if(this.$route.name === 'addBook' || this.$route.name === 'bookDetail'){
        this.showList = false;
      }else{
        this.showList = true;
      }
    }
  }
}
</script>

<style>

</style>
