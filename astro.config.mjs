// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sanjulaganepola.github.io',
	integrations: [
		starlight({
			title: 'GitHub Local Actions Docs',
			logo: {
				src: './public/icon.png',
				replacesTitle: true
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
						{ label: 'Components', slug: 'usage/components' },
						{ label: 'Workflows', slug: 'usage/workflows' },
						{ label: 'History', slug: 'usage/history' },
						{ label: 'Settings', slug: 'usage/settings' }
					]
				},
				{
					label: 'Miscellaneous',
					items: [
						{ label: 'Artifacts and Cache', slug: 'miscellaneous/artifactsandcache' },
						{ label: 'Skipping Jobs and Steps', slug: 'miscellaneous/skippingjobsandsteps' },
						{ label: 'Custom Container Engine', slug: 'miscellaneous/customcontainerengine' },
						{ label: 'GitHub Enterprise', slug: 'miscellaneous/githubenterprise' },
						{ label: 'GitHub Token', slug: 'miscellaneous/githubtoken' },
						{ label: 'Action Offline Mode', slug: 'miscellaneous/actionofflinemode' }
					]
				},
				{
					label: 'Help and Support',
					items: [
						{ label: 'Troubleshooting', slug: 'help/troubleshooting' },
						{ label: 'Report an Issue', slug: 'help/reportanissue' },
						{ label: 'Known Bugs', slug: 'help/knownbugs' }
					]
				}
			],
		}),
	],
});
