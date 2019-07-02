<template>
  <div v-cloak>
        <!-- 顶部tobbar -->
      <mt-header fixed title="fixed top"></mt-header>
        <div class="appcontent">
             <transition>
                <router-view></router-view>
             </transition>
        
            <nav class="mui-bar mui-bar-tab">
                <a class="mui-tab-item mui-active" href="#/default">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </a>
                <a class="mui-tab-item" href="#/message">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                    <span class="mui-tab-label">消息</span>
                </a>
                <a class="mui-tab-item" href="#/goodlist">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">列表</span>
                </a>
                <a class="mui-tab-item" href="#/account">
                    <span class="mui-icon mui-icon-gear"></span>
                    <span class="mui-tab-label">设置</span>
                </a>
            </nav>
        </div>
     

  </div>
</template>
<style scoped>
    .v-enter{
        color: green;
        transform: translate(10px);
    }
    .v-leave-to{
        display: none;    
    }
    .v-enter,.v-leave-to{
        opacity: 0;
        color: green;
    }
    .v-enter-active,.v-leave-active{
        transition: all 0.5s;
    }
</style>
