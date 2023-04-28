import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useFormDataStore = defineStore('formData', () => {
  const formData = ref([])

  const getFormData = computed(() => formData.value)
  function updateFormData(data) {
    // formData.value = ;
    formData.value = data;
    console.log(formData.value);
    console.log(typeof data);
  }

  return { getFormData, updateFormData }
})