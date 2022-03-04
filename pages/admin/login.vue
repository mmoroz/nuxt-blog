<template>
  <el-card shadow="always" :style="{width:'500px'}">

    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <h1>Войти</h1>

      <el-form-item label="Email" prop="email">
        <el-input v-model.trim="controls.email" />
      </el-form-item>

      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password" type="password" />
      </el-form-item>


      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Войти
        </el-button>
      </el-form-item>
    </el-form>

  </el-card>
</template>

<script>
export default {
  name: "login",
  layout: 'empty',
  data() {
    return {
      loading: false,
      controls: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: 'Email не должно быть пустым', trigger: 'blur' },
          { type: 'email', message: 'Введите валидный Email', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Введите ваш пароль', trigger: 'blur' },
          { min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur' },
        ]
      }
    }
  },
  mounted(){
    const {message} = this.$route.query
    if(message && message==='login'){
      this.$message.info('Доступ запрещен! Войдите в панель администратора!')
    }
    if(message && message==='logout'){
      this.$message.success('Вы успешно вышли из системы!')
    }
    if(message && message==='session'){
      this.$message.warning('Сессия истекла! Войдите в систему.')
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {

          this.loading = true

          const formData = {
            email: this.controls.email,
            password: this.controls.password,
          }

          try {
            await this.$store.dispatch('auth/login', formData)
            this.loading = false
            this.$router.push('/admin')
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
