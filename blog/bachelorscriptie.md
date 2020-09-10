---
title: "Mijn bachelor scriptie"
date: "2020-08-06"
postlang: "nl"
---
Hallo Internet! Welkom op mijn allereerste blogpost. In deze blogpost wil ik het graag hebben over mijn scriptie, het benchmarken van *Deep Neural Networks*.

In deze post ga ik achtereenvolgens in op wat neurale netwerken zijn, wat bekende technieken zijn om het trainen van deze netwerken te versnellen en tenslotte wat de bijdrage is van mijn scriptie. Voordat ik begin, wil ik graag een paar termen die ik ga gebruiken toelichten:

## Terminologie

- Device: een bepaald onderdeel van de computer dat (een deel van berekening) kan uitvoeren.

## Wat zijn Neurale Netwerken?

![Ik](/static/blog/nn.jpeg#blogimg)

*NB: Dit is een vrij simple neuraal netwerk, tegenwoordig zijn de netwerken vele malen groter.*

Neurale netwerken (*hierna:* NN) zijn structuren van verschillende nodes, zoals weergegeven in de bovenstaande afbeelding. Met behulp van dergelijke neurale netwerken, is het mogelijk om afbeeldingen te begrijpen, dus bijvoorbeeld door ze te classificeren in een bepaalde categorie (bijv. kat/hond) of door een onderwerp te scheiden van de achtergrond (bijv. schapen op een plaatje inkleuren) of nieuwe plaatjes te genereren (bijv. plaatjes van beroemdheden combineren en nieuwe niet bestaande beroemdheden maken).

Diepe Neurale Netwerken (*hierna:* DNN) zijn (extreem) grote neural netwerken. Het onderzoeksveld heeft alleen nog niet gedefineerd vanaf wanneer we een NN een DNN kunnen noemen, maar denk bij een normaal DNN aan een orde van grootte van 11 Miljoen parameters.

Aan de linkerkant voeren we data in. In mijn scriptie waren dat afbeeldingen in, die te begrijpen zijn als een grote matrix van RGB-pixels (Rood, Groen, Blauw) en na een aantal matrix operaties, met behulp van parameters op elke node van het netwerk, genereert het netwerk een oplossing, dus bijvoorbeeld de klasse waarin het plaatje zich bevindt. Als we de hoeveelheid afbeeldingen opschalen, kunnen we het netwerken trainen, en op basis van een training- en een test deel van die dataset, de parameters van het netwerk aanpassen. Zo kunnen we bijvoorbeeld het netwerk betere voorspellingen laten doen over de klasse van een afbeelding. Meestal is het doel om de *accuracy* van het netwerk zo hoog mogelijk te krijgen, dus zodat het netwerk in zo veel mogelijk gevallen de gegeven afbeelding in de juiste klasse indeelt.

Uiteraard is het ook mogelijk om andere soort data dan afbeeldingen in te voeren, en zijn er ook taken als segmentatie (een object van een achtergrond proberen te onderscheiden) en het generen van nieuwe afbeeldingen op basis van een dataset.

## De achtergrond van mijn scriptie

Tegenwoordig is het echter een probleem dat het trainen van deze netwerken erg lang duurt vanwege de grootte van de datasets ([ImageNet](https://image-net.org) is bijv. 14,197,122 afbeeldingen groot) en ook door de bovengenoemde grootte van de DNNd. Dus heeft het veld verschillende manieren bedacht op de training van deze netwerken te versnellen. Een van deze manier is *distributed training*. Hiervan zijn er verschillende theoretische vormen:

- Model Parallelisme (*hierna:* MP) - Het te trainen DNN (of verschillende delen van dat netwerk) wordt over verschillende devices gedupliceerd en de data wordt op geknipt en parallel geforward (en daarna terug ge-propage-ed) door de verschillende delen. Dit is vooral van belang bij DNN die niet op een device passen (qua grootte) en dus zo over meerdere devices kunnen worden verdeeld.

![pipelining](/static/blog/pl_in_computing.png#blogimg)

- Pipeline Parallelism (*hierna:* PP) - Het te trainen DNN wordt in stukken over verschillende devices gekopieerd en door deze keten van devices worden verschillende delen van de data parallel geforward, en backwards ge-propage-ed. Op de afbeelding is te zien hoe pipelining werkt in een algemenere computing context. Er is te zien dat er tegelijkertijd aan verschillende stages van een bepaalde instructie wordt gewerkt. Met NN werkt het hetzelfde, alleen worden de verschillende stages uitgevoerd over verschillende devices.

![dataparallelisme](/static/blog/dp_in_matrix_multiplication.png#blogimg)

- Data Parallelisme (*hierna:* DP) - De data wordt over twee onderdelen van het model in parallel berekend, en bij the back propagation vindt er een synchronisatie plaats tussen de modellen. In de bovenstaande afbeelding is een afbeelding te zien hoe dataparallisme voor te stellen is bij matrix rekenen.

## De bijdrage van mijn scriptie

In mijn scriptie heb ik een aantal frameworks geselecteerd voor het trainen van neurale netwerken, die verschillende vormen van deze distributed training ondersteunden. Uiteindelijk bleek implementatie erg moeilijk binnen deze frameworks en heb ik alleen *Pytorch* (DP), *Horovod* (DP) en *Pipedream* (PP) met elkaar vergeleken.

##TO DO

Naast frameworks, heb ik ook een selectie gemaakt van een aantal neurale netwerken. In mijn uiteindelijke scriptie heb ik vooral gebruik gemaakt van ResNet modellen, ResNeXt en EfficientNet.
heb ik vergeleken op __throughput__ en het geheugen gebruik tijdens het trainen en valideren (in terme van allocatie en gecached geheugen). Deze metingen heb ik gedaan op het Lisa cluster van SurfSara en met behulp van de MNIST dataset. De MNIST dataset is een dataset van handgeschreven getallen (0-9), die door het neurale netwerken correct moeten worden herkend.

Dat zag er zo uit voor de throughput:

![throughput resnet models](/static/blog/throughput_resnetmodels_thesis.png#blogimg)

en zo voor het geheugen gebruik:

![geheugen gebruik resnet models](/static/blog/memoryuse_resnetmodels_thesis.png#blogimg)

Mijn uiteindelijke doel was om 'het best presterende' framework te vinden van deze drie. Uiteindelijk had ik, zoals bij veel bachelorthesisen het geval is, weinig tijd om breed metingen te doen.

Toch heb ik winnaar weten te selecteren, namelijk Pipedream. Theoretisch gezien zou DP sneller moeten zijn dan de DP van Pipedream, maar in mijn onderzoek kwam het tegenovergestelde naar voren. Een interessant resultaat!

Mijn verklaring hiervoor was het verschil in omgeving tussen Pipedream en de andere twee frameworks, voor Pipedream waren namelijk andere versies van bepaalde libraries nodig om het aan de praat te krijgen.

## Meer weten?

Mijn volledige scriptie is te vinden op [de website van de UvA](https://scripties.uba.uva.nl/search?id=715774).

## Bronnen

- Wikipedia (plaatjes over verschillende vormen van parallelisme)
- Referenties naar papers zijn te vinden in bronnenlijst van mijn scriptie.

## Het vervolg van deze blog
De onderwerpen van deze blog zullen gaan over mijn toekomstige voor nu baan en mijn eigen hobby AI projecten.
