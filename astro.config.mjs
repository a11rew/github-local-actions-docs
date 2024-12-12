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
					label: 'Start Here',
					items: [
						{ label: 'Overview', link: '/' },
						{ label: 'Installation', link: 'start/installation' }
					]
				},
				{
					label: 'Usage',
					items: [
						{ label: 'Components', link: 'usage/components' },
						{ label: 'Workflows', link: 'usage/workflows' },
						{ label: 'History', link: 'usage/history' },
						{ label: 'Settings', link: 'usage/settings' }
					]
				},
				{
					label: 'Miscellaneous',
					items: [
						{ label: 'Artifacts and Cache', link: 'miscellaneous/artifactsandcache' },
						{ label: 'Skipping Jobs and Steps', link: 'miscellaneous/skippingjobsandsteps' },
						{ label: 'Custom Container Engine', link: 'miscellaneous/customcontainerengine' },
						{ label: 'GitHub Enterprise', link: 'miscellaneous/githubenterprise' },
						{ label: 'GitHub Token', link: 'miscellaneous/githubtoken' },
						{ label: 'Action Offline Mode', link: 'miscellaneous/actionofflinemode' }
					]
				},
				{
					label: 'Help and Support',
					items: [
						{ label: 'Troubleshooting', link: 'help/troubleshooting' },
						{ label: 'Report an Issue', link: 'help/reportanissue' },
						{ label: 'Known Bugs', link: 'help/knownbugs' }
					]
				}
			],
		}),
	],
});
