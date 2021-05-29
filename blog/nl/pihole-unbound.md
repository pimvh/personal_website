---
title: "Configuren en installeren van Pi-hole met Unbound"
description: "Deze blogpost gaat over het configureren en installeren van een Pi-hole met Unbound op je thuisnetwerk."
previewimage: "blog/pi-hole-logo.png"
previewimagealt: "pi-hole logo"
date: "21 februari 2021"
postlang: "nl"
wordcount: "1552"
---
Hallo internet, dit is mijn tweede blogpost, ditmaal over het geweldige stuk software [Pi-Hole](https://pi-hole.net/Github), een adblocker op DNS niveau en De DNS-resolver [Unbound](https://nlnetlabs.nl/projects/unbound/about/). Deze kunnen eenvoudig geïnstalleerd worden op een [Raspberry Pi](https://www.raspberrypi.org/products/raspberry-pi-4-desktop-kit/), een minicomputer, die je geheel zelf in kunt richten.

De rest van deze blogpost is verdeeld in de volgende onderdelen:

1. Woord vooraf
2. Wat zijn de voordelen?
3. De boodschappenlijst
4. Installeren van Raspberry Pi
5. Installeren van PiHole
6. Installeren van Unbound
7. Andere interessant software voor de Raspberry Pi

## 1. Woord vooraf

In de onderstaande blogpost eerste uit wat de voordelen zijn van het zelf beheren van je Domain Name System _(hierna: DNS)_ server, en vervolgens wat je nodig hebt om een Pi-hole aan de praat te krijgen op je thuisnetwerk. De gebruikte router in deze post is een FritzBox, alhoewel het mogelijk zou moeten zijn met elk soort router. Als je op de router niet je eigen lokale DNS-server kunt instellen, zul je de PiHole moeten laten fungeren als DHCP-server in plaats van de router.

## 2. Wat zijn de voordelen?

Tegenwoordig is het grootste gedeelte van je internetverkeer versleuteld met Hyper Text Transfer Protocol Secure _(hierna: https)_. HTTPS is simpelweg HTTP (hét protocol om webpagina te laden), maar dan met een encryptie van Secure Socket Layer _(hierna: SSL)_ of Transport Layer Security (TLS). Een website met een HTTPS adres heeft ook een certificaat, van een certificeringsorganistie, ter verificatie. Zie voor meer informatie bijvoorbeeld de website van [Cloudflare](https://www.cloudflare.com/learning/ssl/how-does-ssl-work/website).

![DNS request -- source ](/static/blog/DNSrequest.jpg#blogimg)
DNS IMAGE SOURCE?

Voordat HTTPS gebruikt wordt om een verbinding aan te gaan met een website, wordt eerst in het internet verkeer een zogenaamde _Domain Name_ (bijv. _https://google.com_) omgezet worden in een ip-adres. Zonder het ip-adres weet de browser niet op welke plek op het internet een domein te vinden is. Dit ip-adres is the vinden in de DNS, wat het figuurlijke adresboek van het internet is. In de bovenstaande afbeelding is een schematisch weergave van een DNS request. Je internetprovider gaat hier over de pijltjes, hij gaat namelijk over de kabels en dergelijke. Standaard staat de DNS meestal ook van je provider, tenzij je deze anders hebt ingesteld.  Het verkeer van/naar DNS-servers is vaak echter nog onversleuteld. Dit betekent dat je internetprovider kan meelezen met  welke websites je bezoekt. Activiteiten op de website zijn versleuteld en niet zichtbaar. Er zijn veel verschillende DNS servers, bijv. de Google Public DNS (8.8.8.8), Cloudflare (1.1.1.1) en OpenDNS (208.67.222.222). Bij het opvragen van het ip-adres van een domein naam staat het de aanbieder van je DNS vrij om je query (vraag) te loggen.

Volgens het Nederlands recht is je internetprovider verplicht om zes maanden gegevens in verband met internettoegang, e-mail over het internet en internettelefonie te bewaren, zie [https://wetten.overheid.nl/](https://wetten.overheid.nl/jci1.3:c:BWBR0009950&hoofdstuk=13&artikel=13.2a&z=2018-05-01&g=2018-05-01). Een onderdeel hiervan is het loggen van de gebruikte internetdienst. Middels DNS verkeer is gewoon in normale tekst te zien welke websites je allemaal hebt bezocht in de afgelopen zes maanden, dus je internetprovider heeft veel inzicht in je doen en laten op internet.

Een ander mogelijk beveiligingsprobleem is kunnen controleren of er niets veranderd is aan het antwoord dat je van een DNS-server krijgt. Hiervoor is Domain Name System Security Extensions _(hierna: DNSSEC)_ in het leven geroepen, waarmee er op vergelijkbare manier als in HTTPS met certificaten gecontroleerd wordt of de DNS responses die je binnen krijgen, wel 'echt' zijn. DNSSEC is echter nog niet op grote schaal geadopteerd.

Naast DNSSEC zijn er inmiddels ook verschillende manieren om je DNS verkeer te versleutelen zoals DNS over TLS (DoT), DNS over HTTPS (DoH). Deze staat niet standaard ingesteld op je router/apparaat. Door het zelf beheren van je DNS-server, kun je betere versleuting instellen en kan je provider minder zien van je doen en laten op internet. Een tweede voordeel is dat de Pi-hole advertenties en kwaadaardige websites.

Ik vind het belangrijk om het internet een veiligere, meer versleutelde plek te maken en om deze beveiliging ook meer toegankelijk te maken voor niet extreem technici. Om deze reden heb ik dan ook deze blogpost geschreven.

## 3. Boodschappenlijst

Voor de installatie heb je nodig:

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

De Pi-hole werkt nu naar behoren met een upstream DNS server. Mocht je de PiHole niet geïnstalleerd hebben als DHCP-server, dan is het aan te raden om conditional forwarding in the stellen onder Settings --> DNS --> Advanced DNS Settings. Hiermee kan de PiHole de namen van de adressen koppelen aan de ip-adressen in de log, waarmee het duidelijke wordt welk apparaat welke DNS query heeft gestuurd.

## 6. Installeren van Unbound

Pi-hole kan naast met een upstream DNS server dus ook gebruikt wordt als self-contained DNS server. Hiervoor heb ik de volgende stappen gevolgd voor [het installeren van unbound naast een PiHole](https://github.com/anudeepND/pihole-unbound/blob/master/README.md). Bedank Github user _anudeepND_ voor deze configuratiestappen. Loop al deze stappen door.

In plaats van de configuratie van _anudeepND_ gebruik ik encrypted DNS over HTTPS, met de volgende upbound config:

~~~bash

    # The  verbosity  number, level 0 means no verbosity, only errors.
    # Level 1 gives operational information. Level  2  gives  detailed
    # operational  information. Level 3 gives query level information,
    # output per query.  Level 4 gives  algorithm  level  information.
    # Level 5 logs client identification for cache misses.  Default is
    # level 1.
    verbosity: 0

    interface: 127.0.0.1
    port: 5335
    do-ip4: yes
    do-udp: yes
    do-tcp: yes

    # May be set to yes if you have IPv6 connectivity
    do-ip6: no

    # You want to leave this to no unless you have *native* IPv6. With 6to4 and
    # Terredo tunnels your web browser should favor IPv4 for the same reasons
    prefer-ip6: no

    # Use this only when you downloaded the list of primary root servers!
    # Read  the  root  hints from this file. Make sure to
    # update root.hints evry 5-6 months.
    # root-hints: "/var/lib/unbound/root.hints"

    # Trust glue only if it is within the servers authority
    harden-glue: yes

    # Ignore very large queries.
    harden-large-queries: yes

    # Require DNSSEC data for trust-anchored zones, if such data is absent, the zone becomes BOGUS
    # If you want to disable DNSSEC, set harden-dnssec stripped: no
    harden-dnssec-stripped: yes

    # RFC 6891. Number  of bytes size to advertise as the EDNS reassembly buffer
    # size. This is the value put into  datagrams over UDP towards peers.
    # The actual buffer size is determined by msg-buffer-size (both for TCP and
    # UDP). Do not set higher than that value.
    # Default  is  1232 which is the DNS Flag Day 2020 recommendation.
    # Setting to 512 bypasses even the most stringent path MTU problems, but
    # is seen as extreme, since the amount of TCP fallback generated is
    # excessive (probably also for this resolver, consider tuning the outgoing
    # tcp number).
    edns-buffer-size: 1232

    # Rotates RRSet order in response (the pseudo-random
    # number is taken from Ensure privacy of local IP
    # ranges the query ID, for speed and thread safety).  
    # private-address: 192.168.0.0/16
    rrset-roundrobin: yes

    # Time to live minimum for RRsets and messages in the cache. If the minimum
    # kicks in, the data is cached for longer than the domain owner intended,
    # and thus less queries are made to look up the data. Zero makes sure the
    # data in the cache is as the domain owner intended, higher values,
    # especially more than an hour or so, can lead to trouble as the data in
    # the cache does not match up with the actual data anymore
    cache-min-ttl: 300
    cache-max-ttl: 86400

    # Have unbound attempt to serve old responses from cache with a TTL of 0 in
    # the response without waiting for the actual resolution to finish. The
    # actual resolution answer ends up in the cache later on.
    serve-expired: yes

    # Harden against algorithm downgrade when multiple algorithms are
    # advertised in the DS record.
    harden-algo-downgrade: yes

    # Ignore very small EDNS buffer sizes from queries.
    harden-short-bufsize: yes

    # Refuse id.server and hostname.bind queries
    hide-identity: yes

    # Report this identity rather than the hostname of the server.
    identity: "DNS"

    # Refuse version.server and version.bind queries
    hide-version: yes

    # Prevent the unbound server from forking into the background as a daemon
    do-daemonize: no

    # Number  of  bytes size of the aggressive negative cache.
    neg-cache-size: 4M

    # Send minimum amount of information to upstream servers to enhance privacy
    qname-minimisation: yes

    # Deny queries of type ANY with an empty response.
    # Works only on version 1.8 and above
    deny-any: yes

    # Do no insert authority/additional sections into response messages when
    # those sections are not required. This reduces response size
    # significantly, and may avoid TCP fallback for some responses. This may
    # cause a slight speedup
    minimal-responses: yes

    # Perform prefetching of close to expired message cache entries
    # This only applies to domains that have been frequently queried
    # This flag updates the cached domains
    prefetch: yes

    # Fetch the DNSKEYs earlier in the validation process, when a DS record is
    # encountered. This lowers the latency of requests at the expense of little
    # more CPU usage.
    prefetch-key: yes

    # One thread should be sufficient, can be increased on beefy machines. In reality for
    # most users running on small networks or on a single machine, it should be unnecessary
    # to seek performance enhancement by increasing num-threads above 1.
    num-threads: 1

    # more cache memory. rrset-cache-size should twice what msg-cache-size is.
    msg-cache-size: 50m
    rrset-cache-size: 100m

    # Faster UDP with multithreading (only on Linux).
    so-reuseport: yes

    # Ensure kernel buffer is large enough to not lose messages in traffix spikes
    so-rcvbuf: 4m
    so-sndbuf: 4m

    # Set the total number of unwanted replies to keep track of in every thread.
    # When it reaches the threshold, a defensive action of clearing the rrset
    # and message caches is taken, hopefully flushing away any poison.
    # Unbound suggests a value of 10 million.
    unwanted-reply-threshold: 100000

    # Minimize logs
    # Do not print one line per query to the log
    # log-queries: no
    # Do not print one line per reply to the log
    # log-replies: no
    # Do not print log lines that say why queries return SERVFAIL to clients
    # log-servfail: no

    # Do not print log lines to inform about local zone actions
    #log-local-actions: no
    # Do not print log lines that say why queries return SERVFAIL to clients
    logfile: "/var/log/unbound/unbound.log"

    # Only give access to recursion clients from LAN IPs
    access-control: 127.0.0.1/32 allow
    access-control: 192.168.0.0/16 allow
    access-control: 172.16.0.0/12 allow
    access-control: 10.0.0.0/8 allow
    # access-control: fc00::/7 allow
    # access-control: ::1/128 allow    

    # Ensure privacy of local IP ranges
    private-address: 192.168.0.0/16
    private-address: 169.254.0.0/16
    private-address: 172.16.0.0/12
    private-address: 10.0.0.0/8
    private-address: fd00::/8
    private-address: fe80::/10

    tls-cert-bundle:"etc/ssl/certs/ca-certificates.crt"

forward-zone:
        name: "."
	forward-addr:116.202.176.26@853 #https://libredns.gr/
        forward-addr:94.140.14.14@853 #https://adguard.com/
	forward-tls-upstream: yes
 ~~~

 kijk om de zoveel tijd of er 'goede' DNS provider bij zijn gekomen op de [aangeraden DNS servers op Privacytools](https://privacytools.io/providers/dns/)

Om de configuratie te testen, kun je op de Raspberry Pi het volgende commando uitvoeren:

~~~bash
dig github.com ##raspberrypi-adres##:5335
~~~

## 7. Andere interessant software voor de Raspberry Pi

Andere software die je kunt draaien op een raspberry pi is Raspotify van Github user dtcooper. Hiermee werkt je raspberry als lokale Spotify speaker! Je kunt de repo [hier vinden](https://dtcooper.github.io/raspotify/).
