<script lang="ts">
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '$lib';
	import type { PageData } from './+page';

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

	<!-- Preamble Section -->
	<div class="mb-8 px-4">
		<h2 class="mb-4 text-2xl font-semibold italic">Präambel</h2>
		<p class="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
			Im Bewusstsein seiner Verantwortung vor den Menschen, von dem Willen beseelt, Freiheit für
			Jeden zu ermöglichen, Einheit und endgültigen Frieden auf Erden zu schaffen, hat der
			unfehlbare, großartige und barmherzige König Ramses der II. kraft seiner verfassungsgebenden
			Gewalt dem Egyptinischen Volke diese Verfassung gegeben.
		</p>
		<p class="leading-relaxed text-gray-700 dark:text-gray-300">
			Diese Verfassung gilt für das gesamte Egyptinische Volk.
		</p>
	</div>

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
