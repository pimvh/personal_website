---
title: "Configuring and installing a Pi-hole with Unbound"
description: "This blogpost goes into configuring and installing a Pi-hole with Unbound on your home-network."
previewimage: "blog/pi-hole-logo.png"
previewimagealt: "pi-hole logo"
date: "the 21st of February 2021"
postlang: "en"
wordcount: ""
---
Hello internet, this is my second blog post, this time about the amazing piece of software [Pi-Hole](https://pi-hole.net/Github), a DNS level adblocker and The DNS resolver [Unbound](https://nlnetlabs.nl/projects/unbound/about/). These can be easily installed on a [Raspberry Pi](https://www.raspberrypi.org/products/raspberry-pi-4-desktop-kit/), a mini-computer, which you can set up entirely by yourself.

The rest of this blog post is divided into the following sections:

1. Preface
2. What are the advantages?
3. The shopping list
4. Installing Raspberry Pi
5. Installing PiHole
6. Installing Unbound
7. Other interesting software for the Raspberry Pi

## 1. Preface

In the blog post below first out what the benefits are of self-managing your Domain Name System _(hereafter: DNS)_ server, and then what you need to get a Pi-hole up and running on your home network. The router used in this post is a FritzBox, although it should be possible with any kind of router. If you can't set up your own local DNS server on the router, you will need to have the PiHole act as a DHCP server instead of the router.

## 2. What are the benefits?

These days, most of your Internet traffic is encrypted with Hyper Text Transfer Protocol Secure _(hereafter https)_. HTTPS is simply HTTP (the protocol for loading web pages), but with Secure Socket Layer _(hereafter: SSL)_ or Transport Layer Security (TLS) encryption. A website with an HTTPS address also has a certificate, from a certification organization, for verification. For more information see for example the website of [Cloudflare](https://www.cloudflare.com/learning/ssl/how-does-ssl-work/website).

![DNS request -- source ](/static/blog/DNSrequest.jpg#blogimg)
DNS IMAGE SOURCE?

Before HTTPS is used to connect to a website, a so-called _Domain Name_ (e.g. _https://google.com_) is first converted into an ip-address in the internet traffic. Without the ip-address, the browser does not know where on the internet a domain can be found. This ip-address can be found in the DNS, which is the figurative address book of the Internet. In the image above is a schematic representation of a DNS request. Your ISP is in charge of the arrows here, he is in charge of the cables and such. By default, the DNS is usually also from your provider, unless you have set it up differently.  However, the traffic to/from DNS servers is often still unencrypted. This means that your internet provider can read which websites you visit. Activities on the website are encrypted and not visible. There are many different DNS servers, the Google Public DNS (8.8.8.8), Cloudflare (1.1.1.1) and OpenDNS (208.67.222.222). When requesting the ip address of a domain name, the provider of your DNS is free to log your query.

Under Dutch law, your internet provider is required to keep six months of data related to internet access, email over the internet and internet telephony, see [https://wetten.overheid.nl/](https://wetten.overheid.nl/jci1.3:c:BWBR0009950&hoofdstuk=13&artikel=13.2a&z=2018-05-01&g=2018-05-01). Part of this is the logging of the internet service used. Through DNS traffic you can see in plain text all the websites you have visited in the last six months, so your internet service provider has a lot of insight into your comings and goings on the internet.

Another possible security problem is being able to check that nothing has changed in the answer you get from a DNS server. This is why Domain Name System Security Extensions _(hereafter: DNSSEC)_ was created, which checks in a similar way as HTTPS with certificates whether the DNS responses you receive are 'real'. However, DNSSEC has not yet been widely adopted.

Besides DNSSEC, there are now various ways to encrypt your DNS traffic, such as DNS over TLS (DoT), DNS over HTTPS (DoH). These are not set by default on your router/device. By managing your DNS server yourself, you can set better encryption and your provider can see less of your doings on the Internet. A second benefit is that the Pi-hole blocks ads and malicious websites.

I think it's important to make the Internet a more secure, more encrypted place and also to make this security more accessible to non-extreme technicians. It is for this reason that I have written this blog post.

## 3. Shopping List

For the installation you will need:

 - Raspberry Pi 4
 - A computer screen (with HDMI connection or via an HDMI adapter)
 - A keyboard (USB 2.0/3.0)
 - An SD card (16GB or 32GB is more than enough)
 - An SD card adapter
 - A router (you probably already have one)
 - An Ethernet cable

## 4. Installing Raspberry Pi

First, download the [Raspberry Pi Imager](https://www.raspberrypi.org/software/) for your specific Operating System _(hereinafter OS)_ (Windows/macOS etc.). Insert the SD card (via the SD card reader) into your device, and select Raspberry Pi OS Lite. Depending on your needs and whether you want to use this as a 'regular' desktop computer in the future, you can also choose to just install Raspberry Pi OS with desktop.

Put the SD card in the Raspberry Pi, and boot it up, with a screen and keyboard attached. Ideally, you should also connect it directly to the router with an Ethernet cable.

On the Raspberry Pi, open a terminal. First, change the default password _raspberry_:

~~~bash
sudo passwd
~~~

Next, update the raspberry pi.

~~~bash
sudo apt-get update
sudo apt-get full-upgrade
~~~

Next, open the configuration of the raspberry pi.

~~~bash
sudo raspi-config
~~~

 Under interface option secure shell, turn on _(After this: ssh (secure shell)_, this allows remote login to the Raspberry Pi.  Setting up wifi on the Raspberry Pi is not necessary. It is self saving to turn off both bluetooth and wifi, do so as follows:

~~~bash
sudo rfkill block wifi
sudo rfkill block bluetooth
~~~

## 5. Installing PiHole

Now we allocate a static ip address to the Raspberry Pi. We log into the Fritz Box via fritz.box or 192.168.178.1, then go to home network --> Network. In this list, assign the pi a static address (depending on your network ipv4/ipv6). This is now the ip address you need to connect to the Raspberry Pi using ssh.

Reboot Raspberry Pi, check the assigned ip config. Then update it and now install [pi-hole](https://github.com/pi-hole/pi-hole).

~~~bash
wget -O basic-install.sh https://install.pi-hole.net
sudo bash basic-install.sh
~~~

Go through the installation wizard, choose as interface eth0 (cable). Which upstream DNS you choose doesn't matter much (we'll change this later), and level of logging is also personal preference. In principle only blocking ads over ipv4 is sufficient. If all goes well, pi-hole is now installed.

Next, start up the http://pi.hole webpage environment, log in with admin password and go to the settings page. Here briefly check the settings of conditional forwarding.

Note: as you can see this is an HTTP connection, but the communication only takes place within your home network. So setting up an HTTPS connection is not necessary, as long as you do not open up your Raspberry Pi to the internet._

Now on the FritzBox (or other router) set the other DNS server under home network --> network --> network settings --> more settings (at the bottom of the page) --> ipv4 configuration --> local DNS server. Enter the static ip address of the raspberry pi here.

If your router doesn't support local DNS server, then you should also set the PiHole as Dynamic Host Configuration Protocol server (_hereafter: DHCP server_). Instead of your router, the PiHole will then distribute your addresses internally.

Next, install on the raspberry pi the tool [Pihole-updatelists](https://github.com/jacklul/pihole-updatelists) and thank Github user _jacklul_ for this tool. This tool manages blocklists for the pi-hole, allowing you to keep up to date without maintenance various lists from [Firebog](https://firebog.net/), a website that manages blocklists for the raspberry pi.  The installation on this Github is self-explanatory, just go through these steps.

It is best to reboot the raspberry pi now, to make sure the static ip address is properly allocated.

~~~bash
sudo reboot
~~~

After this you can test the configuration with

~~~bash
nslookup google.com
~~~

The result should be similar to the following

~~~bash
Server:		##piholeip-address##
Address: ##piholeip-address##

Non-authoritative answer:
Name: google.com
Address: ##googleip-address##
~~~

The PiHole is now working properly with an upstream DNS server. Should you not have the PiHole installed as a DHCP server, it is recommended to set up conditional forwarding under Settings --> DNS --> Advanced DNS Settings. This will allow the PiHole to map the address names to the ip addresses in the log, making it clear which device sent which DNS query.


Translated with www.DeepL.com/Translator (free version)

## 5. Installing Unbound

Pi-hole can be used as a self-contained DNS server in addition to an upstream DNS server. For this I followed the following steps for [installing Unbound next to a PiHole](https://github.com/anudeepND/pihole-unbound/blob/master/README.md). Thank Github user _anudeepND_ for this configuration. Walk through all these steps.

Instead of the configuration of _anudeepND_ I use the following unbound configuration, which implements DNS of HTTPS:

~~~config

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

Check every once in a while whether 'good' DNS providers have been added to the [recommended DNS servers on Privacytools](https://privacytools.io/providers/dns/)

To test the configuration, you can run the following command on the Raspberry Pi:

~~~bash
dig github.com ##raspberrypi address##:5335
~~~

## 6. Other interesting software for the Raspberry Pi

Other software you can run on a raspberry pi is Raspotify from Github user dtcooper. With this, your raspberry works as a local Spotify speaker! You can find the repo [here](https://dtcooper.github.io/raspotify/).
