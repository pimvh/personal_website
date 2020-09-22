---
title: "My bachelor thesis"
description: "Deze blogpost is about my bachelorthesis, the benchmarking of Deep Neural Networks."
image: "blog/nn.jpeg"
imagealt: "A simple neural network"
date: "the 11th of September 2020"
postlang: "en"
wordcount: "1389"
---
Hello Internet! Welcome to my very first post on my bachelor thesis, *Benchmarking Deep Neural Networks*.

In this post I will discuss what neural networks are, what are known techniques are to speed up the training of these networks and finally what the contribution of my thesis is. Before I start, I would like to explain a few terms that I am going to use:

## Terminology

- **Device**: a certain part of the computer that can perform (part of) the calculation.

- **Throughput**: the throughput speed in terms of instruction in a computer, for example the clock speed of processors in GHz (gigahertz).

- **GPU**: official the Graphic Processing Unit, i.e. the part of the computer responsible for realizing graphical display. Nowadays, however, GPUs are widely used to do calculations for Neural Networks, as they can perform more instructions in parallel than 'normal' processors (also known as CPUs).

## What are Neural Networks?

![I](/static/blog/nn.jpeg#blogimg)

*NB: This is a fairly simple neural network, nowadays the networks are many times bigger.*

Neural networks (*hierna:* NN) are structures of artificial neurons, as shown in the image above. Using such NN, it is possible to understand images. For example, by classifying them in a certain category (e.g. cat/dog) or by separating a subject from the background (e.g. coloring sheep on an image) or by generating new images (e.g. combining images of celebrities and creating new non existing celebrities).

Deep Neural Networks (*hierna:* DNN) are (extremely) large neural networks. The research field has only not yet defined when we can call an NN a DNN, but with a normal DNN think of an order of magnitude of 11 Million parameters.

On the left side of the DNN we enter data. In my thesis these were images that can be understood as a large matrix of RGB pixels (Red, Green, Blue). After a number of matrix operations, using parameters on each node of the network, the network generates a solution. In our example, this is the class in which the image is located. However, in order to train a DNN properly, more data is needed. In the training process of the DNN, we divide the dataset into a training part and a test part. With the training part we can let the network learn which image belongs in which class. How well the network can distinguish classes can then be verified with the test part of the dataset.

To come to an outcome in a DNN, we take an image and calculate each layer of the network up to the last layer. This is also called the forward pass. After the forward pass, in the test phase we can calculate an update for the network based on the outcome. With this update we can adjust the parameters of the network in all layers. We do this from back to front. This process is also called the backwards pass.

By repeating this process several times, we can let the network make better predictions about the class of an image. Usually the primary goal is to make the *accuracy* of the network as high as possible, which means that in as many cases as possible the network classifies the given image in the right class.

Of course, it is also possible to enter other types of data than images, and there are also tasks such as segmentation (trying to distinguish an object from a background) and generating new images based on an existing dataset.

## The background of my thesis

Nowadays it is a problem that the training of these DNN takes a long time because of the size of the datasets ([ImageNet](http://image-net.org) is for example 14,197,122 images large). In addition to the size of the datasets, the DNNs are also very large. The field has devised several ways to speed up the training of these networks. One of these ways is *distributed training*. There are several theoretical forms of this:

![pipelining](/static/blog/pl_in_computing.png#blogimg)

- Pipeline Parallelism (*hierna:* PP) - The DNN to be trained is copied into pieces across different devices and through this chain of devices different parts of the data are forwarded in parallel, and backwards propagated. The image shows how pipelining works in a more general computing context. It can be seen that different stages of a given instruction are being worked on at the same time. With DNN it works in the same way, only the different stages are executed over different devices.

![data parallelism](/static/blog/dp_in_matrix_multiplication.png#blogimg)

- Data Parallelism (*hierna:* DP) - The data is calculated over two parts of the model in parallel, and in the back propagation there is a synchronization between the models. In the image above you can see how dataparallelism can be represented in matrix arithmetic.

- Model Parallelism (*hierna:* MP) - The DNN to be trained (or different parts of that network) is duplicated over different devices and the data is cut and forwarded in parallel (and then propagated back) through the different parts. This is especially important with DNNs that do not fit on one device (in terms of size) and can therefore be distributed over multiple devices, and I did not investigate this in my thesis.

In my thesis I selected a number of frameworks for training neural networks, which supported different forms of this distributed training. In the end, implementation turned out to be very difficult within these frameworks and I only compared *Pytorch* (DP), *Horovod* (DP) and *Pipedream* (PP).

Pytorch supported both DP and MP, but I only used DP. Pytorch developed by Facebook's AI Research lab (FAIR).

Horovod, developed by Uber, is a light weight library, which allows you to easily run DP on top of another framework (like Pytorch in this case). Horovod uses a different way to update the gradients to a forward pass (see [Horovod's website](https://eng.uber.com/horovod/) itself). Theoretically this should be faster than Pytorch alone.

Pipedream, developed by Microsoft, uses a combination of DP and PP, by *profiling* the DNN calculations in advance. In the profiling stage it is calculated which part of the calculation is the most intensive, and this part is carried out over several machines in parallel in addition to using PP. In my thesis I used a version of Pipedream that was put on top of Pytorch by a master student Matthijs Jansen.

Besides frameworks, I also made a selection of a number of neural networks. In my final thesis I mainly used ResNet models, ResNeXt and EfficientNet.

I compared them on throughput and memory use during training and validation (in terms of allocation and cached memory). I did these measurements on the Lisa cluster of SurfSara and using the MNIST dataset. The MNIST dataset is a dataset of handwritten numbers (0-9), which must be correctly recognized by the neural networks.

In my measurements I have scaled up the number of GPUs from 1 to 4, i.e. to measure the degree of acceleration relative to no parallelism.

That looked like this for the throughput:

![throughput resnet models](/static/blog/throughput_resnetmodels_thesis.png#blogimg)

and like this for memory use:

![memory use resnet models](/static/blog/memoryuse_resnetmodels_thesis.png#blogimg)

My ultimate goal was to find 'the best performing' framework of these three. Regrettably, as is the case with many bachelor's theses, I had little time to make broad measurements.

Nevertheless, I managed to select the winner, namely Pipedream. Theoretically, DP should be faster than Pipedream's DP, but in my research the opposite emerged. My explanation for this interesting result was the difference in environment between Pipedream and the other two frameworks, because Pipedream needed different versions of certain libraries to get it working.

In the process I discovered that making a benchmark is not easy. It takes a lot of work to keep it up to date. However, it seems to me that there is still a lot of work to be done in science to compare multiple frameworks.

## Want to know more?

My complete thesis can be found on [the UvA website](https://scri).
pties.uba.uva.nl/search?id=715774).

## Sources

- Wikipedia (pictures about different forms of parallelism)
- Original references to alle scientific sources that I've used can be found in the sources of my thesis.

## The continuation of this blog
The topics of this blog will be limited to my future job, my own hobby AI projects and other interesting things I find or read about!
