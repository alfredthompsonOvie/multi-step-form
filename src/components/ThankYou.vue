<template>
	<section class="feedback">
		<section class="thankYou">
			<!-- Step 5 start -->
			<img src="@/assets/images/icon-thank-you.svg" alt="checkmark icon" />
			<h1>Thank you!</h1>
			<p>
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</p>
			<!-- Step 5 end -->
		</section>
	</section>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
	gsap.fromTo(
		".thankYou",
		{
			y: 30,
			autoAlpha: 0.01,
		},
		{
			y: 0,
			autoAlpha: 1,
		}
	);
});
</script>

<style scoped>
.thankYou {
	position: relative;
	min-height: calc(100vh - 200px);
	border-radius: 8px;
	min-height: 300px;
	padding: 2em 1.5em;
	margin-inline: 1em;
	margin-bottom: 2em;
	border-radius: 8px;
	background-color: var(--White);
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
img {
	width: 5em;
	height: 5em;
	border-radius: 50%;
	margin-bottom: 1.5em;
}
p {
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
		margin: 0em;
	}
}
</style>
