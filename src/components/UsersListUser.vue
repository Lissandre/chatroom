<template>
  <li class="userBloc" :class="user.username.toLowerCase()">
    <div class="image" :style="`background-image:url('${user.avatar ? user.avatar : 'https://vglist.co/assets/default-avatar-7f9e315588a3a9db5db0d5b2e8682a58dfef993ed5e4ba7dd33f6b21ad65741c.png'}')`">
      <!-- {{ user.username[0] }} -->
    </div>
    <div class="infos">
      <p class="username">{{ user.username }}</p>
      <p class="connection">2 hours ago</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
li
  display flex
  align-items center
  border-radius 16px
  padding 12px 4px
  &:hover, &.searched
    background var(--bg_color)
  & .image
    background var(--color)
    display flex
    justify-content center
    align-items center
    text-transform uppercase
    font-weight bold
    font-size 24px
    height 40px
    width 40px
    border 3px solid #000000
    border-radius 50%
    margin-right 8px
    user-select none
    background-size cover
    background-position center center
  & .infos p
      margin 0
      padding 0
      color #707070
      &.username
        font-size 14px
        margin-bottom 4px
      &.connection
        font-size 12px
        opacity 0.31
  &:not(:first-child)
    margin-top 8px
</style>
