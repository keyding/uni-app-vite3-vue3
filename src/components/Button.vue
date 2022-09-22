<script setup lang="ts">
import useUserStore from '@/stores/user'

const userStore = useUserStore()

const onHandleClick = () => {
  userStore.updateName(Math.random().toString().substring(0, 4))
}
</script>

<template>
  <view class="ky-button" @click="onHandleClick">{{ userStore.name }}</view>
</template>

<style lang="scss" scoped>
.ky-button {
  width: 140rpx;
  height: 40rpx;
  background: red;
  border-radius: 8rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  color: #fff;
}
</style>
