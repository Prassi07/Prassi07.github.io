---
title: "Explodroid - SLAM Robot"
excerpt: "A mobile robot inspired by the TurtleBot to perform and develop SLAM Algorithms. It uses a XBOX Kinect Camera to sense environments and uses an Intel Celeron based NUC commputer as its brain. The robot can map and autonomously navigate between two points in an environment"
imagePath: "/images/explodroid.JPG"
permalink: "/projects/explodroid"
collection: projects
youtubeId: "bSsTSEbaySQ"
year: "May 2017 - Jul 2018"
project_type: "Internship"
---

<div class="pastel-card-inner" style="margin-bottom: 2rem;">
This robot was built as part of the internship work conducted in Microsoft Innovation Lab. The robot was inspired by the <a href="https://www.turtlebot.com/" target="_blank">TurtleBot</a>, mainly to serve as an cost-effective substitute. The robot runs on Robot Operating System(ROS) and is equipped with different sensors. 

<img src="/images/explodroid.JPG" style="border-radius: 8px; width: 100%; max-width: 500px; display: block; margin: 1rem auto;" />
</div>


<div class="pastel-card-inner" style="display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1.5rem;">
    <div class="clearfix" style="flex: 1; min-width: 250px;">
     <ul style="padding-inline-start: 1.5em; margin: 0;">
        <li> The robot uses a xbox Kinect RGB-D camera to sense the environment. </li>
        <li> The robot using differential drive mechanism to move around. The motors are equipped with encoders to provide postion feedback. </li>
        <li> The robot uses an Intel NUC as the on board computer which runs ROS and performs SLAM </li>
        <li> The Kinect camera provides point cloud data which is converted to laserscan data which is then used by the gmapping algorithm as input for SLAM </li>
        <li> Performed autonomous navigation to a target point on the map using Adaptive Monte Carlo Localization </li>
     </ul>
    </div>
    <img class="project_pic" style="width: 300px; height: auto; object-fit: contain; border-radius: 8px;" src="/images/exploRenders.png" alt="" />
</div>

<div class="pastel-card-inner" style="margin-bottom: 2rem;">
You can find the ROS packages and the dxf files for the chasis on <a href="https://github.com/Prassi07/ExploDroid_Package" target="_blank">github</a>. This project was featured in an article written by <a href="https://www.edexlive.com/live-story/2017/aug/30/these-1040.html" target="_blank">EdexLive</a>.

The team consisted of three interns including me, <a href="https://sites.google.com/view/manojsuryakashi" target="_blank">Manoj Surya K</a> and <a href="https://www.linkedin.com/in/tarun-sriram-3b584b177/" target="_blank">Tarun Sriram</a>.
</div>

<div class="pastel-card-inner" style="display: flex; align-items: center; flex-direction:column; margin-bottom: 2rem;">
    <div class="youtubePlayerContainer" style="margin: 0 auto; text-align: center;">
        {% include youtubePlayer.html id=page.youtubeId %}
    </div>
</div>