import { defineStore } from 'pinia'
import { computed, ref, } from 'vue'

export const useFormValuesStore = defineStore('formData', () => {
  const formData = ref([]);

  // const formattedFormData = ref([]);

  const getFormData = computed(() => formData.value)
  
  function updateFormData(data) {
    formData.value = data;
    
    // console.log(getFormData.value);
    // console.log(formData.value);
  }





  return {getFormData, updateFormData }
})