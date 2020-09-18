---
title: "Mijn bachelor scriptie"
date: "2020-08-11"
postlang: "nl"
wordcount: "1433"
---
Hallo Internet! Welkom bij mijn allereerste post over mijn bachelorscriptie, *Het benchmarken van Deep Neural Networks*.

In deze post ga ik achtereenvolgens in op wat neurale netwerken zijn, wat bekende technieken zijn om het trainen van deze netwerken te versnellen en tenslotte wat de bijdrage is van mijn scriptie. Voordat ik begin, wil ik graag een paar termen die ik ga gebruiken toelichten:

## Terminologie

- **device**: een bepaald onderdeel van de computer dat (een deel van berekening) kan uitvoeren.

- **throughput**: de doorvoersnelheid in termen van instructie in een computer, bijvoorbeeld de kloksnelheid van processoren in GHz (gigahertz).

- **GPU**: officieel Graphic Processing Unit, dus in de computer verantwoordelijk voor het realiseren van graphische weergave. Tegenwoordig worden GPU's echter veel gebruikt voor het doen van berekeningen voor Neurale Netwerken, aangezien ze meer instructies dan 'gewone' processor (ook wel CPU's ) parallel kunnen uitvoeren.

## Wat zijn Neurale Netwerken?

![Ik](/static/blog/nn.jpeg#blogimg)

*NB: Dit is een vrij simple neuraal netwerk, tegenwoordig zijn de netwerken vele malen groter.*

Neurale netwerken (*hierna:* NN) zijn structuren van artificiele neuronen, zoals weergegeven in de bovenstaande afbeelding. Met behulp van dergelijke NN, is het mogelijk om afbeeldingen te begrijpen. Bijvoorbeeld door ze te classificeren in een bepaalde categorie (bijv. kat/hond) of door een onderwerp te scheiden van de achtergrond (bijv. schapen op een plaatje inkleuren) of nieuwe plaatjes te genereren (bijv. plaatjes van beroemdheden combineren en nieuwe niet bestaande beroemdheden maken).

Diepe Neurale Netwerken (*hierna:* DNN) zijn (extreem) grote neurale netwerken. Het onderzoeksveld heeft alleen nog niet gedefineerd vanaf wanneer we een NN een DNN kunnen noemen, maar denk bij een normaal DNN aan een orde van grootte van 11 Miljoen parameters.

Aan de linkerkant van het DNN voeren we data in. In mijn scriptie waren dat afbeeldingen in, die te begrijpen zijn als een grote matrix van RGB-pixels (Rood, Groen, Blauw). Na een aantal matrix operaties, met behulp van parameters op elke node van het netwerk, genereert het netwerk een oplossing. In ons voorbeeld is dat de klasse waarin de afbeelding zich bevindt. Om een DNN echter goed te kunnen trainen is er meer data nodig. In het trainingsproces van het DNN, delen we de dataset in in een training- en een test-deel. Met het trainingsdeel kunnen we het netwerken laten leren welke afbeelding in welke klasse hoort. Hoe goed het netwerk klassen dan kan onderscheiden kunnen we vervolgens verifiëren met het test deel van de dataset.

Om in een DNN tot een uitkomst te komen, nemen we een plaatje en berekenen we elke laag van het netwerk tot aan de laatste laag. Dit noemen we ook wel de forward pass. Na de forward pass, kunnen we in de test fase een update voor het netwerk berekenen op basis van de uitkomst. Met deze update kunnen we de parameters van het netwerk in alle lagen bijstellen. Dit doen we van achter naar voren. Dit proces heet ook wel de backwards pass.

Bij het meermaals herhalen van dit proces, kunnen we het netwerk betere voorspellingen laten doen over de klasse van een afbeelding. Meestal is het primaire doel om de *accuracy* van het netwerk zo hoog mogelijk te maken, dat houdt in dat het netwerk in zo veel mogelijk gevallen de gegeven afbeelding in de juiste klasse indeelt.

Uiteraard is het ook mogelijk om andere soort data dan afbeeldingen in te voeren, en zijn er ook taken als segmentatie (een object van een achtergrond proberen te onderscheiden) en het generen van nieuwe afbeeldingen op basis van een bestaande dataset.

## De achtergrond van mijn scriptie

Tegenwoordig is het een probleem dat het trainen van deze DNN erg lang duurt vanwege de grootte van de datasets ([ImageNet](http://image-net.org) is bijv. 14,197,122 afbeeldingen groot). Naast de grootte van de datasets, zijn de DNN ook van enorme omvang. Het veld heeft verschillende manieren bedacht om de training van deze netwerken te versnellen. Een van deze manieren is *distributed training*. Hiervan zijn er verschillende theoretische vormen:

![pipelining](/static/blog/pl_in_computing.png#blogimg)

- Pipeline Parallelism (*hierna:* PP) - Het te trainen DNN wordt in stukken over verschillende devices gekopieerd en door deze keten van devices worden verschillende delen van de data parallel geforward, en backwards gepropageerd. Op de afbeelding is te zien hoe pipelining werkt in een algemenere computing context. Er is te zien dat er tegelijkertijd aan verschillende stages van een bepaalde instructie wordt gewerkt. Met NN werkt het hetzelfde, alleen worden de verschillende stages uitgevoerd over verschillende devices.

![dataparallelisme](/static/blog/dp_in_matrix_multiplication.png#blogimg)

- Data Parallelisme (*hierna:* DP) - De data wordt over twee onderdelen van het model in parallel berekend, en voor de back propagation vindt er een synchronisatie plaats tussen de modellen. In de bovenstaande afbeelding is een afbeelding te zien hoe dataparallelisme voor te stellen is bij matrix rekenen.

- Model Parallelisme (*hierna:* MP) - Het te trainen DNN (of verschillende delen van dat netwerk) wordt over verschillende devices gedupliceerd en de data wordt opgeknipt en parallel geforward (en daarna terug ge-propage-ed) door de verschillende delen van het opgeknipte netwerk. Dit is vooral van belang bij DNN die niet op een device passen (qua grootte) en dus met behulp van MP over meerdere devices kunnen worden verdeeld. In mijn scriptie heb ik deze methode niet uitgebreid onderzocht.

## De bijdrage van mijn scriptie

In mijn scriptie heb ik een aantal frameworks geselecteerd voor het trainen van neurale netwerken, die verschillende vormen van deze distributed training ondersteunden. Uiteindelijk bleek implementatie erg moeilijk binnen deze frameworks en heb ik alleen *Pytorch* (DP), *Horovod* (DP) en *Pipedream* (PP) met elkaar vergeleken.

Pytorch ondersteunde zowel DP, als MP, maar hierin heb ik alleen DP gebruikt. Pytorch ontwikkeld door Facebook's AI Research lab (FAIR).

Horovod, ontwikkeld door Uber, is een licht gewicht library, waarmee je gemakkelijk bovenop een ander framework (zoals Pytorch in dit geval), DP kunt uitvoeren. Horovod gebruikt een andere manier op de gradients te updaten naar een forward pass (zie hiervoor [de website van Horovod](https://eng.uber.com/horovod/) zelf). Theoretisch gezien zou dit sneller moeten zijn dan Pytorch alleen.

Pipedream, ontwikkeld door Microsoft, gebruikt een combinatie van DP en PP, door van te voren de berekeningen van de DNN te *profilen*. In het profilen wordt bekeken welk deel van de berekening het meest intensief is, en dit deel wordt over meerder machines parallell uitgevoerd in aanvulling op PP. In mijn scriptie heb ik een versie van Pipedream gebruikt die door een masterstudent Matthijs Jansen, bovenop Pytorch is gebouwd.

Naast frameworks, heb ik ook een selectie gemaakt van een aantal neurale netwerken. In mijn uiteindelijke scriptie heb ik vooral gebruik gemaakt van ResNet modellen, ResNeXt en EfficientNet. Deze modellen worden veel gebruikt in het huidige veld.

Deze modellen heb ik vergeleken op throughput en het geheugen gebruik tijdens het trainen en valideren (in termen van allocatie en gecached geheugen). Deze metingen heb ik gedaan op het Lisa cluster van SurfSara en met behulp van de MNIST dataset. De MNIST dataset is een dataset van handgeschreven getallen (0-9), die door het neurale netwerken correct moeten worden herkend.

In mijn metingen heb ik het aantal GPU's opgeschaald van 1 naar 4, dus om de mate van versnelling ten opzichte geen parallelisme te meten.

Dat zag er zo uit voor de throughput:

![throughput resnet models](/static/blog/throughput_resnetmodels_thesis.png#blogimg)

en zo voor het geheugen gebruik:

![geheugen gebruik resnet models](/static/blog/memoryuse_resnetmodels_thesis.png#blogimg)

Mijn uiteindelijke doel was om 'het best presterende' framework te vinden van deze drie. Helaas had ik, zoals bij veel bachelorthesissen het geval is, weinig tijd om breed metingen te doen.

Toch heb ik een winnaar weten te selecteren, namelijk Pipedream. Theoretisch gezien zou DP sneller moeten zijn dan de DP van Pipedream, maar in mijn onderzoek kwam het tegenovergestelde naar voren. Mijn verklaring voor dit opvallende resultaat is dat er een verschil was in omgeving tussen Pipedream en de andere twee frameworks. Voor Pipedream waren namelijk andere versies van bepaalde libraries nodig om het aan de praat te krijgen.

In het proces heb ik ontdekt dat het maken van een benchmark niet eenvoudig. Het kost veel werk om ze up to date te houden. Er is nog wel veel werk weggelegd voor de wetenschap om meerdere frameworks met elkaar te vergelijken

## Meer weten?

Mijn volledige scriptie is te vinden op [de website van de UvA](https://scripties.uba.uva.nl/search?id=715774).

## Bronnen

- Wikipedia (afbeelding over verschillende vormen van parallelisme)
- Originele referenties naar alle wetenschappelijke papers die ik heb gebruikt zijn te vinden in bronnenlijst van mijn scriptie.

## Het vervolg van deze blog
De onderwerpen van deze blog zullen gaan over mijn toekomstige baan en mijn eigen hobby AI projecten, of andere interessante dingen die ik tegenkom of waar ik over lees.
