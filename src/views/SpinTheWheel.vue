<template>
	<div
		class="min-h-screen min-w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-black py-16"
	>
		<div
			class="mx-auto max-w-[680px] min-h-[calc(100vh-128px)] flex flex-col gap-8 px-4"
		>
			<div class="text-3xl text-white flex justify-center">
				Spin The Wheel
			</div>
			<div class="text-xl text-gray-200 flex text-center pt-6">
				If you are an Alpha/Master looking to make use of this, fill
				in the options and click spin. Each time you come to this page
				it will go right to the wheel for all future visits with your
				preferred options.
			</div>

			<!-- Options Dropdowns -->
			<div class="flex flex-col gap-3 mt-4">
				<div
					v-for="index in numOptions"
					:key="index"
					class="flex items-center"
				>
					<label
						:for="'option' + index"
						class="text-gray-200 pr-2 w-32"
					>
						Option {{ index }}:
					</label>
					<select
						:id="'option' + index"
						class="bg-gray-800 px-4 py-3 text-white border-gray-700 border w-full"
						v-model="selectedOptions[index - 1]"
					>
						<option
							v-for="(option, optionIndex) in sharedOptions"
							:key="optionIndex"
						>
							{{ option }}
						</option>
					</select>
				</div>
			</div>

			<div class="w-full flex justify-between gap-6">
				<button
					@click="addOption"
					class="text-white mt-2 w-full py-4 bg-sky-600 hover:bg-sky-700 rounded-lg"
					:class="{ hidden: numOptions === 10 }"
				>
					Add Option
				</button>
				<button
					class="text-white mt-2 w-full py-4 bg-red-600 hover:bg-red-700 rounded-lg"
				>
					Show Wheel
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const numOptions = ref(4);
const maxOptions = 10;

const sharedOptions = [
	"$5",
	"$10",
	"$15",
	"$20",
	"$25",
	"$30",
	"$35",
	"$40",
	"$45",
	"$50",
	"$55",
	"$60",
	"$65",
	"$70",
	"$75",
	"$80",
	"$85",
	"$90",
	"$95",
	"$100",
	"Masters Choice",
];

const selectedOptions = ref(
	Array(numOptions.value).fill(sharedOptions[0])
);

const addOption = () => {
	if (numOptions.value < maxOptions) {
		numOptions.value++;
		selectedOptions.value.push(sharedOptions[0]);
	}
};
</script>
