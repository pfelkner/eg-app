<script lang="ts">
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container mx-auto max-w-3xl p-4">
	<!-- Fixed Header -->
	<header class="mb-8 border-b bg-white py-6 dark:bg-gray-800">
		<h1 class="text-center text-3xl font-bold">Verfassung des Egyptinischen Weltreichs</h1>
		<p class="mt-2 text-center text-gray-600 dark:text-gray-300">
			Grundgesetz der Egyptinischen Zivilisation
		</p>
	</header>

	<!-- Accordion Section -->
	<Accordion multiple class="w-full space-y-4">
		{#each data.constitutionParagraphs as paragraph}
			<AccordionItem value={paragraph.title} class="rounded-lg border bg-white dark:bg-gray-800">
				<AccordionTrigger
					class="px-4 py-3 text-xl font-semibold transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
				>
					{paragraph.title}
				</AccordionTrigger>
				<AccordionContent class="px-4 py-3">
					{#each paragraph.content as contentParagraph}
						<p class="mb-4 leading-relaxed text-gray-700 last:mb-0 dark:text-gray-300">
							{contentParagraph}
						</p>
					{/each}
				</AccordionContent>
			</AccordionItem>
		{/each}
	</Accordion>
</div>
