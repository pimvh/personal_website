---
title: "Configuring and installing a Pi-hole with Upbound"
description: "This blogpost goes into configuring and installing a Pi-hole with Upbound on your home-network."
previewimage: "blog/pi-hole-logo.png"
previewimagealt: "pi-hole logo"
date: "the 21st of February 2021"
postlang: "en"
wordcount: ""
---
Hello internet, this is my second blog post, this time about the amazing piece of software [Pi-Hole](https://pi-hole.net/Github), a DNS level adblocker and The DNS resolver [Upbound](https://nlnetlabs.nl/projects/unbound/about/). These can be easily installed on a [Raspberry Pi](https://www.raspberrypi.org/products/raspberry-pi-4-desktop-kit/), a mini-computer, which you can set up entirely by yourself.

The rest of this blog post is divided into the following sections:

1. Preface
2. What are the advantages?
3. The shopping list
4. Installing Raspberry Pi
5. Installing PiHole
6. Installing Upbound

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

## 5. Installing Upbound

Pi-hole can be used as a self-contained DNS server in addition to an upstream DNS server. For this I followed the following steps for [installing upbound next to a PiHole](https://github.com/anudeepND/pihole-unbound/blob/master/README.md). Thank Github user _anudeepND_ for this configuration. Walk through all these steps.

To automatically update root hints file mentioned in the installation (every 6 months), you can also use the following line:

~~~bash
28 3 1 */6 * /usr/bin/wget -O /var/lib/unbound/root.hints https://www.internic.net/domain/named.root
~~~

add to the crontab (a file on Linux to schedule and execute tasks at fixed times), do that as follows:

~~~bash
sudo crontab -e
~~~

To test the configuration, you can run the following command on the Raspberry Pi:

~~~bash
dig github.com ##raspberrypi address##:5335
~~~

## 6. Other interesting software for the Raspberry Pi.

Other software you can run on a raspberry pi is Raspotify from Github user dtcooper. With this, your raspberry works as a local Spotify speaker! You can find the repo [here](https://dtcooper.github.io/raspotify/).
