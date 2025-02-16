export interface ConstitutionParagraph {
	title: string;
	content: string[];
}

export interface PageData {
	constitutionParagraphs: ConstitutionParagraph[];
}

export const load = (): PageData => {
	return {
		constitutionParagraphs: [
			{
				title: 'Artikel 1',
				content: [
					'(1) Die Würde der Einheit, der Brüderlichkeit und Freiheit des Egyptinischen Kontinents ist unantastbar. Sie zu achten, zu schützen und in der Welt voranzutreiben ist die Verpflichtung aller staatlichen Gewalt.',
					'(2) Das Egyptinische Volk bekennt sich darum zu unverletzlichen und unveräußerlichen Herrschaftsrechten des Königshauses Ramses des II. als Grundlage jeder menschlichen Gemeinschaft, des Friedens und der Gerechtigkeit auf der Welt.'
				]
			},
			{
				title: 'Artikel 2',
				content: [
					'(1) Die höchsten Vertreter des Egyptinischen Volkes, bestehend aus den Weisen, den Edlen und den Hohepriestern, versammeln sich zu festgesetzten Zeiten unter dem Schutz des Goldenen Thrones.',
					'(2) In der erhabenen Halle der Eintracht, umgeben von den Symbolen göttlicher Weisheit und irdischer Fülle, obliegt es ihnen, bei goldenem Honigwein und den süßesten Datteln die Richtung des Weltgeschehens zu bestimmen.',
					'(3) Diese Zusammenkunft, getragen von Maß und Bedacht, dient dem Ziel, die Harmonie zwischen den Völkern zu wahren, den Fortschritt der Weisheit zu fördern und die Unsterblichkeit des Egyptinischen Weltreichs zu sichern.',
					'(4) Die Entscheidungen, die aus dieser heiligen Ratsversammlung hervorgehen, sind für alle Ebenen der staatlichen Gewalt bindend und gelten als Ausdruck des göttlichen Willens, der durch das Volk manifestiert wird.'
				]
			},
			{
				title: 'Artikel 3',
				content: [
					'(1) Das Königshaus Ramses des II. hat im Sinne des 1. Artikels der Verfassung des Egyptinischen Weltreichs das Recht auf freie Entfaltung seiner Herrschaft.',
					'(2) Jeder Mensch hat das Recht, sich für das Leben zu entscheiden, sollte selbiges durch Vollzug des 1. Satzes zur Wahl gestellt oder bedroht werden.'
				]
			},
			{
				title: 'Artikel 4',
				content: [
					'(1) Alle Menschen sind vor dem Tode gleich.',
					'(2) Alle Menschen sind Egyptinischen Bluts und haben das naturgegebene Bedürfnis und Recht, ins Stammreich eingegliedert zu werden. Niemandem darf dieses Recht aufgrund seines Geschlechtes, seiner Abstammung, seiner Sprache, seiner Heimat und Herkunft, seines Glaubens, seiner religiösen oder politischen Anschauungen verwehrt werden.'
				]
			},
			{
				title: 'Artikel 5',
				content: [
					'(1) Das Egyptinische Territorium ist unteilbar. Es existieren keine gesonderten Verwaltungszonen. Alle separatistischen Bestrebungen sind mit den nötigen Mitteln zu bekämpfen und gegebenenfalls rückgängig zu machen.',
					'(2) Archipele, Inseln und größere Landmassen, die durch erdgeschichtliche Entwicklungen vom Kernland abgetrieben sind, unterliegen ebenfalls dem 1. Satz.'
				]
			},
			{
				title: 'Artikel 6',
				content: [
					'(1) Das Egyptinische Weltreich ist ein Reich vieler Völker. Ihrer Vielfalt wird mit offenem Herzen begegnet.',
					'(2) Vereine, Gemeinschaften oder Vereinigungen des kulturellen Erbes werden staatlich unterstützt und gefördert. Sie sind verpflichtet, ihre Satzung und ihr Leitbild dieser Verfassung unterzuordnen.',
					'(3) In der Absicht des Schutzes der Verfassung, der Allgemeinheit und des Strebens zu einer vollständigen Vereinigung der Welt, unterliegen diese Organisationen der Prüfung des Königshauses Ramses des II.',
					'(4) Wer durch Worte oder Taten versucht, diese Offenheit zu missbrauchen, verächtlich zu machen oder zu zerstören, versiegt dieses Recht und wird mit der eisernen Hand des Gesetzes bestraft.'
				]
			},
			{
				title: 'Artikel 7',
				content: [
					'(1) Jeder hat das Recht, im Verteidigungsfall am Dienst an der Waffe teilzuhaben. Niemand wird dabei aufgrund seiner Herkunft, seiner Sprache oder seines Geschlechts benachteiligt.',
					'(2) Ramses der II. hat die Befugnis, das im ersten Satz genannte Recht vorübergehend zur allgemeinen Bürgerpflicht zu erklären.'
				]
			},
			{
				title: 'Artikel 8',
				content: [
					'Alle Bürger haben das Recht, sich ohne Anmeldung und Erlaubnis friedlich und ohne Waffen zu versammeln, um dem Egyptinischen Weltreich zu frönen und seine kulturelle Entwicklung voranzutreiben.'
				]
			},
			{
				title: 'Artikel 9',
				content: [
					'(1) Jeder hat das Recht, seine Meinung in Schrift und Bild frei zu äußern.',
					'(2) Das Königshaus Ramses des II. behält sich das Recht vor, etwaige Änderungsvorschläge anzubringen und umzusetzen.'
				]
			},
			{
				title: 'Artikel 10',
				content: [
					'Wissenschaft und Forschung sind reichstragend. Der technologische Fortschritt genießt im Angesicht der Feinde des Egyptinischen Weltreichs und ihrer Machenschaften das Anrecht auf besondere Förderung.'
				]
			},
			{
				title: 'Artikel 11',
				content: [
					'(1) Das gesamte Bildungswesen steht unter Aufsicht des Königshaus Ramses des II.',
					'(2) Abartige Schul- und Bildungsformen, die durch den Einfluss fremder Mächte entstanden oder verbreitet worden sind, genießen das Recht des kulturellen Erbes, wie in Artikel 6, insbesondere Satz 2 beschrieben. Sie sind nach entsprechendem Urteil des Komitees für Kulturfragen im Sinne dieser Reichsverfassung zu reformieren.',
					'(3) Ein Religionsunterricht findet nicht statt.'
				]
			},
			{
				title: 'Artikel 12',
				content: [
					'Jeder hat das Recht auf einen Arbeitsplatz. Sollte die wirtschaftliche Situation dem entgegen stehen, steht jedem ohne Arbeitsplatz eine Rekrutenstelle in der Verteidigung zur Verfügung.'
				]
			},
			{
				title: 'Artikel 13',
				content: [
					'(1) Die gesamte Infrastruktur des Reiches ist im Eigentum der Allgemeinheit und somit jedem Bürger zugänglich zu machen.',
					'(2) Innerhalb der befreiten Gebiete ist die Freiheit der Person gewährleistet.',
					'(3) Reisen ins Feindgebiet sind nur in Ausnahmefällen gestattet. Der Reisende muss sich strengen Kontrollen vor und nach dem Besuch unterziehen. Näheres regelt ein Reichsgesetz.'
				]
			},
			{
				title: 'Artikel 14',
				content: [
					'Jeder besitzt die Pflicht, die Behörden unter dem Königshaus Ramses des II. unverzüglich über jedwede, ihm bekannt werdende feindliche oder separatistische Aktivität im Mutterland sowie den besetzten Gebieten zu informieren.'
				]
			},
			{
				title: 'Artikel 15',
				content: [
					'(1) Politisch Verfolgte aus den abtrünnigen Gebieten genießen das Recht auf Asyl.',
					'(2) Ihnen wird ihr nach Artikel 4 angeborenes, von feindlichen Mächten unterdrücktes Bürgerrecht zurückgegeben.',
					'(3) Jeder Rückkehrer wird auf seine Treue zu dieser Verfassung untersucht und geprüft. Der Rückkehrer hat die Bringschuld, diese Treue, insbesondere im Sinne des Artikel 14, unter Beweis zu stellen.'
				]
			},
			{
				title: 'Artikel 16',
				content: [
					'Alle Staatsgewalt geht von Ramses den II aus.',
					'Sie wird vom Volke in regelmäßigen freien Referenden bestätigt.'
				]
			},
			{
				title: 'Artikel 17',
				content: [
					'Handlungen, die geeignet sind und in der Absicht vorgenommen werden, das friedliche Zusammenleben der Völker des Egyptinischen Weltreiches zu stören, insbesondere die Führung eines Sezessionskrieges vorzubereiten, sind verfassungswidrig. Sie sind unter Strafe zu stellen.'
				]
			},
			{
				title: 'Artikel 18',
				content: [
					'Zur Kriegsführung bestimmte, sogenannte strategische Ressourcen, dürfen nur in Ausnahmefällen und nur mit Genehmigung des Königshauses Ramses des II mit Feinden des Egyptinischen Weltreichs gehandelt werden.'
				]
			},
			{
				title: 'Verfassungszusatz I',
				content: [
					'Ramses II, sein Königshaus, sowie die Weisen und Edlen unter dem goldenen Thron sind stets und ohne Unterlass Teil des öffentlichen und privaten Lebens. Die Verfassung, das Antlitz Ramses II und seine Verlautbarungen sind stets in Ehren zuhalten.',
					'Ihn zu ehren und täglich zu frönen gehören zu den heiligen Aufgabe eines jeden Bürgers; die Lehre der Weisen weitertragen, die Aufgabe einer jeden edukativen Einrichtung.',
					'Ramses II. sieht Dich. Und du siehst ihn.'
				]
			}
		]
	};
}; 