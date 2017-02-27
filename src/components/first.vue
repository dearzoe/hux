<template>
  <div>
    <x-header title="标题" transition></x-header>
    <tab :line-width=2 active-color='#fc378c' v-model="index">
      <tab-item class="vux-center" :selected="demo2 === item" v-for="item in list2" @click="demo2 = item">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item v-for="item in list2">
        <div class="tab-swiper vux-center">{{item}} Container</div>
      </swiper-item>
      <!--<child message="@胡文哲"></child>-->
    </swiper>

  </div>
</template>

<script>
  import { Tab, TabItem, XHeader, Swiper, SwiperItem } from 'vux'
  const list = () => ['精选', '美食', '电影', '酒店', '外卖'];
  export default {
    components: {
      Tab,
      TabItem,
      XHeader,
      Swiper,
      SwiperItem
    },
    data () {
        return {
          list2: list(),
          demo2: '美食',
          list3: ['收到的消息', '发出的消息'],
          demo3: '收到的消息',
          list4: ['正在正映', '即将上映'],
          demo4: '即将上映',
          demoDisabled: 'A',
          index: 0
        }
    },
    methods: {
      addTab () {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1)
        }
      },
      removeTab () {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1)
        }
      },
      next () {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev () {
        if (this.index === 0) {
          this.index = this.list2.length - 1
        } else {
          --this.index
        }
      }
    }
  }
</script>

<style lang="less" scoped>
/*@import '~hux/src/assets/less/center.less';*/
  .box {
    padding: 15px;
  }
  .active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
  }
  .active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
  }
  .active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
  }

</style>

