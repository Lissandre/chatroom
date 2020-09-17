import Vue from 'vue'
import io from 'socket.io-client'
import router from './router'

const socket = io('https://bddi-2019-chat.herokuapp.com/')

const store = new Vue({
  data: {
    isRegistered: false,
    user: {},
    users: [],
    messages: []
  },
  watch: {
    isRegistered (registered) {
      if (registered) {
        router.push('/')
      } else {
        router.push('/login')
      }
    }
  },
  methods: {
    registerListeners () {
      socket.on('connect', () => {
        const sessionUser = sessionStorage.getItem('user')
        if (sessionUser) {
          store.userRegister(JSON.parse(sessionUser).username)
        }
      })

      socket.on('users update', ({ users }) => {
        this.users = users
      })

      socket.on('disconnect', () => {
        this.isRegistered = false
      })

      socket.on('user registered', (user) => {
        this.isRegistered = true
        this.user = user
        this.error = null
        sessionStorage.setItem('user', JSON.stringify(user))
      })

      socket.on('messages update', ({ messages }) => {
        this.messages = messages
      })

      socket.on('message new', ({ message }) => {
        this.messages.push(message)
      })

      socket.on('chat error', (error) => {
        this.error = error
      })
    },
    // API calls
    logout () {
      sessionStorage.clear()
      this.isRegistered = false
      router.push('/login')
    },
    userRegister (username, avatar) {
      socket.emit('user register', { username, avatar })
    },
    userTyping () {

    },
    messageNew (message) {
      socket.emit('message new', message)
    }
  },
  created () {
    this.registerListeners()
  }
})

export default store
