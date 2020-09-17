<template>
  <div class="container">
    <ul :class="open ? 'open' : ''">
      <li><button class="purple active" @click="setColor('#B9ADFF')" ref="#B9ADFF"></button></li>
      <li><button class="green" @click="setColor('#3cc6b7')" ref="#3cc6b7"></button></li>
      <li><button class="yellow" @click="setColor('#ffcd00')" ref="#ffcd00"></button></li>
      <li><button class="orange" @click="setColor('#FF906B')" ref="#FF906B"></button></li>
    </ul>
    <button class="opener" :class="open ? 'open' : 'close'" @click="triggerColors()" ref="triggerButton"><span v-if="open">X</span><span v-else>Couleurs</span></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      color: ''
    }
  },
  methods: {
    triggerColors () {
      this.open = !this.open
      // this.$refs.triggerButton.innerHTML = "X"
    },
    setColor (color) {
      document.documentElement.style.setProperty('--color', color)
      document.documentElement.style.setProperty('--bg_color', color + '88')
      document.querySelector('.active').classList.remove('active')
      this.$refs[color].classList.add('active')
      sessionStorage.setItem('color', JSON.stringify(color))
    }
  },
  mounted () {
    const sessionColor = sessionStorage.getItem('color')
    if (sessionColor) {
      document.documentElement.style.setProperty('--color', JSON.parse(sessionColor))
      document.documentElement.style.setProperty('--bg_color', JSON.parse(sessionColor) + '88')
      document.querySelector('.active').classList.remove('active')
      this.$refs[JSON.parse(sessionColor)].classList.add('active')
    } else {
      document.documentElement.style.setProperty('--color', '#B9ADFF')
      document.documentElement.style.setProperty('--bg_color', '#B9ADFF88')
    }
  }
}
</script>

<style lang="stylus" scoped>
ul
  list-style none
  height 30px
  width 0%
  overflow hidden
  display flex
  align-items center
  transition width 0.2s linear
  &.open
    width 24%
li button
  width 20px
  height 20px
  border 3px solid #000000
  margin 0 16px
  border-radius 50%
  cursor pointer
  outline none
  transition transform 0.32s ease
  &.purple
    background #B9ADFF
  &.green
    background #3cc6b7
  &.yellow
    background #ffcd00
  &.orange
    background #FF906B
  &.grey
    background #707070
  &.active
    transform scale(1.5)
.container
  width 100%
  display flex
  align-items center
  justify-content flex-end
.opener
  outline none
  cursor pointer
  height 60px
  width 140px
  border-radius 16px
  border none
  border 3px solid #000000
  background var(--color)
  text-transform uppercase
  color #000000
  font-weight bold
  letter-spacing 2px
  box-shadow 8px 8px 0px rgba(0, 0, 0, 0.16)
  transition width 0.2s linear, border-radius 0.25s linear
  overflow hidden
  &.open
    width 60px
    border-radius 50%
</style>
