import { ref } from "vue";

const plan = ref([
	{
		name: "Arcade",
		price: 9,
	},
	{
		name: "Advanced",
		price: 12,
	},
	{
		name: "Pro",
		price: 15,
	},
]);
const pickAddons = ref([
	{
		name: "Online service",
		price: 1,
	},
	{
		name: "Larger storage",
		price: 2,
	},
	{
		name: "Customizable profile",
		price: 2,
	},
]);
function searchArray(arr, rate) {
	let addons = [];
	pickAddons.value.forEach((e) => {
		arr.addons.forEach((el) => {
			if (e.name === el) {
				addons.push(e)
			}
		})
	})

	addons = addons.map(e => ({
		name: e.name,
		price: e.price * rate
	}))
	
	// console.log("from searchArray", addons);
  // returns an array
	return addons;
}

function searchPlan(p, rate) {
	let selectedPlan;
	selectedPlan = plan.value
		.filter(e => e.name === p)
		.map(e => {
			return e.price * rate;
		}).join('')

	return selectedPlan;

}

function calTotal(obj1, obj2) {
	// console.log(obj1, obj2);
	let total = parseInt(obj1) + obj2
		.map(e => parseInt(e.price))
		.reduce((acc, curr)=> acc + curr, 0);

	return total;
}

function generateFormSummary(values) {
	let summary;
	searchArray(values);

	if (!values.rate) {
		summary = {
			name: values.fullname,
			email: values.email,
			tel: values.phoneNumber,
      plan: values.plan,
      planPrice: searchPlan(values.plan, 1),
			rate: "Monthly",
			addons: searchArray(values, 1),
			total: calTotal(searchPlan(values.plan, 1), searchArray(values, 1))
		};

		return summary;
	}
  
	summary = {
		name: values.fullname,
		email: values.email,
		tel: values.phoneNumber,
		plan: values.plan,
		planPrice: searchPlan(values.plan, 10),
		rate: "Yearly",
		addons: searchArray(values, 10),
		total: calTotal(searchPlan(values.plan, 10), searchArray(values, 10))
	};

	return summary;
}

export { generateFormSummary };

