<template>
  <section class="feedback">
    <section class="thankYou">
    <!-- Step 5 start -->
      <img src="@/assets/images/icon-thank-you.svg" alt="checkmark icon">
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at support@loremgaming.com.
      </p>
    <!-- Step 5 end -->
    </section>
  </section>
</template>

<script setup>
import {  onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
	gsap.fromTo(".thankYou", {
		y: 30,
		autoAlpha: 0.01,
  }, {
    y: 0,
    autoAlpha: 1,
  })
});

</script>

<style  scoped>
.thankYou {
	position: relative;
	min-height: calc(100vh - 200px);
  border-radius: 8px;
  min-height: 300px;
  padding: 2em 1.5em;
  margin-inline: 1em;
  margin-bottom: 2em;
  border-radius: 8px;
  /* position: relative; */
  /* top: -3em; */
  background-color: var(--White);
  text-align: center;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
img { 
  width: 3.5em;
}
p {
  --PurplishBlue: hsl(243, 100%, 62%);
	--PastelBlue: hsl(228, 100%, 84%);
	--LightBlue: hsl(206, 94%, 87%);
	--StrawberryRed: hsl(354, 84%, 57%);

	--CoolGray: hsl(231, 11%, 63%);
	--LightGray: hsl(229, 24%, 87%);
	--Magnolia: hsl(217, 100%, 97%);
	--Alabaster: hsl(231, 100%, 99%);
	--White: hsl(0, 0%, 100%);

  color: var(--CoolGray);
}
@media (min-width: 530px) {
  .thankYou {
    max-width: 500px;
    width: 100%;
    margin-inline: auto;
  }
}
@media (min-width: 810px) {
  .thankYou {
    /* grid-column: 2; */
	/* position: relative; */
	/* min-height: calc(100vh - 200px); */
  /* border-radius: 8px; */
  /* min-height: 300px; */
  /* padding: 2em 1.5em; */
  /* margin-inline: 0em; */
  margin: 0em;
  /* border-radius: 8px; */
  /* position: relative; */
  /* top: 0em; */
  /* background-color: var(--White); */

}
}
</style>