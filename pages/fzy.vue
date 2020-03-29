<template>
<div>
    fzy pages
    <!-- <f/> -->
    <ul>
        <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
</div>
</template>

<script>
// import f from '../components/Footer.vue'
import axios from 'axios'
export default {
    layout: 'fzy',
    // components:{
    //     f
    // }
    data() {
        return {
            list: []
        }
    },
    async mounted(){
        let {status, data: {list}} = await axios.get('/city/list')
        if(status == 200) {
            this.list = list
        }
    }
}
</script>

<style>

</style>