<template>
  <layoutbody :data="usually" id="usually" />
  <layoutbody :data="web" id="web" />
  <layoutbody :data="ui" id="ui" />
  <layoutbody :data="ui_plugin" id="ui_plugin" />
  <layoutbody :data="python" id="python" />
  <layoutbody :data="codeware" id="codeware" />
  <layoutbody :data="database" id="database" />
  <layoutbody :data="ai_soft" id="ai_soft" />
  <layoutbody :data="email" id="email" />
  <layoutbody :data="cloud_dist" id="cloud_dist" />
  <layoutbody :data="msg_notif" id="msg_notif" />
  <layoutbody :data="notes" id="notes" />
  <layoutbody :data="api" id="api" />
  <layoutbody :data="picture" id="picture" />
  <layoutbody :data="works" id="works" />
  <layoutbody :data="bottools" id="bottools" />
  <layoutbody :data="other" id="other" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ElLoading } from "element-plus";
import layoutbody from "./layoutbody.vue";
import {
  get_usually,
  get_web,
  get_ui,
  get_ui_plugin,
  get_python,
  get_codeware,
  get_database,
  get_ai_soft,
  get_email,
  get_cloud_dist,
  get_msg_notif,
  get_notes,
  get_api,
  get_picture,
  get_works,
  get_bottools,
  get_other
} from "@/api/data";

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
const bottools:any = ref([])
const codeware:any = ref([])
const ui:any = ref([])
const ui_plugin:any = ref([])
const database:any = ref([])

onMounted(() => {
  const loadingService = ElLoading.service({fullscreen: true, text: "正在加载数据 ~"});
  get_usually().then((res: any) => { usually.value = res; loadingService.close(); });
  get_web().then((res: any) => { web.value = res; });
  get_ui().then((res: any) => { ui.value = res; });
  get_ui_plugin().then((res: any) => { ui_plugin.value = res; });
  get_python().then((res: any) => { python.value = res; });
  get_codeware().then((res: any) => { codeware.value = res; });
  get_database().then((res: any) => { database.value = res; });
  get_ai_soft().then((res: any) => { ai_soft.value = res; });
  get_email().then((res: any) => { email.value = res; });
  get_cloud_dist().then((res: any) => { cloud_dist.value = res; });
  get_msg_notif().then((res: any) => { msg_notif.value = res; });
  get_notes().then((res: any) => { notes.value = res; });
  get_api().then((res: any) => { api.value = res; });
  get_picture().then((res: any) => { picture.value = res; });
  get_works().then((res: any) => { works.value = res; });
  get_bottools().then((res: any) => { bottools.value = res; });
  get_other().then((res: any) => { other.value = res; });
});
</script>