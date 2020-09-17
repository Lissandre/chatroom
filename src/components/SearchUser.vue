<template>
  <input ref="searchInput" type="text" placeholder="RECHERCHER" @input="search()">
</template>

<script>
export default {
  props: {
    users: {
      type: Array
    }
  },
  watch: {
    users () {
      this.search()
    }
  },
  methods: {
    search () {
      const searched = document.querySelectorAll('.searched')
      if (searched) {
        searched.forEach(search => {
          search.classList.remove('searched')
        })
      }
      if (this.$refs.searchInput.value) {
        const users = document.querySelectorAll(`.${this.$refs.searchInput.value.toLowerCase()}`)
        users.forEach(user => {
          user.classList.add('searched')
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
input
  outline none
  height 60px
  background var(--color)
  opacity 0.5
  border none
  width 100%
  border-radius 16px
  color #000000
  font-size 12px
  font-weight bold
  letter-spacing 4px
  text-align center
  &::placeholder
    color #000000
  &:focus
    opacity 1
    font-size 14px
    background var(--color)
    border 3px solid #000000
    color #000000
    letter-spacing inherit
    font-weight normal
</style>
