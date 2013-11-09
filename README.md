Swarm
=====
Swarm is a simple attempt at building a semi-automous drone swarm using the Parrot AR.Drone 2.0.

Here's a quick breakdown of the build and required parts:

## PARTS
1 x Parrot AR Drone 2.0
http://www.amazon.com/Parrot-AR-Drone-Quadricopter-Controlled-Android/dp/B007HZLLOK/ref=sr_1_2?ie=UTF8&qid=1384035593&sr=8-2&keywords=parrot+ar+drone+2.0

1 x Arduino Nano
http://www.amazon.com/gp/product/B00E90CSRU/ref=oh_details_o03_s00_i01?ie=UTF8&psc=1

1 x level converter
http://www.amazon.com/SparkFun-Logic-Level-Converter/dp/B004G58W28/ref=sr_1_1?s=electronics&ie=UTF8&qid=1384035834&sr=1-1&keywords=logic+level+converter

1 x USB thumb drive, size doesn't really matter
http://www.amazon.com/HP-v165w-Flash-Drive-P-FD16GHP165-GE/dp/B009VQK3FQ/ref=sr_1_2?ie=UTF8&qid=1384036888&sr=8-2&keywords=hp+thumb+drive


Also add whatever sensors you want. I used a single ultrasonic for the demo.
http://www.amazon.com/SainSmart-HC-SR04-Ranging-Detector-Distance/dp/B004U8TOE6/ref=pd_sim_t_3

You're also going to need a breadboard + jumpers or some way to solder all the components together.

## BUILDING A STAND-ALONE DRONE

The big difference with a swarm is that you have to dork with the networking in order to address each drone invidually. With a single drone we can use the factory default method (ie, the drone is an AP).

Okay, this is REALLY high-level. I'll post a wiring diagram soon, I promise!

1. Download Node.js and node-serialport compiled for the Parrot AR.Drone and copy it to a fat32 formatted USB thumb drive.
https://github.com/felixge/node-cross-compiler/downloads

2. Unpack the tarball on the thumbdrive, then create a directory called node_modules and move node-serialport into it.

3. (coming soon)


## BUILDING A SWARM


### Resources
Max Ogden - https://gist.github.com/maxogden/4152815
John Backus - http://drones.johnback.us/blog/2013/02/03/programming-multiple-parrot-a-dot-r-drones-on-one-network-with-node-dot-js/
