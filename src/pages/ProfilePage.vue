<template>
  <PageWrapper>
    <div class="profile">
      <section class="edit">
        <BreadcrumbsLine />
        <h3 class="edit__title">Управление аккаунтом</h3>

        <div class="edit-wrap">
          <ProfileSidebar />
          <BasicInfoProfile />
        </div>
      </section>
    </div>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from "@/components/common/PageWrapper.vue";
import {onMounted} from "vue";
import BreadcrumbsLine from "@/components/common/BreadcrumbsLine.vue";
import ProfileSidebar from "@/components/ProfileSidebar/ProfileSidebar.vue";
import BasicInfoProfile from "@/components/BasicInfoProfile/BasicInfoProfile.vue";

onMounted(async () => {
})
</script>

<style scoped lang="scss">
.profile {
  width: 100%;
  min-height: calc(100vh - 116px);
  background: $gray;
  margin-top: 96px;
}
</style>
