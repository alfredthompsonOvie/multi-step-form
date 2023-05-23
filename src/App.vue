<template>
	<main>
		<!-- Sidebar start -->
		<aside class="tabContainer steps">
			<section class="step">
				<span
					class="step__number--default"
					:class="{ activeStep: currentStep === 0 }"
				>
					1</span
				>
				<section class="step__description" v-if="!isMobile">
					<p class="step__title">step 1</p>
					<p>your info</p>
				</section>
			</section>
			<section class="step">
				<span
					class="step__number--default"
					:class="{ activeStep: currentStep === 1 }"
				>
					2
				</span>
				<section class="step__description" v-if="!isMobile">
					<p class="step__title">step 2</p>
					<p>Select plan</p>
				</section>
			</section>
			<section class="step">
				<span
					class="step__number--default"
					:class="{ activeStep: currentStep === 2 }"
				>
					3
				</span>
				<section class="step__description" v-if="!isMobile">
					<p class="step__title">step 3</p>
					<p>Add-ons</p>
				</section>
			</section>
			<section class="step">
				<span
					class="step__number--default"
					:class="{ activeStep: currentStep === 3 }"
					>4</span
				>
				<section class="step__description" v-if="!isMobile">
					<p class="step__title">step 4</p>
					<p>Summary</p>
				</section>
			</section>
		</aside>
		<!-- Sidebar end -->

		<!-- form wizard -->
		<FormWizard
			:validation-schema="schema"
			@submit="onSubmit"
			@step="handleStep"
			@errors="displayError"
			:editStepCounter="editStepCounter"
			v-if="showForm"
		>
			<!-- step 1 -->
			<FormStep>
				<h1 class="heading">Personal info</h1>
				<p class="form__description">
					Please provide your name, email address, and phone number.
				</p>
				<section class="form__group">
					<section class="form__control">
						<label for="fullname" class="form__control--label">Name</label>
						<Field
							type="text"
							name="fullname"
							id="fullname"
							placeholder="e.g. Stephen King"
							class="form__field"
							:class="{ 'form__field--error': fullnameError }"
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
							:class="{ 'form__field--error': emailError }"
						/>
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
							:class="{ 'form__field--error': phoneNumberError }"
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
			<!-- SELECT PLAN -->
			<FormStep>
				<h1>Select your plan</h1>
				<p>You have the option of monthly or yearly billing.</p>
				<section class="form__group__plans">
					<!--! loop starts here -->
					<section
						class="form__group--checkbox"
						v-for="plan in displayPlan"
						:key="plan.name"
					>
						<Field
							type="radio"
							name="plan"
							:value="plan.name"
							:id="plan.name"
							class="plan--checkbox"
						/>
						<label :for="plan.name" class="plan--label">
							<img :src="`${getImageUrl(plan.image)}`" :alt="plan.name" />
							<section>
								<TransitionGroup name="fade">
									<p class="plan" :key="plan.name">{{ plan.name }}</p>
									<p class="plan__price" :key="plan.price">
										${{ plan.price }}/{{ plan.rate }}
									</p>
									<p
										class="plan__discount"
										v-if="showDiscountRate"
										key="discount"
									>
										2 months free
									</p>
								</TransitionGroup>
							</section>
						</label>
					</section>

					<Transition name="slideUp">
						<ErrorMessage name="plan" class="error--plan" />
					</Transition>
				</section>

				<section class="rate__toggler">
					<p>Monthly</p>
					<section class="toggle__rate__switch">
						<Field
							v-slot="{ field }"
							name="rate"
							type="checkbox"
							:value="true"
							keepValue
							v-model="formData.rate"
							rules="string|required"
						>
							<input
								v-bind="field"
								type="checkbox"
								id="rate"
								class="toggle__rate__checkbox"
								name="rate"
								:value="true"
								@change="onChange"
							/>
						</Field>
						<label for="rate" class="toggle__rate__label"></label>
					</section>

					<p>Yearly</p>
				</section>
			</FormStep>
			<!-- step 2 ends -->

			<!-- step 3 -->
			<!-- PICK ADD_ONS -->
			<FormStep>
				<h1>Pick add-ons</h1>
				<p>Add-ons help enhance your gaming experience.</p>

				<section class="form__group__addons">
					<Field
						type="checkbox"
						name="addons"
						id="onlineService"
						value="Online service"
						class="addons__checkbox"
						v-model="formData.addons"
					/>
					<label for="onlineService" class="addons__label">
						<section>
							<h1 class="label__title">Online service</h1>
							<p>Access to multiplayer games</p>
						</section>
						<p class="add_ons__price">+$1/mo</p>
					</label>
				</section>

				<section class="form__group__addons">
					<Field
						type="checkbox"
						name="addons"
						id="largerStorage"
						value="Larger storage"
						class="addons__checkbox"
						v-model="formData.addons"
					/>
					<label for="largerStorage" class="addons__label">
						<section>
							<h1 class="label__title">Larger storage</h1>
							<p>Extra 1TB of cloud save</p>
						</section>
						<p class="add_ons__price">+$2/mo</p>
					</label>
				</section>

				<section class="form__group__addons">
					<Field
						type="checkbox"
						name="addons"
						id="customizableProfile"
						value="Customizable profile"
						class="addons__checkbox"
						v-model="formData.addons"
					/>
					<label for="customizableProfile" class="addons__label">
						<section>
							<h1 class="label__title">Customizable Profile</h1>
							<p>Custom theme on your profile</p>
						</section>
						<p class="add_ons__price">+$2/mo</p>
					</label>
				</section>

				<Transition name="slideUp">
					<ErrorMessage name="addons" class="error--addons" />
				</Transition>
			</FormStep>
			<!-- step 3 -->

			<!-- step 4 -->
			<FormStep>
				<h1>Finishing up</h1>
				<p>Double-check everything looks OK before confirming.</p>
				<!-- Dynamically add subscription and add-on selections here -->
				<section class="summary__list">
					<section class="summary__item summary__item__plan">
						<section>
							<p class="summary__item__plan__title">
								<span>{{ store.getFormData.plan }}</span>
								<span>({{ store.getFormData.rate }})</span>
							</p>
							<button
								class="editFormBtn"
								type="button"
								@click.prevent="editForm"
							>
								Change
							</button>
						</section>
						<p class="summary__item__plan__price">
							${{ store.getFormData.planPrice }}/{{
								formData.rate ? "yr" : "mo"
							}}
						</p>
					</section>

					<p
						class="summary__item summary__item__addons"
						v-for="addon in store.getFormData.addons"
						:key="addon"
					>
						<span>{{ addon.name }}</span>
						<span class="summary__item__addons__price"
							>+${{ addon.price }}/{{ formData.rate ? "yr" : "mo" }}</span
						>
					</p>
				</section>
				<section class="summary__total">
					<p>Total (per {{ formData.rate ? "year" : "month" }})</p>
					<p class="total__rate">
						+${{ store.getFormData.total }}/{{ formData.rate ? "yr" : "mo" }}
					</p>
				</section>
			</FormStep>
			<!-- step 4 -->
		</FormWizard>
		<!-- form wizard -->

		<!-- Thank You -->
		<ThankYou v-else />
	</main>
	<!-- <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.linkedin.com/in/alfredthompsonovie/" target="_blank">Alfred Thompson Ovie</a>.
  </div> -->
