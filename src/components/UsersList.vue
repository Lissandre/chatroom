<template>
  <ul>
    <UsersListUser
      v-for="(user, i) in users"
      :key="i"
      :user="user"/>
  </ul>
</template>

<script>
import UsersListUser from './UsersListUser'
export default {
  props: {
    users: {
      type: Array
    }
  },
  components: {
    UsersListUser
  }
}
</script>

<style lang="stylus" scoped>
ul
  height 88%
  list-style none
  padding 20px
  box-sizing border-box
  margin 0
  border-radius 16px
  border 3px solid #000000
  background #ffffff
  box-shadow 8px 8px 0px rgba(0, 0, 0, 0.16)
  overflow-x auto
  overflow-y scroll
/* Hide scrollbar for Chrome, Safari and Opera */
ul::-webkit-scrollbar
  background-color transparent
  width 16px
ul::-webkit-scrollbar-thumb
  // display none
  background-color var(--color)
  border 3px outset #000000
  border-radius 16px
/* Hide scrollbar for IE, Edge and Firefox */
ul
  -ms-overflow-style none /* IE and Edge */
  scrollbar-width none /* Firefox */
</style>
