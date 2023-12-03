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
        <ProfileSlider
            titleKey="newsPage.pets"
            :profiles="data.pets"
        />
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

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const { showNotification } = useNotificationStore()
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
}
</style>
