<template>
	<div
		class="min-h-screen min-w-screen bg-gradient-to-br from-gray-700 via-gray-800 to-black py-16 flex flex-col items-center justify-center"
	>
		<div
			class="wheel p-8 rounded-full border-4 border-white cursor-pointer transform transition-transform duration-400"
			@click="startSpinning"
		>
			<div class="flex items-center justify-center h-full">
				<div class="text-center">
					<div class="text-xl">$5</div>
					<div class="text-xl">$10</div>
					<div class="text-xl">$15</div>
					<div class="text-xl">$20</div>
					<div class="text-xl">$25</div>
					<div class="text-xl">$30</div>
					<div class="text-xl">$35</div>
					<div class="text-xl">$40</div>
					<div class="text-xl">$45</div>
					<div class="text-xl">$50</div>
					<div class="text-xl">Master/Alpha Choice</div>
				</div>
			</div>
		</div>
		<div class="mt-8 text-white text-center" v-if="result !== null">
			<p class="text-xl">The wheel landed on:</p>
			<p class="text-3xl font-bold">{{ result }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const result = ref(null);

const startSpinning = () => {
	const wheel = document.querySelector(".wheel");
	wheel.classList.add("spinning-fast");

	const stopAfter = Math.floor(Math.random() * 10) + 11;
	setTimeout(() => {
		wheel.classList.remove("spinning-fast");
		wheel.classList.add("spinning-slow");

		const options = [
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
			"Masters / Alpha Choice",
		];
		result.value =
			options[Math.floor(Math.random() * options.length)];
	}, (stopAfter - 4) * 1000);
};
</script>

<style>
@keyframes spin-fast {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

@keyframes spin-slow {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.spinning-fast {
	animation: spin-fast 0.5s linear infinite; /* Adjust the duration here */
}

.spinning-slow {
	animation: spin-slow 2s linear 2s forwards; /* Adjust the duration and delay here */
}

.wheel {
	width: 360px;
	height: 360px;
	background: conic-gradient(
		from 0deg,
		red 0%,
		yellow 10%,
		green 20%,
		blue 30%,
		indigo 40%,
		purple 50%,
		pink 60%,
		red 70%,
		yellow 80%,
		green 90%,
		blue 100%
	);
	@apply rounded-full;
}
</style>
