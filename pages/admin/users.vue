<template>
  <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
  >
      <h1>Создать пользователя</h1>

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
          Сохранить
        </el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: "users",
  layout: "admin",
  middleware: ['admin-auth'],
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
            await this.$store.dispatch('auth/createUser', formData)
            this.$message.success('Пользователь создан')
            this.controls.email = ''
            this.controls.password = ''
            this.loading = false

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
  form {
    width: 600px;
  }
</style>
