<template>
  <div>
    personal

    <!-- Step 1 start -->

  
  

  
  

  
  

  
  

  

  <!-- Step 1 end -->
    <form>
      <h1 class="form__title">Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <section class="form--main">
        <section class="form__group">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="e.g. Stephen King" class="form__control">
      </section>
      <section class="form__group">
        <label for="name">Email Address</label>
        <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" class="form__control">
      </section>
      <section class="form__group">
        <label for="name">Phone Number</label>
        <input type="tel" name="tel" id="tel" placeholder="e.g. +1 234 567 890" class="form__control">
      </section>
      </section>

      <button type="submit">Next Step</button>
    </form>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>