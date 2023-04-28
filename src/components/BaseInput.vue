<template>
	<section class="form__control">
		<label for="name">Name</label>
    <!-- type="text" -->
		<input
    v-bind="$attrs"
			name="name"
			id="name"
			placeholder="e.g. Stephen King"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      />
			<!-- v-model="name" -->
		<span class="error">{{ errors.name }}</span>
	</section>
</template>

<script setup>
import { string } from 'yup';

defineProps({
  name: {
    type: string,
    required: true
  },
  placeholder: {
    type: string
  },
  error: {
    type: string,
    required: true
  },
  modelValue: {}
})
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped></style>
