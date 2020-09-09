---
title: "Mijn bachelor scriptie"
date: "2020-08-06"
postlang: "nl"
---
Hallo Internet! Welkom op mijn allereerste blogpost. In deze blogpost wil ik het graag hebben over mijn scriptie het benchmarken van *Deep Neural Networks*.

In deze post ga ik achtereenvolgens in op wat neurale netwerken zijn, wat bekende technieken zijn om het trainen van deze netwerken te versnellen en tenslotte wat de bijdrage is van mijn scriptie.

# Wat zijn Neurale Netwerken?

![Ik](/static/nn.jpeg#blogimg)

*NB: Dit is een vrij simple neuraal netwerk, tegenwoordig zijn de netwerken vele malen groter.*

Neurale netwerken zijn structuren van verschillende nodes, zoals weergegeven in de bovenstaande afbeelding. Met behulp van dergelijke neurale netwerken, proberen we plaatjes te begrijpen, dus bijvoorbeeld door ze te classificeren in een bepaalde categorie (bijv. kat/hond) of door een onderwerp te scheiden van de achtergrond (bijv. schapen op een plaatje inkleuren) of nieuwe plaatjes te genereren (bijv. plaatjes van beroemdheden combineren en nieuwe niet bestaande beroemdheden maken).

Aan de linkerkant voeren we afbeeldingen in, die te begrijpen zijn als een grote matrix van RGB-pixels (Rood-Groen-Blauw), en na een aantal matrix operaties, met behulp van parameters op elke node van het netwerk, genereert het netwerk een oplossing, dus bijvoorbeeld de klasse waarin het plaatje zich bevindt.

Als we de hoeveelheid afbeeldingen opschalen, kunnen we het netwerken trainen, en op basis van een training- en een test deel van die dataset, de parameters van het netwerk aanpassen. Zo kunnen we bijvoorbeeld het netwerk betere voorspellingen laten doen over de klasse van een afbeelding. Meestal is het doel om de *accuracy* van het netwerk zo hoog mogelijk te krijgen, dus zodat het netwerk in de meeste gevalle de gegeven afbeelding in de juiste klasse indeelt.

# De probleemstelling van mijn scriptie

Het trainen van deze netwerken duurt tegenwoordig echter erg lang vanwege de grootte van de datasets (ImageNet is op moment van schrijven 14,197,122 afbeeldingen groot) en de grootte van de netwerken (denk aan 11 Miljoen parameters). Dus heeft het veld verschillende manieren bedacht op de training van deze netwerken te versnellen. Een van deze manier is *distributed training*. Hiervan zijn er verschillende theoretische vormen:

- Model Parallelisme (MP) - Het te trainen neuraal netwerk (of verschillende delen van dat netwerk) wordt over verschillende devices gedupliceerd en de data wordt op geknipt en parallel geforward (en daarna terug ge-propage-ed) door de verschillende delen.
- Pipeline Parallelism (PP) - Het te trainen neural network wordt in stukken over verschillende devices gekopieerd en door deze keten van devices worden verschillende delen van de data parallel geforward, en backwards ge-propage-ed.
- Data Parallelisme (DP) - De data wordt over twee onderdelen van het model in parallel berekend, en bij the back propagation vindt er een synchronisatie plaats tussen de modellen.

In de praktijk blijkt dat DP beter presteert dan PP en dat MP vooral handig is voor grote modellen die niet op een device passen. Verder blijkt MP niet sneller te zijn onder normale omstandigheden.

In mijn scriptie heb ik een aantal frameworks geselecteerd voor het trainen van neurale netwerken, die verschillende vormen van deze distributed training ondersteunden. Uiteindelijk bleek implementatie erg moeilijk binnen deze frameworks en heb ik *Pytorch*, *Horovod* en *Pipedream* met elkaar vergeleken.

Deze heb ik vergeleken op throughput en geheugen gebruik.

Mijn hele scriptie is te vinden op [de website van de UvA](https://scripties.uba.uva.nl/search?id=715774).

# Het vervolg van deze blog
De onderwerpen van deze blog zullen gaan over mijn toekomstige voor nu baan en mijn eigen hobby AI projecten.
