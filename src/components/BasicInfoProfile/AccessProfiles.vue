<template>
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
</template>

<script setup>

</script>