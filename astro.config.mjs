// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sanjulaganepola.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'GitHub Local Actions Docs',
			favicon: './icon.png',
			logo: {
				src: './public/icon.png',
			},
			social: {
				github: 'https://github.com/SanjulaGanepola/github-local-actions',
			},
			editLink: {
				baseUrl: 'https://github.com/SanjulaGanepola/github-local-actions-docs/edit/main/'
			},
			sidebar: [
				{
					label: '🤖 Overview',
					items: [
						{ label: 'GitHub Local Actions', link: '/' },
						{ label: 'Installation', link: 'overview/installation' },
						{ label: 'Help and Support', link: 'overview/helpandsupport' }
					]
				},
				{
					label: '🧑‍💻 Usage',
					items: [
						{ label: 'Components', link: 'usage/components' },
						{ label: 'Workflows', link: 'usage/workflows' },
						{ label: 'History', link: 'usage/history' },
						{ label: 'Settings', link: 'usage/settings' }
					]
				},
				{
					label: '💡 Miscellaneous',
					items: [
						{ label: 'Custom Container Engine', link: 'miscellaneous/customcontainerengine' },
						{ label: 'Skipping Jobs and Steps', link: 'miscellaneous/skippingjobsandsteps' },
						{ label: 'Artifacts and Cache', link: 'miscellaneous/artifactsandcache' },
						{ label: 'GitHub Enterprise', link: 'miscellaneous/githubenterprise' },
						{ label: 'GitHub Token', link: 'miscellaneous/githubtoken' }
					]
				}
			],
		}),
	],
});
