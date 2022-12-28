---
title: "TONY - 17-DOF Small Sized Humanoid robot"
excerpt: "A 17 DOF Humanoid Robot created as part of the undergraduate Project as a research platform to test different algorithms for humanoid robot. The robot is capable of simple actions like walking and turning. New gaits can be generated using matlab trajectory sequences and the inverse kinematic function. The robot can be controlled serially using an bluetooth device."
imagePath: "/images/tonyHumanoid.png"
permalink: "/projects/tonyhumanoid"
collection: projects
youtubeId: "9P8o5eNoTcs"
year: "Jan 2019 - Dec 2019"
project_type: "Research"

---

 <div class="container" style="display: flex; align-items: flex-start">
    <div class="clearfix">
     <ul>
        <li> Tony is a humanoid robot built as platform to conduct research in humanoid robot. The robot has 17 Degrees of Freedom in total </li>
        <li> This project was completed under the guidance of <a href="https://faculty.pes.edu/p10125" target="_blank">Prof. Rajasekar Mohan</a> </li>
        <li> It uses dual shaft servo motors with 17kgcm torque </li>
        <li> The robot uses an Arduino uno as the controller and communicates with an external computer to receive commands to move around </li>
        <li> The walk trajectories are obtained using the 3-D linear inverted pendulum model </li>
        <li> A geometric solution is devised to calculate the inverse kinematics for the robot. This is the premise for this <a href="https://ieeexplore.ieee.org/abstract/document/9025944" target="_blank">paper</a></li>
        <li> Since this robot does not have a yaw degree of freedom, turning in place is achieved using the slip phenonmenon </li>
        <li> A curved path walking gait algroithm is devised using this slip factor and is successfully achieved in the <a href="https://ieeexplore.ieee.org/document/9382698" target="_blank">paper</a></li>
     </ul>
    </div>
    <img class="project_pic" style="width: 300px; height: auto; float: left; object-fit: contain; border-radius:2%" src="/images/tony_2.jpg" alt="" />
</div>

### Bot Specs: 

| <b>Degrees of Freedom</b> | Leg   | 5 per Leg(Hip Roll and Pitch, Knee Pitch, Ankle roll and pitch)      |
|                   | Arms  | 3 per Arm       |
|                   | Head  | 1               |
|                    | Total | 10 + 6 + 1 = 17 |
| <b>Dimensions</b>		 | Height | 365mm|
|					 | Weight | 2 Kilograms|
| <b>Communication</b>      | Wired Serial | Bluetooth Serial|

The team consisted of two students including me and  [Prajwal Rajendra Mahendrakar](https://scholar.google.com/citations?user=wZH3lt8AAAAJ&hl=en){:target="_blank"}
A video demonstrating all the basic gaits implemented on the robot is shown below.

{% include youtubePlayer.html id=page.youtubeId %}