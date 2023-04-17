<template>
  <div>
    App

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil repellendus inventore! Similique ipsa facilis vero totam nostrum odio, beatae iure corporis consequatur explicabo odit, vitae, natus consequuntur rerum eaque.

    <PersonalInfo />
    <section class="container">
      <section class="tabContainer">
        <!-- Sidebar start -->

  Step 1
  Your info

  Step 2
  Select plan

  Step 3
  Add-ons

  Step 4
  Summary

  <!-- Sidebar end -->
      </section>
      <section class="formSection"></section>
      <section class="pagination"></section>
    </section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil repellendus inventore! Similique ipsa facilis vero totam nostrum odio, beatae iure corporis consequatur explicabo odit, vitae, natus consequuntur rerum eaque.
    <button type="button" class="btn">
      <span class="btn--default">1</span>
      <div class="btn--description">
        <span>step 1</span>
        <span>your info</span>
      </div>
    </button>
  </div>

</template>

<script setup>
import PersonalInfo from './components/PersonalInfo.vue';
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  gap: 1em;
}
.btn--default {
  padding: 1em;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn--description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-transform: uppercase;
}
</style>