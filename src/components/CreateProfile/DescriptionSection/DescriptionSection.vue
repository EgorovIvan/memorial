<template>
  <div class="steep">
    <div class="steep-wrap">
      <PhotoBlock />

      <div class="input-wrap">
        <span class="input-wrap__title">Описание:</span>
        <textarea
            class="textarea-form"
            placeholder="Текст описания..."
            title=""
        ></textarea>
      </div>

      <MainSelect
        title="Выберите из списка:"
        :answers="['ответ 1', 'ответ 2']"
      />
    </div>
  </div>
</template>

<script setup>
import PhotoBlock from "@/components/CreateProfile/DescriptionSection/PhotoBlock.vue";
import MainSelect from "@/components/common/MainSelect.vue";
</script>

<style lang="scss" scoped>

</style>