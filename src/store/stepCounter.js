import { defineStore } from "pinia";
import { ref, computed } from 'vue';

const useStepCounter = defineStore('stepCounter', () => {
  const stepCounter = ref(0);

  const currentStep = computed(() => stepCounter.value);

  const increaseStep = () => stepCounter.value++;
  const decreaseStep = () => stepCounter.value--;

  return {
    currentStep,
    increaseStep,
    decreaseStep
  }
})

export { useStepCounter };