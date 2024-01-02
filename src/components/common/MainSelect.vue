<template>
  <div class="input-wrap">
    <span class="input-wrap__title">
      {{ title }}
    </span>

    <div class="select-form" @click="showList = !showList">
      <div class="select">
        <output class="select__output">
          {{ getSubtitle }}
        </output>
        <ul class="select-list" v-if="showList">
          <li
            v-for="(answer, index) in answers"
            :key="index"
            @click="chooseAnswer(answer)"
            class="select-list__item"
          >
            {{ answer }}
          </li>
        </ul>
      </div>
      <svg aria-hidden="true" class="select-arrow">
        <path
            d="M7 7.8c-.2 0-.4-.1-.6-.2L.8 2 2 .8l5 5 5-5L13.2 2 7.6 7.6c-.2.2-.4.2-.6.2z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  answers: {
    type: Array,
    required: true,
  },
})

const emits = defineEmits([
    'chooseAnswer',
])

const subtitle = ref('Выберите из списка')
const showList = ref(false)

const getSubtitle = computed(() => {
  return props.answers.length === 0 ? 'Нет доступных значений' : subtitle.value;
})

function chooseAnswer(answer) {
  subtitle.value = answer
  emits('chooseAnswer', answer)
}
</script>