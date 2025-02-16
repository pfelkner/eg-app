<script lang="ts">
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '$lib';
	import type { PageData } from './+page';

	export let data: PageData;

	// Set all accordions to be open by default
	const defaultValues = data.constitutionParagraphs.map((p) => p.title);
</script>

<div class="mx-auto max-w-lg bg-gray-50 dark:bg-gray-900">
	<!-- Fixed Header -->
	<header class="sticky top-0 z-10 border-b bg-white px-4 py-4 shadow-sm dark:bg-gray-800">
		<h1 class="text-center text-2xl font-bold">Verfassung des Egyptinischen Weltreichs</h1>
		<p class="mt-1 text-center text-sm text-gray-600 dark:text-gray-300">
			Grundgesetz der Egyptinischen Zivilisation
		</p>
	</header>

	<!-- Main Feed -->
	<div class="divide-y divide-gray-200 dark:divide-gray-700">
		<!-- Preamble Section -->
		<div class="p-4">
			<h2 class="mb-3 text-xl font-semibold italic">Präambel</h2>
			<p class="mb-3 text-gray-700 dark:text-gray-300">
				Im Bewusstsein seiner Verantwortung vor den Menschen, von dem Willen beseelt, Freiheit für
				Jeden zu ermöglichen, Einheit und endgültigen Frieden auf Erden zu schaffen, hat der
				unfehlbare, großartige und barmherzige König Ramses der II. kraft seiner verfassungsgebenden
				Gewalt dem Egyptinischen Volke diese Verfassung gegeben.
			</p>
			<p class="text-gray-700 dark:text-gray-300">
				Diese Verfassung gilt für das gesamte Egyptinische Volk.
			</p>
		</div>

		<!-- Articles Feed -->
		<Accordion value={defaultValues} multiple class="divide-y divide-gray-200 dark:divide-gray-700">
			{#each data.constitutionParagraphs as paragraph}
				<AccordionItem
					value={paragraph.title}
					class="border-none bg-white px-4 py-4 dark:bg-gray-800"
				>
					<AccordionTrigger class="text-lg font-semibold text-gray-900 dark:text-gray-100">
						{paragraph.title}
					</AccordionTrigger>
					<AccordionContent class="mt-2">
						{#each paragraph.content as contentParagraph}
							<p class="mb-3 text-gray-700 last:mb-0 dark:text-gray-300">
								{contentParagraph}
							</p>
						{/each}
					</AccordionContent>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</div>
