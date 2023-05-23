---
layout: publication_single
permalink: "/publication/staircase-detection-icra"

title: "Fast Staircase Detection and Estimation using 3D Point Clouds with Multi-detection Merging for Heterogeneous Robots"
authors: '<b>Prasanna Sriganesh</b>, Namya Bagree, Bhaskar Vundurthy and Matthew Travers'
conference: '2023 IEEE International Conference on Robotics and Automation (ICRA)'

paperurl: 'https://arxiv.org/abs/2211.00610'
youtubeId: 'DO114mELokw'
image: '/images/staircase_icra.jpg'


---
{% include base_path %}

<p style="margin-bottom: 0em; text-align: justify;">
Robotic systems need advanced mobility capabilities to operate in complex, three-dimensional environments designed for human use, e.g., multi-level buildings. This work presents a novel method that enables mobile robots to robustly operate in multi-level environments by making it possible to autonomously locate and climb a range of different staircases.
</p>

<div class="container3" style="display: flex; align-items: center">
    <div class="clearfix">
        Our algorithm smartly uses projections of the point cloud to detect various types of staircases under 30 milliseconds in most instances, which makes it useful for robots that move at faster speeds. The algorithm is also platform agnostic and can be used on different robots. 
    </div>
    <img class="project_pic" style="width: 750px; height: auto; float: left; object-fit: contain; border-radius:2%" src="/images/staircase_results_animation.gif" alt="" />
</div>

<div class="container3" style="display: flex; align-items: center">
    <img class="project_pic" style="width: 750px; height: auto; float: left; object-fit: contain; border-radius:2%" src="/images/staircase_merging_animation.gif" alt="" />
    <div class="clearfix">
        We also propose an algorithm that can merge detections coming either from different robots or even the same robot from different viewpoints without creating duplicate detections. This helps in getting better estimates as the robot gets better view of the staircase. 
    </div>
</div>

<p style="text-align: center; margin-top: 0em; margin-bottom: 0em;"> You can find out more - <a href="{{page.paperurl}}" target="_blank">Full Paper</a> | <a href="https://youtu.be/{{page.youtubeId}}" target="_blank">Video</a> </p>
