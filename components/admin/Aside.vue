<template>
    <el-menu
      :style="{height:'100%'}"
      router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      <el-menu-item index="/admin">
        <i class="el-icon-menu"></i>
        <span>Аналитика</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Статьи</span>
        </template>
        <el-menu-item index="/admin/create">Создать</el-menu-item>
        <el-menu-item index="/admin/list">Список</el-menu-item>
      </el-submenu>

      <el-menu-item index="/admin/users">
        <i class="el-icon-user"></i>
        <span>Пользователи</span>
      </el-menu-item>

      <el-menu-item index="/admin/logout">
        <i class="el-icon-setting"></i>
        <span>Выход</span>
      </el-menu-item>


    </el-menu>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style scoped>

</style>
