<template>
  <div @click="triggerIncognito()" class="eye">
    <img src="@/assets/images/eye-open.svg" alt="Public mode" v-if="!status" />
    <img src="@/assets/images/eye-close.svg" alt="Private mode" v-if="status" />
  </div>
</template>

<script>
export default {
  name: 'Private',
  data () {
    return {
      status: false
    }
  },
  methods: {
    triggerIncognito () {
      this.status = !this.status
      const messages = document.querySelectorAll('.message'); const users = document.querySelectorAll('.user')
      messages.forEach(message => {
        message.style.filter = `blur(${!this.status ? 0 : 10}px)`
      })
      users.forEach(user => {
        user.style.filter = `blur(${!this.status ? 0 : 10}px)`
      })
    }
  }
}
</script>

<style lang="stylus">
.blur
  filter blur(10px)
.eye
  cursor pointer
</style>
