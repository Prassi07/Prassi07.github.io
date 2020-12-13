---
title: "TONY - 17-DOF Small Sized Humanoid robot"
excerpt: "A 17 DOF Humanoid Robot created as part of the undergraduate Project as a research platform to test different algorithms for humanoid robot. The robot is capable of simple actions like walking and turning. New gaits can be generated using matlab trajectory sequences and the inverse kinematic function. The robot can be controlled serially using an bluetooth device."
imagePath: "/images/tonyHumanoid.png"
permalink: "/projects/tonyhumanoid"
collection: projects
youtubeId: "9P8o5eNoTcs"
---

Tony is a humanoid robot built as platform to conduct research in humanoid robot. The robot has 17 Degrees of Freedom in total – 5 per leg, 3 per arm, 1 in neck. It uses dual servo motors with 17kgcm torque. The robot uses an Arduino uno as the controller and communicates with an external computer to receive commands to move around.
<img style="float: right;" src="/images/tony_2jpg" alt="Welcome" />

#### Bot Specs: 
|--------------------|-----|-------|
| Degrees of Freedom | Leg | 5 per Leg |
| 	       			 | Arms| 3 per Arm |
| 					 | Head|  1 |
|					 | Total | 10 + 6 + 1 = 17 |
|--------------------|-------|-----------------|
| Dimensions		 | Height| 365mm|
|					 | Weight| 2 Kilograms|
|--------------------|-------|------------|
| Communication      |Wired Serial| Bluetooth Serial|
|--------------------|---------|---------|

* Devised an independent Inverse Kinematics solution based on geometric approach

{% include youtubePlayer.html id=page.youtubeId %}