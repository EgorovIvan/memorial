<template>
  <PageWrapper>
    <div class="news">
      <NewsSidebar
          :active-link="route.path"
      />
      <div class="news-content">
        <ProfileSlider
            titleKey="newsPage.relatedProfiles"
            :profiles="data.related_humans"
            :show-count-profiles="true"
        />
        <CemeterySlider
          titleKey="newsPage.cemetery"
          :profiles="data.cemeteries"
        />
        <ProfileSlider
            titleKey="newsPage.pets"
            :profiles="data.pets"
        />
        <CemeterySlider
            titleKey="newsPage.communities"
            :profiles="data.communities"
        />
        <MobileNavigation />
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from "@/components/common/PageWrapper.vue";
import NewsSidebar from "@/components/NewsSidebar/NewsSidebar.vue";
import {useRoute, useRouter} from "vue-router";
import ProfileSlider from "@/components/ProfileSlider/ProfileSlider.vue";
import {onMounted, ref} from "vue";
import NotificationTypes from "@/const/NotificationTypes";
import {useNotificationStore} from "@/store/notificationStore/notificationStore";
import {useI18n} from "vue-i18n";
import api from "@/api/news/api";
import CemeterySlider from "@/components/CemeterySlider/CemeterySlider.vue";
import MobileNavigation from "@/components/common/MobileNavigation/MobileNavigation.vue";

const {t} = useI18n()
const route = useRoute()
const router = useRouter()
const {showNotification} = useNotificationStore()
const data = ref([])

onMounted(async () => {
  try {
    data.value = (await api.getFeed()).data
  } catch (e) {
    const code = e.response?.status;
    if (code === 401) {
      router.push('/login')
    } else {
      showNotification(t('notifications.serverError'), NotificationTypes.ERROR)
    }
  }
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

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 100%;

    .news-content {
      max-width: 100%;
      padding: 0 20px;
    }
  }
}
</style>
