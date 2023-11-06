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

  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 85px;
    height: auto;
  }
}

.preview-img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & img {
    width: 744px;

    &:last-child {
      display: none;

      @media screen and (max-width: 980px) {
        display: block;
        width: 744px;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    &:first-child {
      @media screen and (max-width: 980px) {
        display: none;
      }
    }

    @media screen and (max-width: 1280px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 980px) {
    justify-content: center;
    padding: 16px 0;
  }
}
</style>