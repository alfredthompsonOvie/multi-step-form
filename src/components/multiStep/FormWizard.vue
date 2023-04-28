<template>
	<form 
  @submit="onSubmit"
  
  >
		<section class="form__contents">
			<section class="select__plan"></section>
			<!-- 
			<section class="personal__info"></section>
			<section class="pick__addons"></section>
			<section class="summary"></section>
			<section class="thankYou"></section> -->
      <slot/>
		</section>

		<section class="form__navigation">
			<button 
      v-if="hasPrevious"
      type="button"
      @click.prevent="goToPrev"
      class="btn--goBack"
      >
        Go Back
      </button>
      <section>
        <button 
        type="submit"
        v-if="!isLastStep"
        class="btn--next"
        >Next Step</button>
        <button 
        type="submit"
        class="btn--confirm"
        v-if="isLastStep"
        >Confirm</button>

      </section>
		</section>
	</form>
</template>

<script setup>
import { computed, provide, ref } from 'vue';
import { useForm } from 'vee-validate';

const props = defineProps({
	validationSchema: {
		type: Array,
		required: true
	}
});
const emit = defineEmits(['submit']);

const currentStepIdx = ref(0);
const stepCounter = ref(0);


// Injects the starting step, child <form-steps> will use this to generate their ids
provide('STEP_COUNTER', stepCounter);

// Inject the live ref of the current index to child components
// will be used to toggle each form-step visibility
provide('CURRENT_STEP_INDEX', currentStepIdx);

const hasPrevious = computed(()=> currentStepIdx.value > 0);
const isLastStep = computed(() => {
	return currentStepIdx.value === stepCounter.value - 1;
});

const goBack = () => {
	if (currentStepIdx.value === 0) {
		return;
	}
	currentStepIdx.value--;
}
const nextStep = () => {
	if (currentStepIdx.value === stepCounter.value - 1) {
		return;
	}
	currentStepIdx.value++
}

const currentSchema = computed(()=>props.validationSchema[currentStepIdx.value])

const { values, handleSubmit } = useForm({

	validationSchema: currentSchema,

	keepValuesOnUnmount: true,
});

const onSubmit = handleSubmit((values) => {
  if (!isLastStep.value) {
    currentStepIdx.value++;

    return;
  }

  // Let the parent know the form was filled across all steps
  emit('submit', values);
});


</script>

<style scoped>

</style>
