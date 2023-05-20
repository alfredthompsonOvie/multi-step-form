import { defineStore } from 'pinia'
import { computed, ref, watchEffect } from 'vue'

export const useFormDataStore = defineStore('formData', () => {
  const formData = ref([]);

  const formattedFormData = ref([]);

  const getFormData = computed(() => formData.value)
  
  function updateFormData(data) {
    // formData.value = ;
    // formData.value = data;
    formData.value.push(data);
    // console.log(formData.value);
    // console.log(typeof data);
    // console.log(JSON.parse(formData.value));
  }

  watchEffect(() => {
    // if (getFormData.value.rate) {
    //   console.log('Pinia', getFormData.value.rate);
    // }
    if (getFormData.value) {
      // console.log('Pinia', getFormData.value.addons);
      formattedFormData.value = formData.value.map(data => {
        // console.log(data);
        // console.log(data.fullname);
      })
    }
  })

  return { formData, getFormData, updateFormData }
})