import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'

export default defineStore('user', () => {
  const name = ref('uni-app')

  const updateName = (newName: string) => {
    name.value = newName
  }

  return {
    name,
    updateName,
  }
})
