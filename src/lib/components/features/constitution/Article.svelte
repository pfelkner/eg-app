<script lang="ts">
	import type { ConstitutionParagraph } from '$lib/types';
	import ConstitutionCard from '$lib/components/layout/ConstitutionCard.svelte';
	import { hieroglyphUtils } from '$lib/utils/hieroglyphs';

	export let paragraph: ConstitutionParagraph;
</script>

<section class="flex min-h-screen w-full snap-start items-center justify-center p-4">
	<ConstitutionCard>
		<div class="space-y-3">
			<h2 class="text-center text-2xl font-semibold text-[#8E8171]">
				{paragraph.title}
			</h2>
			<h3 class="text-center text-base text-[#8E8171]">{hieroglyphUtils.shuffle()}</h3>
			{#each paragraph.content as contentParagraph}
				<p class="text-[#8E8171]">
					{contentParagraph.replace(/\((\d+)\)/g, '(§$1)')}
				</p>
			{/each}
		</div>
	</ConstitutionCard>
</section>
