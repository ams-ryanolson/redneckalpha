import { createRouter, createWebHistory } from "vue-router";
import Home from "./../views/Home.vue";
import Wheel from "./../views/Wheel.vue";
import Wall from "./../views/Wall.vue";
import RealTime from "./../views/RealTime.vue";
import Contact from "./../views/Contact.vue";

const routes = [
	{ path: "/", component: Home },
	{ path: "/wheel", component: Wheel },
	{ path: "/wall-of-shame", component: Wall },
	{ path: "/real-time", component: RealTime },
	{ path: "/contact", component: Contact },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
