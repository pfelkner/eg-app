<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import type { PageData } from './+page';

	export let data: PageData;
</script>

<div class="relative h-screen overflow-hidden">
	<div
		class="fixed inset-0 bg-[url('/art_deco_frame.svg')] bg-no-repeat"
		style="background-position: center; background-size: contain;"
	></div>
	<div class="fixed inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

	<!-- Fixed Header -->
	<header class="fixed left-0 right-0 top-0 z-10 bg-black/30 px-4 py-4 backdrop-blur-sm">
		<h1 class="text-center text-2xl font-bold text-white">
			Verfassung des Egyptinischen Weltreichs
		</h1>
		<p class="mt-1 text-center text-sm text-white/70">Grundgesetz der Egyptinischen Zivilisation</p>
	</header>

	<!-- Scrollable Content -->
	<div class="h-screen overflow-y-auto">
		<!-- Cards Container with snap scrolling -->
		<div class="snap-y snap-mandatory">
			<!-- Preamble -->
			<section class="flex h-screen w-full snap-start snap-always items-center justify-center p-4">
				<div class="w-full max-w-2xl">
					<Card class="border-0 bg-[#132028]/40 backdrop-blur-sm">
						<CardContent class="p-6">
							<h2 class="mb-3 text-xl font-semibold italic text-[#4F3A20]">Präambel</h2>
							<p class="mb-3 text-[#4F3A20]">
								Im Bewusstsein seiner Verantwortung vor den Menschen, von dem Willen beseelt,
								Freiheit für Jeden zu ermöglichen, Einheit und endgültigen Frieden auf Erden zu
								schaffen, hat der unfehlbare, großartige und barmherzige König Ramses der II. kraft
								seiner verfassungsgebenden Gewalt dem Egyptinischen Volke diese Verfassung gegeben.
							</p>
							<p class="text-[#4F3A20]">Diese Verfassung gilt für das gesamte Egyptinische Volk.</p>
						</CardContent>
					</Card>
				</div>
			</section>

			<!-- Articles -->
			{#each data.constitutionParagraphs as paragraph}
				<section
					class="flex h-screen w-full snap-start snap-always items-center justify-center p-4"
				>
					<div class="w-full max-w-2xl">
						<Card class="border-0 bg-[#132028]/40 backdrop-blur-sm">
							<CardContent class="p-6">
								<h2 class="mb-4 text-xl font-semibold text-[#4F3A20]">{paragraph.title}</h2>
								{#each paragraph.content as contentParagraph}
									<p class="mb-3 text-[#4F3A20] last:mb-0">
										{contentParagraph.replace(/\((\d+)\)/g, '(§$1)')}
									</p>
								{/each}
							</CardContent>
						</Card>
					</div>
				</section>
			{/each}
		</div>
	</div>
</div>

<style>
	/* Hide scrollbar but keep functionality */
	.overflow-y-auto {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	.overflow-y-auto::-webkit-scrollbar {
		display: none;
	}

	/* Background image responsive styling */
	div[style*='background-size: contain'] {
		@media (max-width: 768px) {
			background-size: auto 100% !important;
		}
	}
</style>
