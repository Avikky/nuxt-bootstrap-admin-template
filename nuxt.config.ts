// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	experimental: {
		appManifest: false,
	},

	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",

			meta: [
				{
					charset: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					hid: "description",
					name: "description",
					content: "Bootstrap Admin Template",
				},
			],

			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "/favicon.png",
				},
			],

			script: [
				{
					src: "",
				},
			],
		},
	},

	css: [
		"~/assets/css/style.css",
		"~/assets/css/line-awesome.min.css",
		"~/assets/css/bootstrap.min.css",
		"~/assets/plugins/fontawesome/css/all.min.css",
		"~/assets/plugins/fontawesome/css/fontawesome.min.css",
	],
});
