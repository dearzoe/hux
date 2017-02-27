<template>
  <div style="">
    <x-header title="标题" transition></x-header>
    <blur :blur-amount=3 :url="url">
      <p class="center"><img :src="url"></p>
    </blur>
    <flexbox :gutter="0">
      <flexbox-item v-for="img in images"><img :src="img" style="width:100%" @click="url = img"/></flexbox-item>
    </flexbox>
      <group>
        <cell title="My Account" value="
Protected" @click.native="onClick"></cell>
      </group>

      <group title="use is-link to show arrow">
        <cell title="Notifications" is-link></cell>
        <cell title="Privacy" is-link></cell>
        <cell title="General" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
        </cell>
      </group>

      <!--<group>-->
        <!--<cell :title="Notifications" :value="Enabled"></cell>-->
      <!--</group>-->

      <!--<group :title="use slot for complexed content">-->
        <!--<cell :title="slot content">-->
          <!--<div slot="value">-->
            <!--<span style="color: green">Hi, I'm Vux</span>-->
          <!--</div>-->
        <!--</cell>-->
      <!--</group>-->

      <!--<group :title="isLink is set to true when link exists">-->
        <!--<cell :title="Go to Radio Demo" link="/component/radio" inline-desc='link="/component/radio"'></cell>-->
        <!--<cell :title="Go to Demo" :link="{path:'/demo'}" inline-desc=':link={path:"/demo"}'></cell>-->
        <!--<cell Ltitle="http link" link="https://vux.li" inline-desc='link="https://vux.li"'></cell>-->
      <!--</group>-->
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Blur, XHeader, Cell, Group } from 'vux'

  export default {
    components: {
      Blur,
      Flexbox,
      FlexboxItem,
      XHeader,
      Group,
      Cell
    },
    data () {
      return {
        images: [
          'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
          'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
          'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
        ],
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
      }
    },
    methods:{
      onClick () {
        console.log('on click')
      }
    }
  }
</script>

<style scoped>
  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }
  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
</style>
