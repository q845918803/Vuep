<template>
    <div>
    <mt-swipe :auto="4000">
        <mt-swipe-item>
            <img src="../img/banner01.jpg" alt="">
        </mt-swipe-item>
            <mt-swipe-item>
            <img src="../img/banner02.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../img/banner03.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../img/banner04.jpg" alt="">
        </mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul> 
		</div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            imglist:[
                1,2,3,4
            ]
        }
    },
    created(){
        
    },
    methods:{
       
    },
}
</script>
<style scoped text>
    .mint-swipe{
        height: 320px;
    }
    
    .mint-swipe-items-wrap img {
        height: 100%;
        width: 100%;
    }
</style>