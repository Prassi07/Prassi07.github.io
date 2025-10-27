---
title: "Action-Informed Estimation and Planning: Clearing Clutter on Staircases via Quadrupedal Pedipulation"
authors: "<b>Prasanna Sriganesh</b>, Barath Satheeshkumar, Anushree Sabnis and Matthew Travers"
conference: 'arXiv'

paperurl: 'https://arxiv.org/abs/2509.20516'
youtubeId: 'CTss0FFHwNU'
image: '/images/action_informed_planning.png'

location: ''
date: 2025-09-24

bibtex: "@article{sriganesh2025actioninformed,
\n \t title={Action-Informed Estimation and Planning: Clearing Clutter on Staircases via Quadrupedal Pedipulation},
\n \t author={Prasanna Sriganesh and Barath Satheeshkumar and Anushree Sabnis and Matthew Travers},
\n \t journal={arXiv preprint arXiv:2509.20516},
\n \t year={2025},
\n }"

abstract: "For robots to operate autonomously in densely cluttered environments, they must reason about and potentially physically interact with obstacles to clear a path. Safely clearing a path on challenging terrain, such as a cluttered staircase, requires controlled interaction. For example, a quadrupedal robot that pushes objects out of the way with one leg while maintaining a stable stance with its three other legs. However, tightly coupled physical actions, such as one-legged pushing, create new constraints on the system that can be difficult to predict at design time. In this work, we present a new method that addresses one such constraint, wherein the object being pushed by a quadrupedal robot with one of its legs becomes occluded from the robot's sensors during manipulation. To address this challenge, we present a tightly coupled perception-action framework that enables the robot to perceive clutter, reason about feasible push paths, and execute the clearing maneuver. Our core contribution is an interaction-aware state estimation loop that uses proprioceptive feedback regarding foot contact and leg position to predict an object's displacement during the occlusion. This prediction guides the perception system to robustly re-detect the object after the interaction, closing the loop between action and sensing to enable accurate tracking even after partial pushes. Using this feedback allows the robot to learn from physical outcomes, reclassifying an object as immovable if a push fails due to it being too heavy. We present results of implementing our approach on a Boston Dynamics Spot robot that show our interaction-aware approach achieves higher task success rates and tracking accuracy in pushing objects on stairs compared to open-loop baselines."

collection: publications
selected: 'false'
singlelink: /clearing-clutter-on-stairs

---




