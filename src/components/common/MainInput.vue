<template>
  <div class="input-wrap">
    <span class="input-wrap__title">{{ title }}</span>
    <div :class="getClassesInput">
      <slot name="link"></slot>
      <input
        :type="type"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        class="input-text"
        @input="emits('input', $event.target.value)"
      />
    </div>
    <transition name="fade">
       <span
           v-if="!valid"
           class="text-invalid"
       >
         Поле ялвляется обязательным
      </span>
    </transition>
  </div>
</template>

<script setup>
  import {computed} from "vue";

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  })

  const emits = defineEmits([
      'input'
  ])

  const getClassesInput = computed(() => {
    return ['input-form', {
      'input-form_invalid': !props.valid,
    }]
  })
</script>

<style scoped lang="scss">
  .input-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .input-wrap__title {
    color: $dark-gray;
    font-size: 14px;
    margin-bottom: 0.2em;
    padding-bottom: 3px;
  }


  .input-form {
    width: 100%;
    height: 44px;
    padding: 6.4px 17.6px;
    background-color: $gray;
    border: 1px solid #cdd1d6;
    border-radius: 7px;
    transition: $normal;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    &_invalid {
      border-color: $red;
    }
  }

  .input-form:hover{
    border: 1px solid $blue;
  }

  .input-text {
    width: 100%;
    color: $black;
    font-size: 16px;
    background-color: transparent;
    border: none;
  }

  .input-link + .input-text {
    width: calc(100% - 120px);
  }

  .text-invalid {
    color: $red;
    padding-left: 18px;
    font-size: 12px;
    margin: 2px 0 0;
    position: relative;

    &::before {
      content: "";
      border-radius: 50%;
      height: 4px;
      left: 7px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      background-color: $red;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>