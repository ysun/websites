<template>
  <layoutbody :data="usually" id="usually" />
  <layoutbody :data="web" id="web" />
  <layoutbody :data="python" id="python" />
  <layoutbody :data="ai_soft" id="ai_soft" />
  <layoutbody :data="email" id="email" />
  <layoutbody :data="cloud_dist" id="cloud_dist" />
  <layoutbody :data="msg_notif" id="msg_notif" />
  <layoutbody :data="notes" id="notes" />
  <layoutbody :data="api" id="api" />
  <layoutbody :data="picture" id="picture" />
  <layoutbody :data="works" id="works" />
  <layoutbody :data="other" id="other" /> 
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ElLoading } from "element-plus";
import layoutbody from "./layoutbody.vue";
import { get_usually, get_ai_soft, get_api, get_email, get_cloud_dist, get_msg_notif, get_notes, get_other, get_picture, get_python, get_works, get_web } from "@/api/data";

const usually:any = ref([])
const ai_soft:any = ref([])
const api:any = ref([])
const email:any = ref([])
const cloud_dist:any = ref([])
const msg_notif:any = ref([])
const notes:any = ref([])
const other:any = ref([])
const picture:any = ref([])
const python:any = ref([])
const works:any = ref([])
const web:any = ref([])

onMounted(() => {
  const loadingService = ElLoading.service({fullscreen: true, text: "正在加载数据 ~"});
  get_usually().then((res: any) => { usually.value = res; loadingService.close(); });
  get_ai_soft().then((res: any) => { ai_soft.value = res; });
  get_api().then((res: any) => { api.value = res; });
  get_email().then((res: any) => { email.value = res; });
  get_cloud_dist().then((res: any) => { cloud_dist.value = res; });
  get_msg_notif().then((res: any) => { msg_notif.value = res; });
  get_notes().then((res: any) => { notes.value = res; });
  get_other().then((res: any) => { other.value = res; });
  get_picture().then((res: any) => { picture.value = res; });
  get_python().then((res: any) => { python.value = res; });
  get_works().then((res: any) => { works.value = res; });
  get_web().then((res: any) => { web.value = res; });
});
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
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    &::after {
      content: '';
      flex: auto;
    }

    @media screen and (max-width: 550px) {
      display: flex;
      flex-direction: column;

      .div-card-body {
        width: 100% !important;
      }
    }

    .div-card-body {
      width: calc(100% / 6 - 10px);
      height: 50px;
      display: flex;
      overflow: hidden;
      background-color: rgba(255, 255, 255, 0.2);
      opacity: 0.8;
      border-radius: 10px;
      margin-bottom: 10px;
      backdrop-filter: blur(10px);

      img {
        width: 30px;
        height: 30px;
        margin: auto 0;
        padding-left: 10px;
      }

      a {
        text-decoration: none;
        line-height: 50px;
        padding-left: 10px;
      }
    }

    .div-card-body:hover {
      opacity: 0.5;
    }
  }
}
</style>