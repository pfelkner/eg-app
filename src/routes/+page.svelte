<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import type { PageData } from './+page';

	export let data: PageData;
</script>

<div class="relative h-screen overflow-hidden">
	<div
		class="fixed inset-0 bg-[url('/pyramid.webp')] bg-cover bg-no-repeat opacity-90"
		style="background-position: center;"
	></div>
	<div
		class="fixed inset-0 bg-gradient-to-b from-[#132028]/80 via-transparent to-[#132028]/80"
	></div>

	<!-- Fixed Header -->
	<header class="fixed left-0 right-0 top-0 z-10 bg-[#132028]/30 px-4 py-4 backdrop-blur-sm">
		<h1 class="text-center text-2xl font-bold text-[#4F3A20]">
			Verfassung des Egyptinischen Weltreichs
		</h1>
		<p class="mt-1 text-center text-sm text-[#4F3A20]">
			Grundgesetz der Egyptinischen Zivilisation
		</p>
	</header>

	<!-- Scrollable Content -->
	<div class="h-screen overflow-y-auto">
		<!-- Cards Container with snap scrolling -->
		<div class="snap-y snap-mandatory">
			<!-- Preamble -->
			<section class="flex h-screen w-full snap-start snap-always items-center justify-center p-4">
				<div class="w-full max-w-2xl">
					<Card class="relative border-0 bg-[#132028]/40 backdrop-blur-sm">
						<div
							class="absolute inset-0 bg-[url('/black_gold_frame.svg')] bg-cover bg-center bg-no-repeat opacity-90"
							style="transform: scale(1.02);"
						></div>
						<CardContent class="relative flex flex-col p-8">
							<div class="py-[40%]" />
							<div class="space-y-3">
								<h2 class="text-center text-xl font-semibold italic text-[#8E8171]">Präambel</h2>
								<p class="text-[#8E8171]">
									Im Bewusstsein seiner Verantwortung vor den Menschen, von dem Willen beseelt,
									Freiheit für Jeden zu ermöglichen, Einheit und endgültigen Frieden auf Erden zu
									schaffen, hat der unfehlbare, großartige und barmherzige König Ramses der II.
									kraft seiner verfassungsgebenden Gewalt dem Egyptinischen Volke diese Verfassung
									gegeben.
								</p>
								<p class="text-[#8E8171]">
									Diese Verfassung gilt für das gesamte Egyptinische Volk.
								</p>
							</div>
							<div class="py-[40%]" />
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
						<Card class="relative border-0 bg-[#132028]/40 backdrop-blur-sm">
							<div
								class="absolute inset-0 bg-[url('/black_gold_frame.svg')] bg-cover bg-center bg-no-repeat opacity-90"
								style="transform: scale(1.02);"
							></div>
							<CardContent class="relative flex flex-col p-8">
								<div class="py-[40%]" />
								<div class="space-y-3">
									<h2 class="text-center text-xl font-semibold text-[#8E8171]">
										{paragraph.title}
									</h2>
									{#each paragraph.content as contentParagraph}
										<p class="text-[#8E8171]">
											{contentParagraph.replace(/\((\d+)\)/g, '(§$1)')}
										</p>
									{/each}
								</div>
								<div class="py-[40%]" />
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
	div[style*='background-position: center'] {
		@media (max-width: 768px) {
			background-size: cover !important;
		}
	}
</style>
