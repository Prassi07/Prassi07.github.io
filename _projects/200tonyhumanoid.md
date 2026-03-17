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

<div class="pastel-card-inner" style="margin-bottom: 2rem;">
Tony is a humanoid robot built as platform to conduct research in humanoid robot. The robot has 17 Degrees of Freedom in total. This project was completed under the guidance of <a href="https://staff.pes.edu/nm1270" target="_blank">Prof. Rajasekar Mohan</a>
</div>

<div class="pastel-card-inner" style="display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1.5rem;">
    <div class="clearfix" style="flex: 1; min-width: 250px;">
     <ul style="margin-block-start: 0; padding-inline-start: 1.5em">
        <li> The robot uses an Arduino uno as the controller and communicates with an external computer to receive commands to move around </li>
        <li> The walk trajectories are obtained using the 3-D linear inverted pendulum model </li>
        <li> A geometric solution is devised to calculate the inverse kinematics for the robot. This is the premise for this <a href="https://ieeexplore.ieee.org/abstract/document/9025944" target="_blank">paper</a></li>
        <li> Since this robot does not have a yaw degree of freedom, turning in place is achieved using the slip phenonmenon </li>
        <li> A curved path walking gait algroithm is devised using this slip factor and is successfully achieved in the <a href="https://ieeexplore.ieee.org/document/9382698" target="_blank">paper</a></li>
     </ul>
    </div>
    <img class="project_spic" style="width: 300px; height: auto; object-fit: contain; border-radius: 8px;" src="/images/tony_2.jpg" alt="" />
</div>

<div class="pastel-card-inner" style="margin-bottom: 2rem;" markdown="1">

### Bot Specs: 

| <b>Degrees of Freedom</b> | Leg   | 5 per Leg(Hip Roll and Pitch, Knee Pitch, Ankle roll and pitch)      |
|                   | Arms  | 3 per Arm       |
|                   | Head  | 1               |
|                    | Total | 10 + 6 + 1 = 17 |
| <b>Dimensions</b>		 | Height | 365mm|
|					 | Weight | 2 Kilograms|
| <b>Communication</b>      | Wired Serial | Bluetooth Serial|

The team consisted of two students including me and <a href="https://scholar.google.com/citations?user=wZH3lt8AAAAJ&hl=en" target="_blank">Prajwal Rajendra Mahendrakar</a>
</div>

<div class="pastel-card-inner" style="display: flex; align-items: center; flex-direction:column; margin-bottom: 2rem;">
    <div class="clearfix" style="text-align: center; margin-bottom: 1rem;">
        A video demonstrating all the basic gaits implemented on the robot is shown below.
    </div>
    <div class="youtubePlayerContainer" style="margin: 0 auto; text-align: center;">
        {% include youtubePlayer.html id=page.youtubeId %}
    </div>
</div>