</template>

<script setup>
import { computed, onMounted, onUpdated, ref } from "vue";
import { object, string, number, array } from "yup";
import { Field, ErrorMessage } from "vee-validate";

import FormWizard from "./components/multiStep/FormWizard.vue";
import FormStep from "./components/multiStep/FormStep.vue";
import { useFormValuesStore } from "./store/formValues";

import ThankYou from "@/components/ThankYou.vue";

import { gsap } from "gsap";


const store = useFormValuesStore();

const currentStep = ref(0);
const showDiscountRate = ref(false); // SHOWS DISCOUNT RATE TEXT ON PLAN STEP
const showForm = ref(true); //TOGGLE BETWEEN FORM AND THANK YOU COMPONENT
const editStepCounter = ref(0); //THE CHANGE BTN ON SUMMARY PAGE

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
onMounted(() => {
	const tl = gsap.timeline({
		onComplete: () => {
			gsap.to([
				'main',
				"aside",
				'.step',
				".form__contents",
				".form__navigation > *",
			], {
				clearProps: true
			})
		}
	});
	tl
		.from('main', {
			autoAlpha: 0.01,
			x: 50,
		})
		.fromTo('aside', {
			autoAlpha: 0.01,
			clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",

		}, {
			autoAlpha: 1,
			clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)"
		})
		.from(".step", {
			autoAlpha: 0.01,
			y: 20,
			stagger: 0.2
		})
		.from(".form__contents", {
			autoAlpha: 0.01,
			y: 20,
		}, "<")
		.from(".form__navigation > *", {
			x: -20,
			autoAlpha: 0.01,
		}, "-=0.8")
	// gsap.from(".form__contents", {
	// 	x: 100,
	// 	autoAlpha: 0.01,
	// });
	// gsap.from(".thankYou", {
	// 	x: 30,
	// 	autoAlpha: 0.01,
	// })
});
onUpdated(() => {
	// gsap.from(".form__contents", {
	// 	y: 100,
	// 	autoAlpha: 0.01,
	// });
		// console.log('App updated');
})

