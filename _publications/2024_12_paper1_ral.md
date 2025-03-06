---
title: "A Bayesian Modeling Framework for Estimation and Ground Segmentation of Cluttered Staircases"
authors: "<b>Prasanna Sriganesh</b>, Burhanuddin Shirose and Matthew Travers"
conference: 'Accepted to IEEE Robotics and Automation Letters (RA-L)'

paperurl: 'https://arxiv.org/abs/2501.04170'
youtubeId: 'QDYkL4a-uE4'
image: '/images/stair_bayesian_estimation.png'

location: ''
date: 2025-01-07

bibtex: "@article{sriganesh2025bayesian,
  \n\t title={A Bayesian Modeling Framework for Estimation and Ground Segmentation of Cluttered Staircases},
  \n\t author={Sriganesh, Prasanna and Shirose, Burhanuddin and Travers, Matthew},
  \n\t journal={arXiv preprint arXiv:2501.04170},
  \n\t year={2025}
\n}"

abstract: "Autonomous robot navigation in complex environments requires robust perception as well as high-level scene understanding due to perceptual challenges, such as occlusions, and uncertainty introduced by robot movement. For example, a robot climbing a cluttered staircase can misinterpret clutter as a step, misrepresenting the state and compromising safety. This requires robust state estimation methods capable of inferring the underlying structure of the environment even from incomplete sensor data. In this paper, we introduce a novel method for robust state estimation of staircases. To address the challenge of perceiving occluded staircases extending beyond the robot's field-of-view, our approach combines an infinite-width staircase representation with a finite endpoint state to capture the overall staircase structure. This representation is integrated into a Bayesian inference framework to fuse noisy measurements enabling accurate estimation of staircase location even with partial observations and occlusions. Additionally, we present a segmentation algorithm that works in conjunction with the staircase estimation pipeline to accurately identify clutter-free regions on a staircase. Our method is extensively evaluated on real robot across diverse staircases, demonstrating significant improvements in estimation accuracy and segmentation performance compared to baseline approaches."

collection: publications
selected: 'true'

singlelink: /publication/bayesian-staircase-estimation
single: 'true'

---




