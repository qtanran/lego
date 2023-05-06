import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: { isLogin: false }
  }),
  actions: {
    login() {
      this.user = { ...this.user, isLogin: true, userName: 'viking' }
    },
    logout() {
      this.user = { isLogin: false }
    }
  }
})
