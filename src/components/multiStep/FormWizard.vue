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
import { computed, provide, ref, watchEffect } from 'vue';
import { useForm } from 'vee-validate';
import { useFormValuesStore } from '../../store/formValues';
import { generateFormSummary } from '../../composables/generateFormSummary';

const store = useFormValuesStore();

const props = defineProps({
	validationSchema: {
		type: Array,
		required: true
	}
});
const emit = defineEmits(['submit']);

const currentStepIdx = ref(0);
const stepCounter = ref(0);
// const FormDetails = ref([]);

// Injects the starting step, child <form-steps> will use this to generate their ids
provide('STEP_COUNTER', stepCounter);

// Inject the live ref of the current index to child components
// will be used to toggle each form-step visibility
provide('CURRENT_STEP_INDEX', currentStepIdx);

const hasPrevious = computed(()=> currentStepIdx.value > 0);
const isLastStep = computed(() => {
	return currentStepIdx.value === stepCounter.value - 1;
});

const goToPrev = () => {
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

const { handleSubmit } = useForm({
  
	validationSchema: currentSchema,

	keepValuesOnUnmount: true,
});


// watchEffect(() => {
//   console.log('FormDetails', FormDetails.value);
//   // store.updateFormData(values);
// })

// watchEffect(() => {
// 	console.log(values);
// })


const onSubmit = handleSubmit((values) => {
  if (!isLastStep.value) {
    currentStepIdx.value++;
    // console.log("from FormWizard", values);
    if (values.addons?.length) {
      // console.log("from FormWizard", values);
      // FormDetails.value = generateFormSummary(values);
      store.updateFormData(generateFormSummary(values))
    }
    
    // const formData = [values]
    // console.log(formData);
    // FormDetails.value[0] = values;
    return;
  }

  // Let the parent know the form was filled across all steps
  emit('submit', values);
});


</script>

<style scoped>

</style>
