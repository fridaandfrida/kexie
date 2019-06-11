<template>
  <div class="home">
    <header></header>
    <main class="main">
      <aside class="side-left">
        <el-menu router :default-active="$route.path">
          <menu-item v-for="item in menu" :item="item" :key="item.index"></menu-item>
        </el-menu>
      </aside>
      <aside class="side-right">
        <transition>
          <router-view></router-view>
        </transition>
      </aside>
    </main>
  </div>
</template>

<script>
import MenuItem from "@/components/menu.vue";

export default {
  name: "index",
  components: { MenuItem },
  data() {
    return {
      menu: [
        {
          index: "1",
          name: "首页",
          path: "/home",
          children: [],
          icon: ""
        },
        {
          index: "2",
          name: "题库管理",
          path: "/question",
          children: [],
          icon: ""
        },
        {
          index: "3",
          name: "用户管理",
          path: "/user",
          children: [],
          icon: ""
        },
        {
          index: "4",
          name: "中奖管理",
          path: "/win",
          children: [],
          icon: ""
        },
        {
          index: "5",
          name: "闯关奖经费管理",
          path: "/money",
          children: [],
          icon: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
header{
  width: 100%;
  height: 50px;
  background-color: rgb(175,175,175);
}
.el-menu {
  min-height: 100%;
}
.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  height: 89px;
  width: 100%;
  background-color: cadetblue;
}

.main {
  flex: 1;
  display: flex;
}

.side-left {
  width: 220px;
  height: 100%;
  overflow: auto;
}

.side-right {
  width: calc(100% - 222px);
  height: 100%;
  /*background-color: #333333;*/
}
</style>