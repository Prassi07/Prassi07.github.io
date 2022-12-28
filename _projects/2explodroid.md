---
title: "Explodroid - SLAM Robot"
excerpt: "A mobile robot inspired by the TurtleBot to perform and develop SLAM Algorithms. It uses a XBOX Kinect Camera to sense environments and uses an Intel Celeron based NUC commputer as its brain. The robot can map and autonomously navigate between two points in an environment"
imagePath: "/images/explodroid.JPG"
permalink: "/projects/explodroid"
collection: projects
youtubeId: "bSsTSEbaySQ"
year: "May 2017 - Jul 2018"
project_type: "Research"
---

This robot was built as part of the research work conducted in Microsoft Innovation Lab as interns. The robot was inspired by the [TurtleBot](https://www.turtlebot.com/){:target="_blank"}, mainly to serve as an cost-effective substitute. The robot runs on Robot Operating System(ROS) and is equipped with different sensors. 
<img src="/images/explodroid.JPG" style="border-radius:2%" />


 <div class="container" style="display: flex; align-items: flex-start">
    <div class="clearfix">
     <ul>
        <li> The robot uses a xbox Kinect RGB-D camera to sense the environment. </li>
        <li> The robot using differential drive mechanism to move around. The motors are equipped with encoders to provide postion feedback. </li>
        <li> The robot uses an Intel NUC as the on board computer which runs ROS and performs SLAM </li>
        <li> The Kinect camera provides point cloud data which is converted to laserscan data which is then used by the gmapping algorithm as input for SLAM </li>
        <li> Performed autonomous navigation to a target point on the map using Adaptive Monte Carlo Localization </li>
     </ul>
    </div>
    <img class="project_pic" style="width: 300px; height: auto; float: left; object-fit: contain; border-radius:2%" src="/images/exploRenders.png" alt="" />
</div>

You can find the ROS packages and the dxf files for the chasis on [github](https://github.com/Prassi07/ExploDroid_Package){:target="_blank"}. This project was featured in an article written by [EdexLive](https://www.edexlive.com/live-story/2017/aug/30/these-1040.html){:target="_blank"}

The team consisted of three interns including me, [Manoj Surya K](https://sites.google.com/view/manojsuryakashi){:target="_blank"} and [Tarun Sriram](https://www.linkedin.com/in/tarun-sriram-3b584b177/){:target="_blank"}

{% include youtubePlayer.html id=page.youtubeId %}