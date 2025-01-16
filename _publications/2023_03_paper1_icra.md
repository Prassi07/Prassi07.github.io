---
title: "Longitudinal Control Volumes: A Novel Centralized Estimation and Control Framework for Distributed Multi-Agent Sorting Systems"
authors: 'James Maier, <b>Prasanna Sriganesh</b> and Matthew Travers'
conference: '2024 IEEE International Conference on Robotics and Automation (ICRA)'

paperurl: 'https://arxiv.org/abs/2402.02232'
youtubeId: 'zHBTYLz28O0'
image: '/images/superconv_icra.jpg'

location: 'Yokohama, Japan'
date: 2024-05-13

bibtex: "@inproceedings{maier2024longitudinal,
  \n\t title={Longitudinal Control Volumes: A Novel Centralized Estimation and Control Framework for Distributed Multi-Agent Sorting System},
  \n\t author={Maier, James and Sriganesh, Prasanna and Travers, Matthew},
  \n\t booktitle={2024 IEEE International Conference on Robotics and Automation (ICRA)},
  \n\t pages={4420--44279},
  \n\t year={2024},
  \n\t organization={IEEE},
\n }"


collection: publications
selected: 'false'

# singlelink: /publication/lcv-icra24
# single: 'false'

abstract: "Centralized control of a multi-agent system improves upon distributed control especially when multiple agents share a common task e.g., sorting different materials in a recycling facility. Traditionally, each agent in a sorting facility is tuned individually which leads to suboptimal performance if one agent is less efficient than the others. Centralized control overcomes this bottleneck by leveraging global system state information, but it can be computationally expensive. In this work, we propose a novel framework called Longitudinal Control Volumes (LCV) to model the flow of material in a recycling facility. We then employ a Kalman Filter that incorporates local measurements of materials into a global estimation of the material flow in the system. We utilize a model predictive control algorithm that optimizes the rate of material flow using the global state estimate in real-time. We show that our proposed framework outperforms distributed control methods by 40-100% in simulation and physical experiments."
---




