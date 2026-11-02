---
title: "OATH: Object-Agnostic Tracking for Dexterous Hands, Enabling Rapid Physics-based Retargeting"
authors: "Solvin Sigurdson, <b>Prasanna Sriganesh</b>, Juan Borbon, Joel Burdick, Dingqi Zhang, and Jiuguang Wang"
conference: 'Pre-print'

paperurl: 'https://arxiv.org/pdf/2610.14379'
arxiv: 'https://arxiv.org/abs/2610.14379'
website: 'https://multiplylabs.github.io/oath/'
singlelink: 'https://multiplylabs.github.io/oath/'
single: 'true'
image: '/images/oath_teaser.jpg'

location: ''
date: 2026-10-09

bibtex: "@article{sigurdson2026oath,
\n \t title={{OATH}: Object-Agnostic Tracking for Dexterous Hands, Enabling Rapid Physics-based Retargeting},
\n \t author={Sigurdson, Solvin and Sriganesh, Prasanna and Borbon, Juan and Burdick, Joel and Zhang, Dingqi and Wang, Jiuguang},
\n \t journal={arXiv preprint arXiv:2610.14379},
\n \t year={2026}
\n }"

abstract: "Retargeting human demonstrations into dynamically feasible dexterous hand trajectories requires resolving complex contact physics, yet current methods either omit physical constraints or rely on computationally expensive sampling-based optimization in simulation. Reinforcement learning has previously been used to achieve planning and control through contact dynamics; however, standard policies require object-specific training and fail to generalize across arbitrary geometries. This work reframes physics-based retargeting as a residual learning problem, where we demonstrate that zero-shot generalization across objects relies on structured state representations. Specifically, formulating the observation space to include a localized contact-error signal guiding each robot link to its target coordinate on the object surface enables a single, unified residual policy to successfully grasp novel, unseen object geometries. Rolling out this policy in simulation on a kinematic reference trajectory yields a physics-based retargeter, OATH. Operating at 0.4 seconds of compute per second of reference, OATH achieves 2.4x faster-than-real-time performance and a 60-350x reduction in computational cost compared to sampling-based methods. The system recovers 58% of held-out and 54% of unseen-object DexYCB trajectories while maintaining a sub-2 cm tracking error."

collection: publications
selected: 'false'

---
