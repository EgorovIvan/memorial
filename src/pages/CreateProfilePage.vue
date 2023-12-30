<template>
  <PageWrapper>
    <div class="profile">
      <div class="profile-content">
        <BreadcrumbsLine
          :links="breadcrumbsLinks"
          class="profile__breadcrumbs"
        />
        <h3 class="add-profile-content__title">Новый профиль</h3>
        <CreateProfileNavigation
          :links="navigation"
          :activeIndex="activeIndex"
          @clickLink="setActiveIndex"
          class="profile__navigation"
        />
        <div class="wrapper">
          <component :is="navigation[activeIndex].component" />
          <button class="save-and-next btn blue-btn">
            Сохранить и продолжить
          </button>
        </div>
        <p class="profile__text">
          Давайте создавать и хранить историю вместе? Для начала необходимо заполнить основную информацию профиля.
        </p>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from "@/components/common/PageWrapper.vue";
import CreateProfileNavigation from "@/components/CreateProfile/CreateProfileNavigation/CreateProfileNavigation.vue";
import BreadcrumbsLine from "@/components/common/BreadcrumbsLine.vue";
import PrimaryInfo from "@/components/CreateProfile/PrimaryInfo/PrimaryInfo.vue";
import {ref} from "vue";

const breadcrumbsLinks = [
  {
    text: 'Главная',
    href: '/',
  },
  {
    text: 'Личный кабинет',
    href: '/profile',
  },
  {
    text: 'Создание профиля',
    href: '/create-profile',
  },
]

const activeIndex = ref(0);

const navigation = ref([
  {
    title: 'Шаг 1',
    desc: 'Основная информация',
    component: PrimaryInfo,
  },
  {
    title: 'Шаг 2',
    desc: 'Описание',
  },
  {
    title: 'Шаг 3',
    desc: 'Публикация',
  },
])


function setActiveIndex(index) {
  activeIndex.value = index
}
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;

  @media screen and (max-width: 1300px) {
    grid-row: 4/5;
  }

  @media screen and (max-width: 998px) {
    grid-row: initial;
  }
}

.save-and-next {
  justify-self: center;
}

.profile {
  width: 100%;
  min-height: calc(100vh - 116px);
  background: $gray;
  margin-top: 96px;
  padding: 15px 0;

  &__breadcrumbs {
    grid-row: 1/2;
    grid-column: 1/4;

    @media screen and (max-width: 998px) {
      grid-column: initial;
    }
  }

  &__navigation {
    padding-right: 140px;

    @media screen and (max-width: 1300px) {
      grid-row: 4/5;
      padding-right: 20px;
    }

    @media screen and (max-width: 998px) {
      display: flex;
      gap: 30px;
    }
  }

  .add-profile-content__title {
    grid-row: 2/3;
    grid-column: 1/4;

    @media screen and (max-width: 998px) {
      grid-column: initial;
    }
  }

  &__text {
    font-size: 16px;

    @media screen and (max-width: 1300px) {
      grid-row: 3/4;
      grid-column: 1/3;
    }

    @media screen and (max-width: 998px) {
      grid-column: initial;
    }
  }

  &-content {
    display: grid;
    gap: 15px;
    column-gap: 45px;
    grid-template-columns: auto 1fr 325px;
    max-width: 1400px;
    justify-content: center;
    margin: 0 auto;
    padding: 0 20px;

    @media screen and (max-width: 1300px){
      grid-template-columns: auto 1fr;
    }

    @media screen and (max-width: 998px) {
      grid-template-columns: 1fr;
    }
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
