<template>
	<main>
		<aside class="tabContainer">
      <!-- Sidebar start -->
      <button type="button" class="btn" @click.prevent="activephase = 'personalInfo'">
			<span class="btn--default" :class="{btn__active: activephase === 'personalInfo'}">1</span>
			<div class="btn--description" v-if="!isMobile">
				<p>step 1</p>
				<p>your info</p>
			</div>
		</button>
      <button type="button" class="btn" @click.prevent="activephase = 'selectPlan'">
			<span class="btn--default" :class="{btn__active: activephase === 'selectPlan'}">2</span>
			<div class="btn--description" v-if="!isMobile">
				<p>Step 2 </p>
				<p>Select plan</p>
			</div>
		</button>
      <button type="button" class="btn" @click.prevent="activephase = 'pickAddons'">
			<span class="btn--default" :class="{btn__active: activephase === 'pickAddons'}">3</span>
			<div class="btn--description" v-if="!isMobile">
				<p>Step 3</p>
				<p> Add-ons</p>
			</div>
		</button>
      <button type="button" class="btn" @click.prevent="activephase = 4">
			<span class="btn--default" :class="{btn__active: activephase === 'summary'}">4</span>
			<div class="btn--description" v-if="!isMobile">
				<p>Step 4</p>
				<p>Summary</p>
			</div>
		</button>

				

      <!-- Sidebar end -->
    </aside>
		<section class="form__container">
			<form>
				<!-- Step 1 start -->
				<fieldset v-if="activephase === 'personalInfo'">
					<legend>Personal info</legend>
					<p>Please provide your name, email address, and phone number.</p>
					<section class="form__control">
						<label for="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="e.g. Stephen King"
						/>
					</section>

					<section class="form__control">
						<label for="email">Email Address</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="e.g. stephenking@lorem.com"
						/>
					</section>

					<section class="form__control">
						<label for="phoneNumber">Phone Number</label>
						<input
							type="tel"
							name="phoneNumber"
							id="phoneNumber"
							placeholder="e.g. +1 234 567 890"
						/>
					</section>
				</fieldset>
				<!-- Step 1 end -->

				<!-- Step 2 start -->
				<fieldset v-if="activephase === 'selectPlan'">
					<legend>Select your plan</legend>
					<p>You have the option of monthly or yearly billing.</p>

					<section class="form__group--checkbox">
						<label for="plan">
							<p class="plan">Arcade</p>
							<p class="plan__price">$9/mo</p>
							<input type="checkbox" name="arcade" id="plan" />
						</label>
					</section>
					<section class="form__group--checkbox">
						<label for="plan">
							<p class="plan">Advanced</p>
							<p class="plan__price">$12/mo</p>
							<input type="checkbox" name="arcade" id="plan" />
						</label>
					</section>
					<section class="form__group--checkbox">
						<label for="plan">
							<p class="plan">Pro</p>
							<p class="plan__price">$15/mo</p>
							<input type="checkbox" name="arcade" id="plan" />
						</label>
					</section>

					<section>
						<p>Monthly</p>
						<section>
							<label for="rate" class="toggle__rate">
								<input type="checkbox" name="rate" id="rate" />
								<span class="toggle__rate__ball"></span>
							</label>
							<!-- <section class="toggle__rate">
              </section> -->
						</section>
						<p>Yearly</p>
					</section>
				</fieldset>
				<!-- Step 2 end -->

				<!-- Step 3 start -->
				<fieldset v-if="activephase === 'pickAddons'">
					<legend>Pick add-ons</legend>
					<p>Add-ons help enhance your gaming experience.</p>

					<section class="form__group--checkbox__addons">
						<label for="add_ons" class="label__add_ons checkbox__addons">
							<input type="checkbox" name="arcade" id="add_ons" />
							<section>
								<h1 class="label__title">Online service</h1>
								<p>Access to multiplayer games</p>
							</section>
							<p class="add_ons__price">+$1/mo</p>
						</label>
					</section>

					<section class="form__group--checkbox__addons">
						<label for="add_ons" class="label__add_ons checkbox__addons">
							<input type="checkbox" name="arcade" id="add_ons" />
							<section>
								<h1 class="label__title">Larger storage</h1>
								<p>Extra 1TB of cloud save</p>
							</section>
							<p class="add_ons__price">+$2/mo</p>
						</label>
					</section>

					<section class="form__group--checkbox__addons">
						<label for="add_ons" class="label__add_ons checkbox__addons">
							<input type="checkbox" name="arcade" id="add_ons" />
							<section>
								<h1 class="label__title">Customizable Profile</h1>
								<p>Custom theme on your profile</p>
							</section>
							<p class="add_ons__price">+$2/mo</p>
						</label>
					</section>
				</fieldset>
				<!-- Step 3 end -->

				<!-- Step 4 start -->

				<fieldset v-if="activephase === 'summary'">
					<legend>Finishing up</legend>
					<p>Double-check everything looks OK before confirming.</p>
					<!-- Dynamically add subscription and add-on selections here -->
					<section class="summary">
						<section class="summary__main">
							<section>
								<section>
									<p>Arcade(Monthly)</p>
									<button class="btn__change" type="button">Change</button>
								</section>
								<p>$9/mo</p>
							</section>
							<section>
								<p>Online service</p>
								<p>+$1/mo</p>
							</section>
							<section>
								<p>Large storage</p>
								<p>+$2/mo</p>
							</section>
						</section>

						<section class="summary__total">
							<p>Total (per month)</p>
							<p class="total__rate">+$12/mo</p>
						</section>
					</section>
				</fieldset>
				<!-- Step 4 end -->

				<!-- Step 5 start -->
				<section class="gratitude" v-if="activephase === 'gratitude'">
					<h1>Thank you!</h1>
					<p>
						Thanks for confirming your subscription! We hope you have fun using
						our platform. If you ever need support, please feel free to email us
						at support@loremgaming.com.
					</p>
				</section>
				<!-- Step 5 end -->
				<section class="btn__container">
					<button type="button">Go Back</button>

					<section>
						<button type="button">Next Step</button>
						<button type="submit">Confirm</button>
					</section>
				</section>
			</form>
		</section>
	</main>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// import PersonalInfo from "./components/PersonalInfo.vue";

const activephase = ref('personalInfo');
const isMobile = ref(null);
const windowWidth = ref(null);


function checkScreen() {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 768) {
    isMobile.value = true;
    return;
  }
  isMobile.value = false;
  return;
}
onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen)

});
// console.log(window.innerWidth);
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
