<template>
  <div>
    <router-view></router-view>
    <tabbar>
      <tabbar-item selected link="/first">
        <!--<img slot="icon" src="./assets/icon_nav_button.png">-->
        <span slot="label">物流</span>
      </tabbar-item>
      <tabbar-item show-dot link="/second">
        <!--<img slot="icon" src="./assets/icon_nav_msg.png">-->
        <span slot="label">时间</span>
      </tabbar-item>
      <tabbar-item link="/third">
        <!--<img slot="icon" src="./assets/icon_nav_article.png">-->
        <span slot="label">设置</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/fourth">
        <!--<img slot="icon" src="./assets/icon_nav_cell.png">-->
        <span slot="label">信息</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>

  import { Tabbar, TabbarItem, XHeader } from 'vux'
  export default {
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
}
</style>
