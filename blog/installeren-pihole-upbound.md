---
title: "Configuren en installeren van Pi-hole met Upbound"
description: "Deze blogpost gaat over het configureren en installeren van een Pi-hole met Upbound op je thuisnetwerk."
previewimage: "blog/pi-hole-logo.png"
previewimagealt: "pi-hole logo"
date: "21 februari 2021"
postlang: "nl"
wordcount: ""
---
Hallo internet, dit is mijn tweede blogpost, ditmaal over het geweldige stuk software [Pi-Hole](https://pi-hole.net/Github), een adblocker op DNS niveau en De DNS-resolver [Upbound](https://nlnetlabs.nl/projects/unbound/about/). Deze kunnen eenvoudig geïnstalleerd worden op een [Raspberry Pi](https://www.raspberrypi.org/products/raspberry-pi-4-desktop-kit/), een minicomputer, die je geheel zelf in kunt richten.

De rest van deze blogpost is verdeeld in onderdelen:

1. Woord vooraf
2. Wat zijn de voordelen?
3. De boodschappenlijst
4. Installeren van Raspberry Pi
5. Installeren van PiHole
6. Installeren van Upbound

## 1. Woord vooraf

In de onderstaande blogpost eerste uit wat de voordelen zijn van het zelf beheren van je Domain Name System _(hierna: DNS)_ server, en vervolgens wat je nodig hebt om een Pi-hole aan de praat te krijgen op je thuisnetwerk. De gebruikte router in deze post is een FritzBox, alhoewel het mogelijk zou moeten zijn met elk soort router. Als je op de router niet je eigen lokale DNS-server kunt instellen, zul je de PiHole moeten laten fungeren als DHCP-server in plaats van de router.

## 2. Wat zijn de voordelen?

Tegenwoordig is het grootste gedeelte van je internetverkeer versleuteld met Hyper Text Transfer Protocol Secure _(hierna: https)_. HTTPS is simpelweg HTTP (hét protocol om webpagina te laden), maar dan met een encryptie van Secure Socket Layer _(hierna: SSL)_ of Transport Layer Security (TLS). Een website met een HTTPS adres heeft ook een certificaat, van een certificeringsorganistie, ter verificatie. Zie voor meer informatie bijvoorbeeld de website van [Cloudflare](https://www.cloudflare.com/learning/ssl/how-does-ssl-work/website).

![DNS request -- source ](/static/blog/DNSrequest.jpg#blogimg)
DNS IMAGE SOURCE?

Voordat HTTPS gebruikt wordt om een verbinding aan te gaan met een website, wordt eerst in het internet verkeer een zogenaamde _Domain Name_ (bijv. _https://google.com_) omgezet worden in een ip-adres. Zonder het ip-adres weet de browser niet op welke plek op het internet een domein te vinden is. Dit ip-adres is the vinden in de DNS, wat het figuurlijke adresboek van het internet is. In de bovenstaande afbeelding is een schematisch weergave van een DNS request. Je internetprovider gaat hier over de pijltjes, hij gaat namelijk over de kabels en dergelijke. Standaard staat de DNS meestal ook van je provider, tenzij je deze anders hebt ingesteld.  Het verkeer van/naar DNS-servers is vaak echter nog onversleuteld. Dit betekent dat je internetprovider kan meelezen met  welke websites je bezoekt. Activiteiten op de website zijn versleuteld en niet zichtbaar. Er zijn veel verschillende DNS servers, de Google Public DNS (8.8.8.8), Cloudflare (1.1.1.1) en OpenDNS (208.67.222.222). Bij het opvragen van het ip-adres van een domein naam staat het de aanbieder van je DNS vrij om je query (vraag) te loggen.

Volgens het Nederlands recht is je internetprovider verplicht om zes maanden gegevens in verband met internettoegang, e-mail over het internet en internettelefonie te bewaren, zie [https://wetten.overheid.nl/](https://wetten.overheid.nl/jci1.3:c:BWBR0009950&hoofdstuk=13&artikel=13.2a&z=2018-05-01&g=2018-05-01). Een onderdeel hiervan is het loggen van de gebruikte internetdienst. Middels DNS verkeer is gewoon in normale tekst te zien welke websites je allemaal hebt bezocht in de afgelopen zes maanden, dus je internetprovider heeft veel inzicht in je doen en laten op internet.

Een ander mogelijk beveiligingsprobleem is kunnen controleren of er niets veranderd is aan het antwoord dat je van een DNS-server krijgt. Hiervoor is Domain Name System Security Extensions _(hierna: DNSSEC)_ in het leven geroepen, waarmee er op vergelijkbare manier als in HTTPS met certificaten gecontroleerd wordt of de DNS responses die je binnen krijgen, wel 'echt' zijn. DNSSEC is echter nog niet op grote schaal geadopteerd.

Naast DNSSEC zijn er inmiddels ook verschillende manieren om je DNS verkeer te versleutelen zoals DNS over TLS (DoT), DNS over HTTPS (DoH). Deze staat niet standaard ingesteld op je router/apparaat. Door het zelf beheren van je DNS-server, kun je betere versleuting instellen en kan je provider minder zien van je doen en laten op internet. Een tweede voordeel is dat de Pi-hole advertenties en kwaadaardige websites.

Ik vind het belangrijk om het internet een veiligere, meer versleutelde plek te maken en om deze beveiliging ook meer toegankelijk te maken voor niet extreem technici. Om deze reden heb ik dan ook deze blogpost geschreven.

## 3. Boodschappenlijst

Voor de installatie heb je nodig

 - Raspberry Pi 4
 - Een computerscherm (met HDMI-aansluiting ofwel via een HDMI-adapter)
 - Een toetsenbord (USB 2.0/3.0)
 - Een SD kaart (16GB of 32 GB is ruim voldoende)
 - Een SD kaart adapter
 - Een router (die heb je vast al)
 - Een Ethernet kabel

## 4. Installeren van Raspberry Pi

Download allereerst de [Raspberry Pi Imager](https://www.raspberrypi.org/software/) voor je specifieke Operating System _(hierna: OS)_ (Windows/macOS etc.). Stop de SD kaart (via de SD-kaart lezer) in je apparaat, en selecteer Raspberry Pi OS Lite. Afhankelijk van je wensen en of je dit in de toekomst nog wil gebruiken als 'gewone' desktop computer, kun je er ook voor kiezen om gewoon Raspberry Pi OS with desktop te installeren.

Stop de SD kaart in de Raspberry Pi, en start hem op, met een scherm en een toetsenbord eraan. Ideaal is om deze ook direct met een ethernet kabel aan de router te verbinden.

Open op de Raspberry Pi een terminal. Verander allereerst het standaardwachtwoord _raspberry_:

~~~bash
sudo passwd
~~~

Update vervolgens de raspberry pi.

~~~bash
sudo apt-get update
sudo apt-get full-upgrade
~~~

Open vervolgens de configuratie van de raspberrypi.

~~~bash
sudo raspi-config
~~~

 Zet onder interface option secure shell _(Hierna: ssh (secure shell)_ aan, dit maakt het mogelijk om van afstand in te loggen op de Raspberry Pi.  Wifi instellen op de Raspberry Pi is niet nodig. Het is zelf energiebesparend om zowel bluetooth als wifi uit te zetten, doe dat als volgt:

~~~bash
sudo rfkill block wifi
sudo rfkill block bluetooth
~~~

_NB: unblocken van de wifi/bluetooth gaat met het voor zichzelf sprekende commando sudo rfkill unblock wifi/bluetooth_

Reboot hierna de Raspberry Pi. Sluit de pi vervolgens aan met een ethernet kabel op je router. Vanaf nu kun je remote inloggen op de Raspberry Pi, met

~~~bash
ssh pi@raspberrypi
~~~

of middels het standaard ip-adres:

~~~bash
ssh pi@192.168.178.66
~~~

## 5. Installeren van PiHole

Nu alloceren we alloceren we een statisch ip-adres aan de Raspberry Pi. We loggen in in de Fritz Box via fritz.box of 192.168.178.1, ga vervolgens naar thuisnetwerk --> Netwerk. Ken in deze lijst aan de pi een statisch adres (afhankelijk van je netwerk ipv4/ipv6) toe. Dit is nu het ip-adres wat je nodig hebt om met ssh te verbinden naar de Raspberry Pi.

Reboot Raspberry Pi, controleer het toegekende ip config. Update deze vervolgens en installeer nu [pi-hole](https://github.com/pi-hole/pi-hole).

~~~bash
wget -O basic-install.sh https://install.pi-hole.net
sudo bash basic-install.sh
~~~

Doorloop de installatiewizard, kies als interface eth0 (kabel). Welke upstream DNS je kiest maakt niet veel uit (dit passen we later weer aan), en niveau van logging is eveneens persoonlijke voorkeur. In principe is alleen ads blokkeren over ipv4 ook voldoende. Als het goed is, is pi-hole nu geïnstalleerd.

Start vervolgens de http://pi.hole webpagina omgeving op, log in met admin password en ga naar de settings pagina. Controleer hier kort de instellingen van conditional forwarding.

_NB: zoals je ziet is dit een HTTP verbinding, maar de communicatie vindt alleen plaatst binnen je thuisnetwerk. Het instellen van een HTTPS verbinding is dus niet nodig, zolang je je Raspberry Pi niet openzet naar het internet._

Stel nu op de FritzBox (of andere router) de andere DNS-server in onder thuisnetwerk --> netwerk --> netwerkinstellingen --> meer instellingen (onderaan de pagina) --> ipv4-configuratie --> lokale DNS server. Voer hier de static ip-adres van de raspberry pi in.

Mocht je router geen lokale DNS server ondersteunen, dan kun je beter de PiHole ook instellen als Dynamic Host Configuration Protocol server (_hierna: DHCP-server_). In plaatst van je router, deelt dan de PiHole intern je adressen uit.

Installeer vervolgens op de raspberry pi de tool [Pihole-updatelists](https://github.com/jacklul/pihole-updatelists) zetten en bedank Github gebruiker _jacklul_ voor deze tool. Deze tool beheert blocklists voor de pi-hole, waardoor je zonder onderhoud verschillende lijsten van [Firebog](https://firebog.net/), een website die blocklists beheert voor de raspberry pi, up to date kunt houden.  De installatie op deze Github spreekt voor zichzelf, doorloop deze stappen.

Het is het beste om nu de raspberry pi herstarten, om te kijken of het statische ip-adres goed gealloceerd is.

~~~bash
sudo reboot
~~~

Hierna kun je de configuratie testen met

~~~bash
nslookup google.com
~~~

Het resultaat lijkt als het goed is op het onderstaand

~~~bash
Server:		##piholeip-adres##
Address:	##piholeip-adres##

Non-authoritative answer:
Name:	google.com
Address:  ##googleip-adres##
~~~

De Pi-hole werkt nu naar behoren met een upstream DNS server. Mocht je de PiHole niet geïnstalleerd hebben als DHCP-server, dan is het aan te raden om conditional forwarding in the stellen onder settings --> -->. Hiermee kan de PiHole de namen van de adressen koppelen aan de ip-adressen in de log, waarmee het duidelijke wordt welk apparaat welke DNS query heeft gestuurd.

## 4. Installeren van Upbound

Pi-hole kan naast met een upstream DNS server dus ook gebruikt wordt als self-contained DNS server. Hiervoor heb ik de volgende stappen gevolgd voor [het installeren van upbound naast een PiHole](https://github.com/anudeepND/pihole-unbound/blob/master/README.md). Bedank Github user _anudeepND_ voor deze configuratie. Loop al deze stappen door.

Om automatisch in de installatie genoemde root-hints file te updaten (elke 6 maanden), kun je ook de volgende line:

~~~bash
28 3 1 */6 * /usr/bin/wget -O /var/lib/unbound/root.hints https://www.internic.net/domain/named.root
~~~

toevoegen aan de crontab (een bestand op Linux om taken in te plannen en uit te voeren op vaste tijden), doe dat als volgt:

~~~bash
sudo crontab -e
~~~

Om de configuratie te testen, kun je op de Raspberry Pi het volgende commando uitvoeren:

~~~bash
dig github.com ##raspberrypi-adres##:5335
~~~

## 5. Andere interessant software voor de Raspberry Pi

Andere software die je kunt draaien op een raspberry pi is Raspotify van Github user ... . Hiermee werkt je raspberry als lokale Spotify speaker!
