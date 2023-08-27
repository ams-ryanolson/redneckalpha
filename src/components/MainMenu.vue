<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["isMenuOpen"]);
const emit = defineEmits();

const closeMenu = () => {
	emit("update:isMenuOpen", false);
};

const MainMenuList = [
	{
		id: 1,
		name: "Home",
		url: "/",
	},
	{
		id: 2,
		name: "Wheel",
		url: "/wheel",
	},
	{
		id: 3,
		name: "Wall Of Shame",
		url: "/wall-of-shame",
	},
	{
		id: 4,
		name: "Real Time Meets",
		url: "/real-time",
	},
	{
		id: 5,
		name: "Contact",
		url: "/contact",
	},
];
</script>

<template>
	<div
		class="fixed inset-0 z-50 bg-gray-800 transition-transform transform ease-in-out duration-300"
		:class="{
			'translate-x-0': isMenuOpen,
			'-translate-x-full': !isMenuOpen,
		}"
	>
		<div class="w-full max-w-[680px] mx-auto py-16 px-4">
			<div class="flex justify-end cursor-pointer" @click="closeMenu">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="text-white h-10 w-10"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</div>
			<div
				class="flex flex-col max-w-[500px] mx-auto"
				v-for="item in MainMenuList"
				:key="item.id"
			>
				<router-link
					:to="item.url"
					class="text-white py-6 uppercase font-semibold text-2xl flex justify-center cursor-pointer"
				>
					{{ item.name }}
				</router-link>
			</div>
		</div>
	</div>
</template>
