// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    base: "/ehui/docs/"
	integrations: [
		starlight({
			title: 'EhUI',
			social: [{ icon: 'codeberg', label: 'Codeberg', href: 'https://codeberg.org/ehanahamed/ehui' }, { icon: 'github', label: 'GitHub', href: 'https://github.com/ehanahamed/ehui' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
