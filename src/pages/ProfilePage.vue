<template>
  <PageWrapper>
    <div class="profile">
      <section class="edit">
        <BreadcrumbsLine />
        <h3 class="edit__title">Управление аккаунтом</h3>

        <div class="edit-wrap">
          <ProfileSidebar />

          <div class="edit-profile">
            <h4 class="edit-profile__title">Основная информация</h4>

            <div class="edit-profile-wrap grid-col-2">
              <div class="input-wrap">
                <span class="input-wrap__title">Имя:</span>
                <div class="input-form">
                  <input type="text" class="input-text" name="" title=""/>
                </div>
              </div>
              <div class="input-wrap">
                <span class="input-wrap__title">Отчество:</span>
                <div class="input-form">
                  <input type="text" class="input-text" name="" title=""/>
                </div>
              </div>
              <div class="input-wrap">
                <span class="input-wrap__title">Фамилия:</span>
                <div class="input-form">
                  <input type="text" class="input-text" name="" title=""/>
                </div>
              </div>
              <div class="input-wrap">
                <span class="input-wrap__title">Email:</span>
                <div class="input-form">
                  <input type="email" class="input-text" name="" title=""/>
                </div>
              </div>
              <div class="input-wrap">
                <span class="input-wrap__title">Email:</span>
                <div class="input-form">
                  <input type="email" class="input-text" name="" title=""/>
                </div>
              </div>
              <button type="button" class="button-save btn blue-btn">Сохранить</button>
            </div>

            <h4 class="edit-profile__title">Доступ к профилям</h4>

            <ul class="access-profiles">
              <li class="access-profiles__item">
                <div class="access-profiles__wrap">
                  <div class="access-profiles__img">
                    <img src="img/relatives/avatar-1.jpg" class="bg-img" alt="" title=""/>
                  </div>
                  <span class="access-profiles__name">Алексей В.Н.</span>
                </div>
                <span class="access-profiles__status">Администратор</span>
              </li>
              <li class="access-profiles__item">
                <div class="access-profiles__wrap">
                  <div class="access-profiles__img">
                    <img src="img/relatives/avatar-2.jpg" class="bg-img" alt="" title=""/>
                  </div>
                  <span class="access-profiles__name">Андросова М. В.</span>
                </div>
                <span class="access-profiles__status">Полный доступ</span>
              </li>
              <li class="access-profiles__item">
                <div class="access-profiles__wrap">
                  <div class="access-profiles__img">
                    <img src="img/relatives/avatar-1.jpg" class="bg-img" alt="" title=""/>
                  </div>
                  <span class="access-profiles__name">Анастасия К. П.</span>
                </div>
                <span class="access-profiles__status wait-status">Ожидает подтверждения</span>
              </li>
            </ul>

            <button type="button" class="button-share">Поделиться доступом к профилю</button>
          </div>
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
