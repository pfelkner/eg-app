<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
</script>

<div class="w-full max-w-2xl">
	<Card class="relative border-0 bg-[#132028]/40 backdrop-blur-sm">
		<div
			class="absolute inset-0 bg-[url('/black_gold_frame.svg')] bg-cover bg-center bg-no-repeat opacity-90"
			style="transform: scale(1.02);"
		></div>
		<CardContent class="relative flex flex-col p-8">
			<div class="py-16"></div>
			<slot />
			<div class="py-16"></div>
		</CardContent>
	</Card>
</div>
