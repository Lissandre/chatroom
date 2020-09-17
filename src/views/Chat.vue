<template>
  <div class="container">
    <div class="left">
      <div class="top">
        <SearchUser :users="store.users" />
      </div>
      <UsersList :users="store.users"/>
    </div>
    <div class="right">
      <div class="top color">
        <Color />
      </div>
      <MessageList :messages="store.messages"/>
      <MessageBox @sendMessage="onSendMessage"/>
    </div>
  </div>
</template>

<script>
import MessageBox from '../components/MessageBox.vue'
import MessageList from '../components/MessagesList.vue'
import UsersList from '../components/UsersList.vue'
import SearchUser from '../components/SearchUser.vue'
import Color from '../components/Color.vue'

import store from '../store'

export default {
  data () {
    return {
      store
    }
  },
  methods: {
    onSendMessage (text) {
      store.messageNew(
        text
      )
    },
    onSendMessage (text) {
      const match = text.match(/^\/gif (.+)/)
      if (match) {
        const tag = match[1]
        console.log('sending request for tag', tag)
        axios
          .get(`https://api.giphy.com/v1/gifs/random?api_key=Zmxd68H8QGnFXrbaURxWj0T0o8QMFpJQ&tag=${tag}&rating=g`)
          .then((response) => {
            store.messageNew(response.data.data.image_original_url)
          })
        return
      }
      store.messageNew(text)
    },
    onSendGif (tag) {
    },
  },
  components: {
    Color,
    MessageBox,
    MessageList,
    UsersList,
    SearchUser
  }
}
</script>

<style lang="stylus" scoped>
.container
  // background #707070
  display flex
  left 0
  height 100vh
  width 100%
  max-width 1280px
  bottom 0
.top
  width 100%
  height 8%
  display flex
  align-items center
  margin-bottom 32px
  &.color
    justify-content flex-end
.left
  position relative
  width 24%
  height 100%
  padding 2% 1% 2% 2%
  box-sizing border-box
.right
  position relative
  width 76%
  height 100%
  padding 2% 2% 2% 1%
  box-sizing border-box
</style>
