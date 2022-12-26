---
title: "Explodroid - SLAM Robot"
excerpt: "A mobile robot inspired by the TurtleBot to perform and test different SLAM Algorithms. It uses a XBOX Kinect Camera to sense environments and uses an Intel Celeron based NUC commputer as its brain. The robot runs on ROS and uses the gmapping package to perform SLAM. The robot can be remotely controlled using SSH and it has encoders to get feedback."
imagePath: "/images/explodroid.JPG"
permalink: "/projects/explodroid"
collection: projects
youtubeId: "bSsTSEbaySQ"
year: "May 2017 - Jul 2018"

---

This robot was built as part of the research work conducted in Microsoft Innovation Lab as interns. The robot was inspired by the [TurtleBot](https://www.turtlebot.com/), mainly to serve as an cost-effective substitute. The robot runs on Robot Operating System(ROS) and is equipped with different sensors. 
<img src="/images/explodroid.JPG" />

<img style="float: right; width: 350px" src="/images/exploRenders.png" />

* The robot uses a xbox Kinect RGB-D camera to sense the environment.
* The robot using differential drive mechanism to move around. The motors are equipped with encoders to provide postion feedback.
* The robot uses an Intel NUC as the on board computer which runs ROS and performs SLAM
* The Kinect camera provides point cloud data which is converted to laserscan data which is then used by the gmapping algorithm as input for SLAM
* Performed autonomous navigation on an existing map using Adaptive Monte Carlo Localization

You can find the ROS packages and the dxf files for the chasis on [github](https://github.com/Prassi07/ExploDroid_Package). This project was featured in an article written by [EdexLive](https://www.edexlive.com/live-story/2017/aug/30/these-1040.html)

The team consisted of three interns including me, [Manoj Surya K](https://sites.google.com/view/manojsuryakashi) and [Tarun Sriram](https://www.linkedin.com/in/tarun-sriram-3b584b177/)

{% include youtubePlayer.html id=page.youtubeId %}