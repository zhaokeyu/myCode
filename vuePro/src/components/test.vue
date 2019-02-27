<template>
  <div>
    <input type="text" v-model="inputValOne"> + <input type="text" v-model="inputValTwo"> = <input type="text" :value="test()">
    <!--<h3>{{getHe}}</h3>-->

    <div>
      <button @click="isShowLists = !isShowLists">toggle</button>
    </div>

    <div @click="clickMethod($event)">事件</div>

    <transition name="ul">
      <ul class="lists" v-show="isShowLists">
        <li>哈哈1</li>
        <li>哈哈2</li>
        <li>哈哈3</li>
        <li>哈哈4</li>
        <li>哈哈5</li>
        <li>哈哈6</li>
      </ul>
    </transition>

    <div class="box">测试盒子</div>

    <div>
      <input type="text" v-focus>
    </div>

    <div v-move class="move">移动</div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        inputValOne: 1,
        inputValTwo: 1,
        isShowLists: false
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        console.log($('.box'));
        $('.box').css({
          color: 'red',
          backgroundColor: 'blue'
        })
      },
      getSum() {
        console.log('methods方法执行');
        return (this.inputValOne-0) + (this.inputValTwo-0);
      },
      test: function () {
        this.$watch(function() {
          return this.inputValOne + this.inputValTwo;
        }, function (newVal, oldVal) {
          console.log(newVal);
          console.log(oldVal);
        })
      },
      clickMethod(event) {
        console.log(this);
        console.log(event);
        console.log(event.target);
        console.log(event.currentTarget);
      }
    },
    computed: {
      getHe : {
        get:function () {
          return this.inputValOne + this.inputValTwo
        }
      }
    }
  }
</script>

<style scoped>
  .lists {
    border: 1px solid red;
    /*height: 300px;*/
    opacity: 1;
  }
  .ul-enter-active,
  .ul-leave-active {
    transition: all 0.5s;
  }
  .ul-enter,
  .ul-leave-to {
    /*height: 0;*/
    opacity: 0;
  }
  .move {
    width: 50px;
    height: 50px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background-color: pink;
    text-align: center;
    line-height: 50px;
    font-size: 12px;
    position: fixed;
    top: 0;
    left: 0;
  }

</style>
