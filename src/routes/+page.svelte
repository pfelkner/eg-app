<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import type { PageData } from './+page';

	export let data: PageData;

	const hieroglyphs = ['𓀀', '𓃭', '𓂝', '𓆓', '𓇋', '𓈖', '𓅓', '𓊵', '𓄿', '𓂋', '𓏏'];

	function shuffleHieroglyphs() {
		return [...hieroglyphs].sort(() => Math.random() - 0.5).join(' ');
	}
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="relative h-screen overflow-hidden">
	<div
		class="fixed inset-0 bg-[url('/pyramid.webp')] bg-cover bg-no-repeat opacity-90"
		style="background-position: center;"
	></div>
	<div
		class="fixed inset-0 bg-gradient-to-b from-[#132028]/80 via-transparent to-[#132028]/80"
	></div>

	<!-- Scrollable Content -->
	<div class="h-screen overflow-y-auto">
		<!-- Cards Container with snap scrolling -->
		<div class="snap-y snap-proximity space-y-16">
			<!-- First Section with Header and Preamble -->
			<section class="flex min-h-screen w-full snap-start flex-col items-center justify-start">
				<!-- Header -->
				<header class="w-full bg-[#132028]/30 px-4 py-4 backdrop-blur-sm">
					<h1 class="font-cinzel text-center text-2xl font-bold text-[#8E8171]">
						Verfassung des Egyptinischen Weltreichs
					</h1>
					<p class="mt-1 text-center text-base text-[#8E8171]">{shuffleHieroglyphs()}</p>
				</header>

				<!-- Preamble Card -->
				<div class="flex flex-1 items-center justify-center p-4">
					<div class="w-full max-w-2xl">
						<Card class="relative border-0 bg-[#132028]/40 backdrop-blur-sm">
							<div
								class="absolute inset-0 bg-[url('/black_gold_frame.svg')] bg-cover bg-center bg-no-repeat opacity-90"
								style="transform: scale(1.02);"
							></div>
							<CardContent class="relative flex flex-col p-8">
								<div class="py-16" />
								<div class="space-y-3">
									<h2 class="text-center text-2xl font-semibold italic text-[#8E8171]">Präambel</h2>
									<h3 class="text-center text-sm text-[#8E8171]">{shuffleHieroglyphs()}</h3>
									<p class=" text-[#8E8171]">
										Im Bewusstsein seiner Verantwortung vor den Menschen, von dem Willen beseelt,
										Freiheit für Jeden zu ermöglichen, Einheit und endgültigen Frieden auf Erden zu
										schaffen, hat der unfehlbare, großartige und barmherzige König Ramses der II.
										kraft seiner verfassungsgebenden Gewalt dem Egyptinischen Volke diese Verfassung
										gegeben.
									</p>
									<p class="text-lg text-[#8E8171]">
										Diese Verfassung gilt für das gesamte Egyptinische Volk.
									</p>
								</div>
								<div class="py-16" />
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<!-- Articles -->
			{#each data.constitutionParagraphs as paragraph}
				<section class="flex min-h-screen w-full snap-start items-center justify-center p-4">
					<div class="w-full max-w-2xl">
						<Card class="relative border-0 bg-[#132028]/40 backdrop-blur-sm">
							<div
								class="absolute inset-0 bg-[url('/black_gold_frame.svg')] bg-cover bg-center bg-no-repeat opacity-90"
								style="transform: scale(1.02);"
							></div>
							<CardContent class="relative flex flex-col p-8">
								<div class="py-16" />
								<div class="space-y-3">
									<h2 class="text-center text-2xl font-semibold text-[#8E8171]">
										{paragraph.title}
									</h2>
									<h3 class="text-center text-base text-[#8E8171]">{shuffleHieroglyphs()}</h3>
									{#each paragraph.content as contentParagraph}
										<p class=" text-[#8E8171]">
											{contentParagraph.replace(/\((\d+)\)/g, '(§$1)')}
										</p>
									{/each}
								</div>
								<div class="py-16" />
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

	:global(html) {
		font-family: Papyrus, 'Palatino Linotype', serif;
	}

	:global(.font-cinzel) {
		font-family: 'Cinzel', serif;
	}
</style>
