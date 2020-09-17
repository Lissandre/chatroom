<template>
  <ul ref="list" @mousewheel="onScroll">
    <MessagesListMessage
      v-for="(message, i) in messages"
      :key="i"
      :message="message"
      :lastMessage="messages[i-1] ? messages[i-1] : null"/>
  </ul>
</template>

<script>
import MessagesListMessage from './MessagesListMessage'
export default {
  data () {
    return {
      userControlScroll: false
    }
  },
  props: {
    messages: {
      type: Array
    }
  },
  watch: {
    messages () {
      this.scrollDown()
    }
  },
  methods: {
    scrollDown () {
      const list = this.$refs.list
      this.$nextTick(() => {
        if (!this.userControlScroll) {
          list.scrollTop = list.scrollHeight
        }
      })
    },
    onScroll () {
      // const list = this.$refs.list
      // this.userControlScroll = list.scrollTop + list.clientHeight < list.scrollHeight
    }
  },
  mounted () {
    const list = this.$refs.list
    this.$nextTick(() => {
      if (!this.userControlScroll) {
        list.scrollTop = list.scrollHeight
      }
    })
  },
  components: {
    MessagesListMessage
  }
}
</script>

<style lang="stylus" scoped>
ul
  display flex
  flex-direction column
  padding 0
  background #ffffff
  border-radius 16px
  width 100%
  height 88%
  margin 0
  margin-bottom 2%
  overflow-x auto
  overflow-y scroll
  box-sizing border-box
  border 3px solid #000000
  box-shadow 8px 8px 0px rgba(0, 0, 0, 0.16)
  padding-bottom 14%
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
