<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import type { PageData } from './+page';

	export let data: PageData;
</script>

<div class="relative min-h-screen">
	<div class="fixed inset-0 bg-[url('/card_egypt.jpg')] bg-cover bg-fixed bg-center"></div>
	<div class="fixed inset-0 bg-black/50"></div>

	<!-- Fixed Header -->
	<header class="fixed left-0 right-0 top-0 z-10 bg-black/30 px-4 py-4 backdrop-blur-sm">
		<h1 class="text-center text-2xl font-bold text-white">
			Verfassung des Egyptinischen Weltreichs
		</h1>
		<p class="mt-1 text-center text-sm text-white/70">Grundgesetz der Egyptinischen Zivilisation</p>
	</header>

	<!-- Scrollable Content -->
	<div class="relative pt-24">
		<!-- Cards Container with snap scrolling -->
		<div class="snap-y snap-mandatory">
			<!-- Preamble -->
			<div class="flex min-h-screen snap-start items-center justify-center p-4">
				<div class="w-full max-w-2xl">
					<Card class="bg-black/50 backdrop-blur-sm">
						<CardContent class="p-6">
							<h2 class="mb-3 text-xl font-semibold italic text-white">Präambel</h2>
							<p class="mb-3 text-white/90">
								Im Bewusstsein seiner Verantwortung vor den Menschen, von dem Willen beseelt,
								Freiheit für Jeden zu ermöglichen, Einheit und endgültigen Frieden auf Erden zu
								schaffen, hat der unfehlbare, großartige und barmherzige König Ramses der II. kraft
								seiner verfassungsgebenden Gewalt dem Egyptinischen Volke diese Verfassung gegeben.
							</p>
							<p class="text-white/90">Diese Verfassung gilt für das gesamte Egyptinische Volk.</p>
						</CardContent>
					</Card>
				</div>
			</div>

			<!-- Articles -->
			{#each data.constitutionParagraphs as paragraph}
				<div class="flex min-h-screen snap-start items-center justify-center p-4">
					<div class="w-full max-w-2xl">
						<Card class="bg-black/80 backdrop-blur-sm">
							<CardContent class="p-6">
								<h2 class="mb-4 text-xl font-semibold text-white">{paragraph.title}</h2>
								{#each paragraph.content as contentParagraph}
									<p class="mb-3 text-white/90 last:mb-0">
										{contentParagraph.replace(/\((\d+)\)/g, '(§$1)')}
									</p>
								{/each}
							</CardContent>
						</Card>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	/* Smooth scrolling behavior */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
