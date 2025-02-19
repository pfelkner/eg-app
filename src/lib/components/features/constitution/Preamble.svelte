<script lang="ts">
	import ConstitutionCard from '$lib/components/layout/ConstitutionCard.svelte';
	import { hieroglyphUtils } from '$lib/utils/hieroglyphs';
</script>

<section class="flex min-h-screen w-full snap-start flex-col items-center justify-start">
	<div class="flex flex-1 items-center justify-center p-4">
		<ConstitutionCard>
			<div class="space-y-3">
				<h2 class="text-center text-2xl font-semibold italic text-[#8E8171]">Präambel</h2>
				<h3 class="text-center text-sm text-[#8E8171]">{hieroglyphUtils.shuffle()}</h3>
				<p class="text-[#8E8171]">
					Im Bewusstsein seiner Verantwortung vor den Menschen, von dem Willen beseelt, Freiheit für
					Jeden zu ermöglichen, Einheit und endgültigen Frieden auf Erden zu schaffen, hat der
					unfehlbare, großartige und barmherzige König Ramses der II. kraft seiner
					verfassungsgebenden Gewalt dem Egyptinischen Volke diese Verfassung gegeben.
				</p>
				<p class="text-lg text-[#8E8171]">
					Diese Verfassung gilt für das gesamte Egyptinische Volk.
				</p>
			</div>
		</ConstitutionCard>
	</div>
</section>
