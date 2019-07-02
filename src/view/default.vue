<template>
    <div>
    <mt-swipe @change="handleChange">
        <mt-swipe-item><h1>666666</h1></mt-swipe-item>
        <mt-swipe-item><h1>222222</h1></mt-swipe-item>
        <mt-swipe-item><h1>333333</h1></mt-swipe-item>
    </mt-swipe>
    </div>
</template>
<script>

export default {
    data(){
        return {

        }
    },
    methods:{
        handleChange(index) {
            return{
                speed: 300,
            }
        }
    },
}
</script>
<style scoped>
    .mint-swipe-items-wrap {
        height: 300px;
    }
</style>