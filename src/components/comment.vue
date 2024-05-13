<template>
  <div class="main-body">
    <div class="card-title">
      <el-icon :size="20">
        <Paperclip />
      </el-icon><span>留言板</span>
    </div>
    <div class="div-card">
      <div id="SOHUCS" sid="焘焘导航网"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import $ from "jquery";
import { ref, onMounted, onUnmounted } from "vue";

const windows = window as any;
const intervel = ref()
windows.cyan = undefined;
windows.changyan = undefined;

$.getScript('https://changyan.sohu.com/upload/changyan.js', () => {
  windows.changyan.api.config({ appid: 'cyx3JaAA8', conf: '96b5d6c7cc856f0782bdbc5c68e214e4' })
})

onMounted(() => {
  intervel.value = setInterval(() => {
    const phone_input:any = document.getElementsByClassName("phone-input");
    const password_input:any = document.getElementsByClassName("password-input");
    const identifying_input:any = document.getElementsByClassName("identifying-input");

    if (phone_input.length != 0) { phone_input[0].style.backgroundColor = "white"; }
    if (password_input.length != 0) { password_input[0].style.backgroundColor = "white"; }
    if (password_input.length == 2) { password_input[1].style.backgroundColor = "white";}
    if (identifying_input.length != 0) { identifying_input[0].style.backgroundColor = "white"; }
  })
})
onUnmounted(() => {
  clearInterval(intervel.value);
})
</script>

<style scoped lang="less">
.main-body {
  width: 100%;

  .card-title {
    height: 25px;
    font-size: 20px;

    .el-icon {
      position: relative;
      top: 3px;
    }
  }

  .div-card {
    margin-top: -15px;
  }
}
</style>