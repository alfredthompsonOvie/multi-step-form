<template>
	<form @submit="onSubmit">
		<section class="form__contents">
			<slot />
		</section>

    <Transition name="slideDown" appear>

    </Transition>
		<section class="form__navigation">
      <Transition name="slideIn" appear>
        <button
          v-if="hasPrevious"
          type="button"
          @click.prevent="goToPrev"
          class="btn--goBack"
        >
          Go Back
        </button>
      </Transition>
			<section>
				<button type="submit" v-if="!isLastStep" class="btn--next">
					Next Step
				</button>
				<button type="submit" class="btn--confirm" v-if="isLastStep">
					Confirm
				</button>
			</section>
		</section>
	</form>
</template>

<script setup>
import { computed, provide, ref, watch, watchEffect } from "vue";
import { useForm } from "vee-validate";
import { useFormValuesStore } from "../../store/formValues";
import { generateFormSummary } from "../../composables/generateFormSummary";

const store = useFormValuesStore();

const props = defineProps({
	validationSchema: {
		type: Array,
		required: true,
	},
	editStepCounter: {
		type: Number,
	},
});
const emit = defineEmits(["submit", "step", "errors"]);

const currentStepIdx = ref(0);
const stepCounter = ref(0);

// Injects the starting step, child <form-steps> will use this to generate their ids
provide("STEP_COUNTER", stepCounter);

// Inject the live ref of the current index to child components
// will be used to toggle each form-step visibility
provide("CURRENT_STEP_INDEX", currentStepIdx);

const hasPrevious = computed(() => currentStepIdx.value > 0);

const isLastStep = computed(() => {
	return currentStepIdx.value === stepCounter.value - 1;
});

const goToPrev = () => {
	if (currentStepIdx.value === 0) {
		return;
	}
	currentStepIdx.value--;
};
// const nextStep = () => {
// 	if (currentStepIdx.value === stepCounter.value - 1) {
// 		return;
// 	}
//   currentStepIdx.value++

// }
watch(props, () => {
	currentStepIdx.value = 1;
});
watchEffect(() => {
	emit("step", currentStepIdx.value);
});

const currentSchema = computed(
	() => props.validationSchema[currentStepIdx.value]
);

const { handleSubmit, errors } = useForm({
	validationSchema: currentSchema,

	keepValuesOnUnmount: true,
});

const onSubmit = handleSubmit((values) => {
	if (!isLastStep.value) {
		currentStepIdx.value++;

		if (values.addons?.length) {
			store.updateFormData(generateFormSummary(values));
		}
		return;
	}

	// Let the parent know the form was filled across all steps
	emit("submit", values);
});
watchEffect(() => {
	emit("errors", errors.value);
});
</script>

<style scoped>
.slideIn-enter-from, .slideIn-leave-to {
  opacity: 0;
  transform: translateX(-3em);
}
.slideIn-enter-active, .slideIn-leave-active {
  transition: all .5s ease;
}
</style>
