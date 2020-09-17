<template>
  <div id="app">
    <!-- <div id="nav">
      <div class="links">
        <router-link to="/">Chat</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/settings">Settings</router-link>
      </div>
      <Private />
    </div> -->
    <div id="app_container">
      <router-view />
    </div>
  </div>
</template>

<script>
// import Private from '@/components/Private.vue'
export default {
  // components: { Private }
}
</script>

<style lang="stylus">
body
  margin 0
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-family sans-serif
  background var(--bg_color)
#app_container
  z-index 1
  display flex
  justify-content center
#nav
  z-index 2
  position fixed
  height 8vh
  top 0
  left 0
  right 0
  padding 0 2%
  display flex
  align-items center
  justify-content space-between
.links a
  color #000000
  text-decoration none
  font-size 16px
  &.router-link-exact-active
    color #A0A0A0
  &:first-child
    margin-right 8%
  &:last-child
    margin-left 8%

::selection
  color #ffffff
  background var(--color)
  outline-color #000000

::-moz-selection
  color #ffffff
  background var(--color)
  outline-color #000000
</style>
