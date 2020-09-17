<template>
  <div class="centerer">
    <div class="contain">
      <form @submit.prevent="onSubmit">
        <div class="relative">
          <!-- <input v-model="message" type="text" maxlength="499" placeholder="Votre message"> -->
          <autoheight-textarea>
            <textarea v-model="message" type="text" maxlength="499" placeholder="Votre message"></textarea>
          </autoheight-textarea>
          <VEmojiPicker @select="selectEmoji" id="emojiB" class="hiddenE"/>
          <gifSearch apiKey="twMn23Yq8rpWDD2QfewYDiLry95blTwj" @clicked="onClickGIF" id="gifChoice" class="close"/>
          <div class="emojiButton" @click="triggerEmoji()">O</div>
          <div class="gifButton" @click="triggerGif()">X</div>
          <div class="abs">{{ 499 - message.length }}</div>
        </div>
        <button><img src="@/assets/images/send.svg" alt="Send button"></button>
      </form>
    </div>
  </div>
</template>

<script>
import 'autoheight-textarea'
import VEmojiPicker from 'v-emoji-picker'
import gifSearch from "vue-gif-search"
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('sendMessage', this.message)
      this.message = ''
    },
    triggerEmoji(){
      document.querySelector('#emojiB').classList.toggle('hiddenE')
    },
    triggerGif(){
      document.querySelector('#gifChoice').classList.toggle('close')
    },
    selectEmoji(emoji) {
      console.log(emoji)
      this.message += emoji.data
    },
    onClickGIF (value) {
      this.$emit('sendMessage', value)
      document.querySelector('#gifChoice').classList.toggle('close')
    }
  },
  components:{
    VEmojiPicker,
    gifSearch
  }
}
</script>

<style lang="stylus" scoped>
#gifChoice
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  &.close
    display none
.gifButton
  position absolute
  right 60px
  top 50%
  transform translateY(-50%)
  cursor pointer
.emojiButton
  position absolute
  right 20px
  top 50%
  transform translateY(-50%)
  cursor pointer
#emojiB
  position absolute
  right 0
  top 0
  transform translateY(-100%)
  &.hiddenE
    display none
.centerer
  width 96%
  display flex
  justify-content center
  position absolute
  bottom 5%
.contain
  width 60%
  display flex
  justify-content center
  padding 8px 0
  box-sizing border-box
  // border 2px solid #5d5d5d
  // box-shadow 8px 8px 0px #5d5d5d
form
  display flex
  align-items flex-end
textarea
  border none
  border-radius 16px
  width 700px
  outline none
  font-size 14px
  padding 20px 20px
  border 3px solid #000000
  box-shadow 4px 4px 0px rgba(0, 0, 0, 0.16)
  resize none
  box-sizing border-box
button
  padding-bottom 4px
  display flex
  justify-content center
  align-items center
  font-weight bold
  color #ffffff
  font-size 14px
  margin-left 16px
  width 64px
  height 64px
  background var(--color)
  border-radius 50%
  border none
  outline none
  cursor pointer
  padding-right 12px
  border 3px solid var(--color)
  box-shadow 0px 0px 0px rgba(0, 0, 0, 0.16)
  transition transform 0.2s linear, box-shadow 0.2s linear
  border 3px solid #000000
  &:hover
    transform translate(-4px, -4px)
    box-shadow 4px 4px 0px rgba(0, 0, 0, 0.16)
  & img
    height 30px
    width 30px
.relative
  display inherit
  position relative
.abs
  position absolute
  top 100%
  transform translate(-15px, -32px)
  right  0
  opacity 0.3
</style>
