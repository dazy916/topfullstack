<template>
  <el-container>
    <el-aside width="200px">
      <el-menu mode="vertical" style="height:100vh" :default-active="`$router.path`" router>
        <el-submenu
          v-for="(item, index) in menu.items"
          :index="`menu-item-${index}`"
          :key="`menu-item-${index}`"
        >
          <template slot="title">{{item.title}}</template>
          <el-menu-item
            v-for="(subItem, subIndex) in item.items"
            :key="`menu-item-${index}-${subIndex}`"
            :index="subItem.path"
          >{{subItem.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <h3>全栈后台管理</h3>
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: "内容管理",
        items: [
          { title: "首页", path: "/" },
          { title: "项目管理", path: "/product/list" },
          { title: "标签管理", path: "/episodes/list" }
        ]
      },
      {
        title: "运营管理",
        items: [{ title: "用户管理", path: "/users/list" }]
      }
    ]
  };
}
</script>
<style scoped>
</style>
