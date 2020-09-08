---
title: "Mijn scriptie"
date: "2020-08-06"
postlang: "nl"
---
Hallo Internet! Welkom op mijn allereerste blogpost. In deze blogpost wil ik het hebben over mijn scriptie het benchmarken van *Deep Neural Networks*.

In deze post ga ik achtereenvolgens in op wat neurale netwerken zijn, wat bekende technieken zijn om het trainen van deze netwerken te versnellen en tenslotte wat de bijdrage is van mijn scriptie.

# Wat zijn Neurale Netwerken?

Neurale netwerken zijn structuren van verschillende nodes, zoals weergegeven in de onderstaande afbeelding.

![Ik](/static/nn.jpeg#blogimg)

*NB: Dit is een vrij simple neuraal netwerk, tegenwoordig zijn de netwerken vele malen groter.*

Met behulp van deze neurale netwerken, proberen we plaatjes te begrijpen, dus bijvoorbeeld door ze te classificeren in een bepaalde categorie (bijv. kat/hond) of door een onderwerp te scheiden van de achtergrond (bijv. schapen op een plaatje inkleuren) of nieuwe plaatjes te genereren (bijv. plaatjes van beroemdheden combineren en nieuwe niet bestaande beroemdheden maken).

Aan de linkerkant voeren we afbeeldingen in, die te begrijpen zijn als een grote matrix van Rood-Groen-Blauw pixels, en na een aantal matrix operaties, met behulp van parameters op elke node van het netwerk, genereert het netwerk een oplossing, dus bijvoorbeeld de klasse waarin het plaatje zich bevindt.

Als we de hoeveelheid afbeeldingen opschalen, kunnen we het netwerken trainen, en op basis van een training- en een test deel van die dataset, de parameters van het netwerk aanpassen. Zo kunnen we bijvoorbeeld het netwerk betere voorspellingen laten doen over de klasse van een afbeelding. Meestal is het doel om de *accuracy* (accuratesse) van het netwerk zo hoog mogelijk te krijgen, dus zodat het plaatje in de meeste gevallen een juiste voorspelling doet.

# De probleemstelling van mijn scriptie

Echter, duurt het trainen van deze netwerken tegenwoordig erg lang, vanwege de grootte van de datasets en de grootte van de netwerken. Dus heeft het veld verschillende manieren bedacht op de training van deze netwerken te versnellen. Een van deze manier is *distributed training*. Deze vorm kan op verschillende manier ingezet worden:

- Model Parallelisme - Het te trainen neuraal netwerk (of verschillende delen van dat netwerk) wordt over verschillende devices gedupliceerd en de data wordt op geknipt en parallel geforward door de verschillende delen.
- Pipeline Parallelism
-

#TO DO

In deze scriptie heb ik de snelheid van verschillende populaire frameworks zoals *Pytorch*, *Horovod* en *Pipedream* met elkaar vergeleken.



De onderwerpen van deze blog zullen gaan over mijn huidige baan en mijn eigen hobby AI projecten.
