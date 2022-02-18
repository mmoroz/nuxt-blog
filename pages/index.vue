<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      <AppPost/>
      <AppPost/>
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/Post.vue'
export default {
  name: 'IndexPage',
  head:{
    title: 'Главная'
  },
  components:{
    AppPost
  }
}
</script>
