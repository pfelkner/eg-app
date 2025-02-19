<script lang="ts">
	import '../app.css';
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
		<slot />
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
