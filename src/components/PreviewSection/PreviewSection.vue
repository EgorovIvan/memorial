<template>
  <section class="preview">
    <div class="preview-img">
      <img src="../../assets/img/image.png" alt="" title=""/>
      <img src="../../assets/img/image-mobile.png" alt="" title=""/>
    </div>
    <PreviewForm />
  </section>
</template>

<script setup>

import PreviewForm from "@/components/PreviewSection/PreviewForm.vue";
</script>

<style scoped lang="scss">

.preview {
  background-color: $gray;
  display: grid;
  grid-template-columns: 59% 41%;
  grid-template-rows: 1fr;
  overflow: hidden;
}

.preview-img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.preview-img img {
  width: 744px;
}

.preview-img img:last-child {
  display: none;
}
</style>