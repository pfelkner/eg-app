<script lang="ts">
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '$lib';

	const constitutionParagraphs = [
		{
			title: 'Article I: Fundamental Rights',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			title: 'Article II: Governance Structure',
			content:
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			title: 'Article III: Electoral Process',
			content:
				'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
		}
	];
</script>

<div class="container mx-auto max-w-3xl p-4">
	<!-- Fixed Header -->
	<header class="mb-8 border-b bg-white py-6 dark:bg-gray-800">
		<h1 class="text-center text-3xl font-bold">Constitution</h1>
		<p class="mt-2 text-center text-gray-600 dark:text-gray-300">
			Official Constitutional Document
		</p>
	</header>

	<!-- Accordion Section -->
	<Accordion multiple class="w-full">
		{#each constitutionParagraphs as paragraph}
			<AccordionItem value={paragraph.title}>
				<AccordionTrigger class="text-lg font-semibold">
					{paragraph.title}
				</AccordionTrigger>
				<AccordionContent>
					<p class="leading-relaxed text-gray-700 dark:text-gray-300">
						{paragraph.content}
					</p>
				</AccordionContent>
			</AccordionItem>
		{/each}
	</Accordion>
</div>
