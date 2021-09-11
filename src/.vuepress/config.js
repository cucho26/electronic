module.exports = {
	title: "Electronica Notas",
	description: "Ayuda memoria",
	head: [
		["meta", { name: "theme-color", content: "#3eaf7c" }],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		[
			"meta",
			{ name: "apple-mobile-web-app-status-bar-style", content: "black" },
		],
	],
	dest: "docs",
	base: "/electronic/",
	themeConfig: {
		editLinks: false,
		editLinkText: "",
		lastUpdated: false,
		nav: [
			{
				text: "Guia",
				link: "/",
			},
		],
		sidebar: ["/", "/01-primer-sidebar/"],
	},

	plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
