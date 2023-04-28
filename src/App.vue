<template>
	<main>
		<!-- Sidebar start -->
		<aside class="tabContainer">
			<button
				type="button"
				class="btn"
				@click.prevent="activephase = 'personalInfo'"
			>
				<span class="btn--default">
					<!-- :class="{ activeStep: activephase === 'personalInfo' }" -->
					1
				</span>
				<div class="btn--description" v-if="!isMobile">
					<p>step 1</p>
					<p>your info</p>
				</div>
			</button>
			<button
				type="button"
				class="btn"
				@click.prevent="activephase = 'selectPlan'"
			>
				<span class="btn--default">
					<!-- :class="{ activeStep: activephase === 'selectPlan' }" -->
					2</span
				>
				<div class="btn--description" v-if="!isMobile">
					<p>Step 2</p>
					<p>Select plan</p>
				</div>
			</button>
			<button
				type="button"
				class="btn"
				@click.prevent="activephase = 'pickAddons'"
			>
				<span class="btn--default">
					<!-- :class="{ activeStep: activephase === 'pickAddons' }" -->
					3</span
				>
				<div class="btn--description" v-if="!isMobile">
					<p>Step 3</p>
					<p>Add-ons</p>
				</div>
			</button>
			<button
				type="button"
				class="btn"
				@click.prevent="activephase = 'summary'"
			>
				<span class="btn--default">
					<!-- :class="{ activeStep: activephase === 'summary' }" -->
					4</span
				>
				<div class="btn--description" v-if="!isMobile">
					<p>Step 4</p>
					<p>Summary</p>
				</div>
			</button>
		</aside>
		<!-- Sidebar end -->

		<!-- form wizard -->
		<FormWizard :validation-schema="schema" @submit="onSubmit">
			<!-- step 1 -->
			<FormStep>
				<h1 class="heading">Personal info</h1>
				<p class="form__description">
					Please provide your name, email address, and phone number.
				</p>
				<section class="form__group">
					<section class="form__control">
						<label for="fullname">Name</label>
						<Field
							type="text"
							name="fullname"
							id="fullname"
							placeholder="e.g. Stephen King"
							class="form__field"
							:class="{ 'form__field--error': ErrorMessage.message }"
						/>
						<ErrorMessage name="fullname" class="error error--personal__info" />
					</section>

					<section class="form__control">
						<label for="email">Email Address</label>
						<Field
							type="email"
							name="email"
							id="email"
							placeholder="e.g. stephenking@lorem.com"
							class="form__field"
						/>
						<!-- :class="{'form__field--error': ErrorMessage.name}" -->
						<ErrorMessage name="email" class="error error--personal__info" />
					</section>

					<section class="form__control">
						<label for="phoneNumber">Phone Number</label>
						<Field
							type="tel"
							name="phoneNumber"
							id="phoneNumber"
							placeholder="e.g. +1 234 567 890"
							class="form__field"
						/>
						<ErrorMessage
							name="phoneNumber"
							class="error error--personal__info"
						/>
					</section>
				</section>
			</FormStep>
			<!-- step 1 -->

			<!-- step 2 starts -->
			<FormStep>
				<h1>Select your plan</h1>
				<p>You have the option of monthly or yearly billing.</p>
				<section class="form__group__plans">
					<section class="form__group--checkbox">
						<Field
							type="radio"
							name="plan"
							value="arcade"
							id="arcade"
							class="plan--checkbox"
						/>
						<label for="arcade" class="plan--label">
							<img src="@/assets/images/icon-arcade.svg" alt="" />
							<section>
								<p class="plan">Arcade</p>
								<p class="plan__price">$9/mo</p>
								<p class="plan__discount">2 months free</p>
							</section>
						</label>
					</section>
					<section class="form__group--checkbox">
						<Field
							type="radio"
							name="plan"
							value="advanced"
							id="advanced"
							class="plan--checkbox"
						/>
						<label for="advanced" class="plan--label">
							<img src="@/assets/images/icon-advanced.svg" alt="" />
							<section>
								<p class="plan">Advanced</p>
								<p class="plan__price">$12/mo</p>
								<p class="plan__discount">2 months free</p>
							</section>
						</label>
					</section>
					<section class="form__group--checkbox">
						<Field
							type="radio"
							name="plan"
							value="pro"
							id="pro"
							class="plan--checkbox"
						/>
						<label for="pro" class="plan--label">
							<img src="@/assets/images/icon-pro.svg" alt="" />
							<section>
								<p class="plan">Pro</p>
								<p class="plan__price">$15/mo</p>
								<p class="plan__discount">2 months free</p>
							</section>
						</label>
					</section>

					<ErrorMessage name="plan" class="error--plan" />
				</section>

				<section class="rate__toggler">
					<p>Monthly</p>
					<section>
						<label for="rate" class="toggle__rate">
							<Field type="checkbox" name="rate" id="rate" />
							<span class="toggle__rate__ball"></span>
						</label>
					</section>
					<p>Yearly</p>
				</section>
			</FormStep>
			<!-- step 2 ends -->

			<!-- step 3 -->
			<FormStep>
				<h1>Pick add-ons</h1>
				<p>Add-ons help enhance your gaming experience.</p>

				<section class="form__group--checkbox__addons">
					<label for="onlineService" class="label__add_ons checkbox__addons">
						<Field
							type="checkbox"
							name="addons"
							id="onlineService"
							value="onlineService"
						/>
						<section>
							<h1 class="label__title">Online service</h1>
							<p>Access to multiplayer games</p>
						</section>
						<p class="add_ons__price">+$1/mo</p>
					</label>
				</section>

				<section class="form__group--checkbox__addons">
					<label for="largerStorage" class="label__add_ons checkbox__addons">
						<Field
							type="checkbox"
							name="addons"
							id="largerStorage"
							value="largerStorage"
						/>
						<section>
							<h1 class="label__title">Larger storage</h1>
							<p>Extra 1TB of cloud save</p>
						</section>
						<p class="add_ons__price">+$2/mo</p>
					</label>
				</section>

				<section class="form__group--checkbox__addons">
					<label
						for="customizableProfile"
						class="label__add_ons checkbox__addons"
					>
						<Field
							type="checkbox"
							name="addons"
							id="customizableProfile"
							value="customizableProfile"
						/>
						<section>
							<h1 class="label__title">Customizable Profile</h1>
							<p>Custom theme on your profile</p>
						</section>
						<p class="add_ons__price">+$2/mo</p>
					</label>
				</section>

				<ErrorMessage name="addons" />
			</FormStep>
			<!-- step 3 -->

			<!-- step 4 -->
			<FormStep >
				<h1>Finishing up</h1>
				<p>Double-check everything looks OK before confirming.</p>
				<!-- Dynamically add subscription and add-on selections here -->
				<p>{{ store.getFormData }}</p>
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
			</FormStep>
			<!-- step 4 -->

			<!-- step 5 -->
			<!-- step 5 -->
		</FormWizard>
		<!-- form wizard -->
	</main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { object, string, number, array } from "yup";
import { Field, ErrorMessage } from "vee-validate";

import FormWizard from "./components/multiStep/FormWizard.vue";
import FormStep from "./components/multiStep/FormStep.vue";
import { useFormDataStore } from "./store/formData";


const store = useFormDataStore();


const activephase = ref("personalInfo");





const isMobile = ref(null);
const windowWidth = ref(null);

function checkScreen() {
	windowWidth.value = window.innerWidth;
	if (windowWidth.value < 810) {
		isMobile.value = true;
		return;
	}
	isMobile.value = false;
	return;
}
onMounted(() => {
	checkScreen();
	window.addEventListener("resize", checkScreen);
});

const schema = [
	object({
		fullname: string().required("This field is required"),
		email: string()
			.email("Please enter a valid email")
			.required("This field is required"),
		phoneNumber: number().required("This field is required"),
	}),
	object({
		plan: string().required("Please select a plan"),
	}),
	object({
		addons: array().of(string()).required("Please pick add-ons"),
	}),
];

function onSubmit(formData) {
	console.log(JSON.stringify(formData, null, 2));
}
</script>

<style lang="scss" scoped></style>
