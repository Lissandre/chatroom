<template>
  <div class="container">
    <div class="avatarChoice">
      <div class="round men" @click="setAvatar(menAvatar)" ref="men"></div>
      <div class="round women" @click="setAvatar(womenAvatar)" ref="women"></div>
    </div>
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
      menAvatar: 'https://ih1.redbubble.net/image.868479518.6651/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg',
      womenAvatar: 'https://miro.medium.com/max/640/0*qRXq6CVwMDI_R_8A.jpg',
      Avatar: '',
      error: store.error,
      choice: false
    }
  },
  methods: {
    setAvatar (avatar) {
      this.avatar = avatar
      if(this.choice){
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.inactive').classList.remove('inactive')
      }
      avatar === this.menAvatar ? this.$refs.men.classList.add('active') & this.$refs.women.classList.add('inactive') : this.$refs.men.classList.add('inactive') & this.$refs.women.classList.add('active')
      this.choice = true
    },
    onSubmit () {
      store.userRegister(this.username, this.avatar)
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
  font-size: 14px;
  opacity: 1;
}

// .inputText {
//   font-size: 14px;
//   width: 200px;
//   height: 35px;
// }
.avatarChoice
  display flex
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
  height 120px
  width 120px
  border-radius 50%
  margin-bottom 80px
  background-size contain
  background-position center center
  cursor pointer
  box-shadow 0px 0px 0px rgba(0, 0, 0, 0.16)
  filter grayscale(0)
  transition transform 0.2s linear, box-shadow 0.2s linear, opacity 0.2s ease-out, filter 0.2s ease-out
  &:hover
    transform scale(1.1)
    box-shadow 4px 4px 0px rgba(0, 0, 0, 0.16)
  &.men
    background url(https://ih1.redbubble.net/image.868479518.6651/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg)
    background-size cover
    background-position center center
  &.women
    background url(https://miro.medium.com/max/640/0*qRXq6CVwMDI_R_8A.jpg)
    background-size cover
    background-position center center
  &.active
    transform scale(1.2)
  &.inactive
    transform scale(0.9)
    opacity 0.8
    filter grayscale(100%)
form
  position relative
  display flex
  flex-direction column
input
  width 468px
  border none
  border-bottom 2px solid #707070
  margin-bottom 80px
  padding 16px 0px
  font-size 22px
  outline none
  height auto
button
  text-transform uppercase
  height 60px
  border-radius 16px
  font-weight bold
  border none
  color #ffffff
  background #6A3BF7
  outline none
  border 3px solid #000000
::selection
  color #ffffff
  background #6A3BF7
  outline-color #000000
::-moz-selection
  color #ffffff
  background #6A3BF7
  outline-color #000000
</style>
