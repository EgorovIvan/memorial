<template>
  <PageWrapper>
    <div class="news-content">
      <NewsSidebar
        :active-link="route.path"
      />
    </div>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from "@/components/common/PageWrapper.vue";
import NewsSidebar from "@/components/NewsSidebar/NewsSidebar.vue";
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<style scoped lang="scss">
.news-content {
  width: 100%;
  min-height: calc(100vh - 116px);
  display: flex;
  background: $gray;
  margin-top: 96px;
  padding: 15px 0;
}
</style>
