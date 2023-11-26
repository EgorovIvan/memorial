<template>
  <PageWrapper>
    <div class="news">
      <NewsSidebar
        :active-link="route.path"
      />
      <div class="news-content">
        <ProfileSlider
            titleKey="newsPage.yourProfiles"
            :profiles="data.related_humans"
        />
        <ProfileSlider
            titleKey="newsPage.yourProfiles"
            :profiles="data.pets"
        />
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from "@/components/common/PageWrapper.vue";
import NewsSidebar from "@/components/NewsSidebar/NewsSidebar.vue";
import {useRoute} from "vue-router";
import ProfileSlider from "@/components/ProfileSlider/ProfileSlider.vue";
import {onMounted, ref} from "vue";
import api from "@/api/news/api";

const route = useRoute()
const data = ref([])

onMounted(async () => {
  data.value = (await api.getFeed()).data
})
</script>

<style scoped lang="scss">
.news {
  width: 100%;
  min-height: calc(100vh - 116px);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  background: $gray;
  margin-top: 96px;
  padding: 15px 0;

  &-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-self: center;
  }
}
</style>
