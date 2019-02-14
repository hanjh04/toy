<template>
<div>
    {{fetchedBookList}}
</div>
</template>

<script>
import store from '../store/index.js';
import { mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapGetters(['fetchedBookList']),
    }
}
</script>

<style>

</style>
