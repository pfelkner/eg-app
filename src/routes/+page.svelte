<script lang="ts">
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '$lib';
	import { Card, CardContent } from '$lib/components/ui/card';
	import type { PageData } from './+page';

	export let data: PageData;

	// Set all accordions to be open by default
	const defaultValues = data.constitutionParagraphs.map((p) => p.title);
</script>

<div class="mx-auto max-w-3xl bg-gray-50 dark:bg-gray-900">
	<!-- Fixed Header -->
	<header class="sticky top-0 z-10 border-b bg-white px-4 py-4 shadow-sm dark:bg-gray-800">
		<h1 class="text-center text-2xl font-bold">Verfassung des Egyptinischen Weltreichs</h1>
		<p class="mt-1 text-center text-sm text-gray-600 dark:text-gray-300">
			Grundgesetz der Egyptinischen Zivilisation
		</p>
	</header>

	<!-- Main Feed -->
	<div class="space-y-4 p-4">
		<!-- Preamble Section -->
		<Card>
			<CardContent class="p-6">
				<h2 class="mb-3 text-xl font-semibold italic">Präambel</h2>
				<p class="mb-3 text-gray-700 dark:text-gray-300">
					Im Bewusstsein seiner Verantwortung vor den Menschen, von dem Willen beseelt, Freiheit für
					Jeden zu ermöglichen, Einheit und endgültigen Frieden auf Erden zu schaffen, hat der
					unfehlbare, großartige und barmherzige König Ramses der II. kraft seiner
					verfassungsgebenden Gewalt dem Egyptinischen Volke diese Verfassung gegeben.
				</p>
				<p class="text-gray-700 dark:text-gray-300">
					Diese Verfassung gilt für das gesamte Egyptinische Volk.
				</p>
			</CardContent>
		</Card>

		<!-- Articles Feed -->
		<Accordion value={defaultValues} multiple class="space-y-4">
			{#each data.constitutionParagraphs as paragraph}
				<Card>
					<CardContent class="p-0">
						<AccordionItem value={paragraph.title} class="border-none">
							<AccordionTrigger
								class="px-6 py-4 text-lg font-semibold text-gray-900 hover:no-underline dark:text-gray-100"
							>
								{paragraph.title}
							</AccordionTrigger>
							<AccordionContent class="px-6 pb-4">
								{#each paragraph.content as contentParagraph}
									<p class="mb-3 text-gray-700 last:mb-0 dark:text-gray-300">
										{contentParagraph.replace(/\((\d+)\)/g, '(§$1)')}
									</p>
								{/each}
							</AccordionContent>
						</AccordionItem>
					</CardContent>
				</Card>
			{/each}
		</Accordion>
	</div>
</div>
