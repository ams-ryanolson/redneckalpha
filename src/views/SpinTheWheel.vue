<template>
	<div
		class="min-h-screen min-w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-black py-16"
	>
		<div
			v-if="showWheel === false"
			class="mx-auto max-w-[680px] min-h-[calc(100vh-128px)] flex flex-col gap-8 px-4"
		>
			<div class="flex justify-between w-full">
				<div class="w-10 h-10"></div>

				<div class="text-3xl text-white flex justify-center">
					Spin The Wheel
				</div>
				<div @click="isMenuOpen = !isMenuOpen" class="cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="text-white w-10 h-10"
					>
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</svg>
				</div>
				<MainMenu
					:isMenuOpen="isMenuOpen"
					@update:isMenuOpen="toggleMenu"
				/>
			</div>

			<div class="text-xl text-gray-200 flex text-center pt-6">
				If you are an Alpha/Master looking to make use of this, fill
				in the options and click spin. Each time you come to this page
				it will go right to the wheel for all future visits with your
				preferred options.
			</div>

			<!-- presets -->
			<div class="flex gap-4 justify-between">
				<button
					class="text-white mt-2 w-full py-4 bg-sky-600 hover:bg-sky-700 rounded-lg"
					@click="applyPreset('small')"
				>
					Small
				</button>
				<button
					class="text-white mt-2 w-full py-4 bg-orange-600 hover:bg-orange-700 rounded-lg"
					@click="applyPreset('medium')"
				>
					Medium
				</button>
				<button
					class="text-white mt-2 w-full py-4 bg-red-600 hover:bg-red-700 rounded-lg"
					@click="applyPreset('destroy')"
				>
					DESTROY!
				</button>
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
					@click="showWheel = true"
					class="text-white mt-2 w-full py-4 bg-red-600 hover:bg-red-700 rounded-lg"
				>
					Show Wheel
				</button>
			</div>
		</div>
		<div
			v-if="showWheel === true"
			class="mx-auto max-w-[680px] min-h-[calc(100vh-128px)] flex flex-col gap-8 px-4"
		>
			<wheel :selectedOptions="selectedOptions" />
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import wheel from "./../components/Wheel.vue";
import MainMenu from "./../components/MainMenu.vue";

const isMenuOpen = ref(false);
const numOptions = ref(4);
const maxOptions = 10;
const showWheel = ref(false);
const presetOption = ref(null);

const presetSmall = ["$5", "$10", "$25", "$5", "$15", "$20", "$5"];

const presetMedium = [
	"$10",
	"$25",
	"$20",
	"$30",
	"$15",
	"$40",
	"$50",
	"Masters Choice",
	"$15",
	"$20",
];

const presetDestroy = [
	"$25",
	"Masters Choice",
	"$40",
	"$75",
	"$50",
	"Masters Choice",
	"$90",
	"$80",
	"$100",
	"Masters Choice",
];

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

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

const selectedOptions = ref(
	Array(numOptions.value).fill(sharedOptions[0])
);

const addOption = () => {
	if (numOptions.value < maxOptions) {
		numOptions.value++;
		selectedOptions.value.push(sharedOptions[0]);
	}
};

const applyPreset = (presetType) => {
	let presetData;

	if (presetType === "small") {
		presetData = presetSmall;
		numOptions.value = 7;
	} else if (presetType === "medium") {
		presetData = presetMedium;
		numOptions.value = 10;
	} else if (presetType === "destroy") {
		presetData = presetDestroy;
		numOptions.value = 10;
	}

	// Update selectedOptions with presetData
	for (
		let i = 0;
		i < numOptions.value && i < presetData.length;
		i++
	) {
		selectedOptions.value[i] = presetData[i];
	}
};
</script>
