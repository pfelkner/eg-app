<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/components/layout/Header.svelte';
	import Preamble from '$lib/components/features/constitution/Preamble.svelte';
	import Article from '$lib/components/features/constitution/Article.svelte';
	import { Card } from '$lib/components/ui/card';
	import { constitutionStore, filteredArticles } from '$lib/stores/constitution';

	export let data: PageData;

	// Subscribe to filtered articles
	$: articles = $filteredArticles;
	$: ({ loading, error, activeArticle, readArticles, bookmarked } = $constitutionStore);

	// Mark article as read when viewed
	function handleArticleView(title: string) {
		constitutionStore.markAsRead(title);
		constitutionStore.setActiveArticle(title);
	}

	// Handle article bookmarking
	function handleBookmark(title: string) {
		constitutionStore.toggleBookmark(title);
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
			<Header />

			{#if loading}
				<div class="flex min-h-screen items-center justify-center">
					<Card class="p-8 text-[#8E8171]">
						<div class="flex items-center space-x-2">
							<div class="h-4 w-4 animate-spin rounded-full border-b-2 border-[#8E8171]"></div>
							<span>Loading constitution...</span>
						</div>
					</Card>
				</div>
			{:else if error}
				<div class="flex min-h-screen items-center justify-center">
					<Card class="p-8 text-red-500">
						<div class="space-y-2">
							<h3 class="font-bold">Error loading constitution</h3>
							<p>{error.message}</p>
						</div>
					</Card>
				</div>
			{:else}
				<Preamble />

				<!-- Articles -->
				{#each articles as paragraph}
					<div class="relative" on:inview={() => handleArticleView(paragraph.title)}>
						<Article
							{paragraph}
							isRead={readArticles.has(paragraph.title)}
							isBookmarked={bookmarked.has(paragraph.title)}
							isActive={activeArticle === paragraph.title}
							onBookmark={() => handleBookmark(paragraph.title)}
						/>
					</div>
				{/each}
			{/if}
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
