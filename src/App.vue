<script setup>
const links = [
	{
		id: 1,
		name: "Twitter",
		url: "https://www.twitter.com/realgayredneck",
		colour:
			"bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800",
		hover: "hover:bg-sky-700",
		type: "social",
	},
	{
		id: 2,
		name: "Instagram",
		url: "https://www.twitter.com/realgayredneck",
		colour:
			"bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400",
		hover: "hover:bg-sky-700",
		type: "social",
	},
	{
		id: 3,
		name: "Only Fans",
		url: "https://www.twitter.com/realgayredneck",
		colour: "bg-sky-600",
		hover: "hover:bg-sky-700",
		type: "social",
	},
	{
		id: 4,
		name: "Fansly",
		url: "https://www.twitter.com/realgayredneck",
		colour: "bg-sky-600",
		hover: "hover:bg-sky-700",
		type: "social",
	},
	{
		id: 5,
		name: "Wishtender",
		url: "https://www.twitter.com/realgayredneck",
		colour: "bg-sky-600",
		hover: "hover:bg-sky-700",
		type: "social",
	},
	{
		id: 6,
		name: "Github",
		url: "https://www.twitter.com/realgayredneck",
		colour: "bg-sky-600",
		hover: "hover:bg-sky-700",
		type: "social",
	},
];
</script>

<template>
	<div
		class="min-h-screen min-w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-black py-16"
	>
		<div
			class="mx-auto max-w-[680px] min-h-[calc(100vh-128px)] flex flex-col gap-8 px-4"
		>
			<div
				class="bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 w-48 mx-auto rounded-full"
			>
				<img
					class="rounded-full h-48 w-48 mx-auto p-1"
					src="https://pbs.twimg.com/profile_images/1686167929375608832/eAdENE4x_400x400.jpg"
				/>
			</div>
			<div
				class="text-white uppercase antialiased font-semibold text-3xl justify-center flex"
			>
				Redneck Alpha
			</div>
			<div class="text-gray-300 text-lg antialiased text-center">
				I am just your average redneck alpha taking this bullshit site
				and its bullshit money and fucking you up!
			</div>
			<a
				v-for="link in links"
				:key="link.id"
				class="w-full cursor-pointer h-12 rounded-xl text-center justify-center"
				:class="[link.colour, link.hover]"
				:href="link.url"
			>
				<div
					class="text-white flex items-center justify-center place-items-center h-full"
				>
					{{ link.name }}
				</div>
			</a>
		</div>
	</div>
</template>