// THIS IS V-MODELLED INTO THE FORM AND IT MAKES VALIDATION ON ADDONS STEP WORK============================================================================
const formData = ref({
	rate: false,
	// plan: "",
	addons: [],
});

// ! started=================================================================
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
		rate: string(),
	}),
	object({
		addons: array().of(string()).min(1, "Please pick add-ons"),
	}),
];

function onSubmit() {
	// console.log(JSON.stringify(formData, null, 2));
	// console.log(store.getFormData);
	const data = store.getFormData;
	console.log(JSON.stringify(data, null, 2));

	// go to thank you page
	showForm.value = false;
}
//! end ========================================================================

// INDICATES CURRENT STEP=======================================================
function handleStep(curr) {
	currentStep.value = curr;
}
// CHANGE BUTTON ON SUMMARY STEP================================================
function editForm() {
	if (editStepCounter.value) {
		editStepCounter.value = 0;
		return;
	}
	editStepCounter.value = 1;
}

// DISPLAY ERRORS ON PERSONAL INFO STEP=========================================
const fullnameError = ref(null);
const emailError = ref(null);
const phoneNumberError = ref(null);

function displayError(err) {
	if (err) {
		const { fullname, email, phoneNumber } = err;

		fullnameError.value = fullname;
		emailError.value = email;
		phoneNumberError.value = phoneNumber;
		return;
	}
	fullnameError.value = null;
	emailError.value = null;
	phoneNumberError.value = null;
	return;
}

// SHOWS DISCOUNT TEXT ON SELECT PLAN STEP=====================================
const onChange = ($event) => {
	if ($event.target.checked) {
		showDiscountRate.value = true;
		return;
	}
	showDiscountRate.value = false;
	return;
};

// DYNAMICALLY RENDER PLANS ON SELECT PLAN STEP=================================
const selectPlan = ref([
	{
		name: "Arcade",
		image: "icon-arcade.svg",
		price: 9,
		rate: "mo",
	},
	{
		name: "Advanced",
		image: "icon-advanced.svg",
		price: 12,
		rate: "mo",
	},
	{
		name: "Pro",
		image: "icon-pro.svg",
		price: 15,
		rate: "mo",
	},
]);

const displayPlan = computed(() => {
	if (!showDiscountRate.value) {
		return selectPlan.value;
	}
	return [
		{
			name: "Arcade",
			image: "icon-arcade.svg",
			price: 90,
			rate: "yr",
		},
		{
			name: "Advanced",
			image: "icon-advanced.svg",
			price: 120,
			rate: "yr",
		},
		{
			name: "Pro",
			image: "icon-pro.svg",
			price: 150,
			rate: "yr",
		},
	];
});
function getImageUrl(name) {
	return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}

// ---------------------------------------------------
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
.fade-enter-active,
.fade-leave-active,
.fade-move {
	transition: all 0.5s ease;
}
.fade-leave-active {
	position: absolute;
}

.slideUp-enter-from,
.slideUp-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
.slideUp-enter-active,
.slideUp-leave-active {
	transition: all 0.5s ease;
}
</style>
