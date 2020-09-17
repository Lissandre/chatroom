<template>
  <li class="message" :class="[isCurrentUser ? 'messageRight' : 'messageLeft', isSameUser ? 'same' : '']">
    <div class="round" :class="isSameUser ? 'hide' : ''" :style="`background-image:url('${message.user.avatar ? message.user.avatar : 'https://vglist.co/assets/default-avatar-7f9e315588a3a9db5db0d5b2e8682a58dfef993ed5e4ba7dd33f6b21ad65741c.png'}')`">
      <!-- <img :src="message.user.avatar" alt=""> -->
    </div>
    <div class="messageContent">
      {{ message.text }}
      <img v-if="isImg" class="gif" :src="message.text" /> 
    </div>
    <!-- <strong v-if="isCurrentUser">{{ message.user.username }}</strong>
    <em v-else>{{ message.user.username }}</em>
    :  -->
  </li>
</template>

<script>
import store from '@/store'
export default {
  props: {
    message: {
      type: Object,
      required: true
    },
    lastMessage: {
      type: Object,
      required: false
    }
  },
  computed: {
    isCurrentUser () {
      return this.message.user.username === store.$data.user.username
    },
    isSameUser () {
      return this.lastMessage ? this.message.user.username === this.lastMessage.user.username : false
    },
    isImg(){
      return this.message.text.match(/.*\.(gif|jpe?g|bmp|png)$/igm)
    }
  }
}
</script>

<style lang="stylus">
.gif
  display block
  max-width 100%
li.message
  list-style none
  display flex
  margin 20px 12px 0 12px
  word-wrap break-word
  padding 0
  border-radius 10px
  color #ffffff
  height auto
  font-size 14px
  line-height 24px
  &.same
    margin 4px 12px 0 12px
.messageContent
  border 3px solid #000000
  border-radius 16px
  padding 8px 16px
  width fit-content
  max-width 70%
  box-shadow 4px 4px 0px rgba(0, 0, 0, 0.16)
.round
  user-select none
  background #707070
  display flex
  justify-content center
  align-items center
  text-transform uppercase
  font-weight bold
  font-size 24px
  margin 0 8px
  height 40px
  width 40px
  border 3px solid #000000
  border-radius 50%
  background-size cover
  background-position center center
  &.hide
    visibility hidden
.messageLeft .messageContent
  background var(--color)
  color #000000
.messageRight
  align-self flex-end
  text-align right
  flex-direction row-reverse
  & .messageContent
    background #ffffff
    color #000000
    border-color var(--color)
</style>
