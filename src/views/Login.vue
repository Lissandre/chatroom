<template>
  <div class="container">
    <div class="round"></div>
    <h1>La pièce qui parle</h1>
    <div class="error" v-if="error">{{ error }}</div>
    <form @submit.prevent="onSubmit">
      <input type="hidden" :value="menAvatar" ref="avatar">
      <input type="text" v-model="username" class="inputText" required>
      <span class="floating-label">Votre nom</span>
      <button>Se Connecter</button>
    </form>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      username: '',
      menAvatar: 'https://preview.redd.it/m3ocrvk8z3041.jpg?auto=webp&s=1ee18e86491dbb5fe55b550da1a541ff8b594d1a',
      womenAvatar: '',
      error: store.error
    }
  },
  methods: {
    onSubmit () {
      store.userRegister(this.username, this.$refs.avatar.value)
      this.username = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label{
  top: -6px;
  left: 0px;
  font-size: 11px;
  opacity: 1;
}

// .inputText {
//   font-size: 14px;
//   width: 200px;
//   height: 35px;
// }

.floating-label {
  position: absolute;
  pointer-events: none;
  left: 0px;
  top: 18px;
  transition: 0.2s ease all;
}
.container
  width 100%
  height 100vh
  display flex
  justify-content center
  align-items center
  flex-direction column
.round
  height 88px
  width 88px
  background #707070
  border-radius 50%
  margin-bottom 32px
  background url(https://preview.redd.it/m3ocrvk8z3041.jpg?auto=webp&s=1ee18e86491dbb5fe55b550da1a541ff8b594d1a)
  background-size cover
  background-position center center
h1
  font-weight bold
  font-size 40px
  color #707070
  margin-bottom 80px
form
  position relative
  display flex
  flex-direction column
input
  width 340px
  border none
  border-bottom 1px solid #707070
  margin-bottom 80px
  padding 16px 0px
  font-size 14px
  outline none
  height auto
button
  text-transform uppercase
  height 63px
  border-radius 35px
  border none
  color #ffffff
  background #707070
  outline none
</style>
