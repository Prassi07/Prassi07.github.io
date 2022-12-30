---
title: "UAV Path Planning for Landing and Coverage in Dense Forests"
excerpt: " In this work, we developed and implemented a planning strategy for UAVs to plan an emergency landing on one of landing zones in an environment which will maximize coverage within battery life constraints."
imagePath: "/images/drone_planner.png"
permalink: "/projects/droneplanner"
collection: projects
youtubeId: "G-g9eicdSfE"
year: "Nov 2022"
project_type: "Course"

---
Unmanned Aerial Vehicles (UAVs) have constraints on battery life that affect their time-of-flight. This is especially important for coverage applications in forests, where a drone might not be recoverable from failure. In this work, we developed and implemented a planning strategy for UAVs to plan an emergency landing on one of landing zones in an environment which will maximize coverage within battery life constraints. This was developed as part of a course project for the 'Robot Planning and Decision Making' class at CMU. The team members were Andrew Saba, Prasanna Sriganesh, Rohan Deshpande and Winnie Kuang.

We proposed a system consisting of two planners, the coverage planner and the emergency planner, that is part of a behavior executive to switch intelligently based on the UAV’s battery
life. The images below showcase the simulation environment and the overall system with the behavior executive. The landing planner was based on a 3D A* that also considered the covered area as one of its cost.

 <div class="container3" style="display: flex; align-items: flex-start; justify-content:center">
   <img class="project_spic" style="width: 350px; height: auto; object-fit: contain; border-radius:2%; padding: 0.5em 0.5em" src="/images/drone_planner.png" alt="" />
   <img class="project_spic" style="width: 300px; height: auto; object-fit: contain; border-radius:2%; padding: 0.5em 0.5em" src="/images/planner_schematic.png" alt="" />
</div>

Through simulations, our proposed planning system has demonstrated an increase in coverage compared to a naive closest-landing zone planner. On average, we get around 10% better coverage with our smart planner. Our planner also works if the battery life drops mid-flight. Both these cases are demonstrated in the video below. The code for this also available on [github](https://github.com/Prassi07/EmergencyDronePlanner){:target='_blank'}.

{% include youtubePlayer.html id=page.youtubeId %}