---
layout: publication_single
permalink: "/bayesian-staircase-estimation"

title: "A Bayesian Modeling Framework for Estimation and Ground Segmentation of Cluttered Staircases"
authors: '<b>Prasanna Sriganesh</b>, Burhanunddin Shirose and Matthew Travers'
conference:  'IEEE Robotics and Automation Letters (RA-L) 2025'

paperurl: 'https://ieeexplore.ieee.org/document/10918822'
youtubeId: '8baHgQ_rGLs'
github: 'https://github.com/Prassi07/staircase_autonomy' 
bibtex: "@article{sriganesh2025bayesian,
  \n\t title={A Bayesian Modeling Framework for Estimation and Ground Segmentation of Cluttered Staircases},
  \n\t author={Sriganesh, Prasanna and Shirose, Burhanuddin and Travers, Matthew},
  \n\t journal={IEEE Robotics and Automation Letters},
  \n\t year={2025},
  \n\t volume={10},
  \n\t number={5},
  \n\t pages={4164-4171},
  \n\t publisher={IEEE}
\n}"

---
{% include base_path %}


<p style="margin-bottom: 0.25em; text-align: justify;">
Autonomous robot navigation in complex environments requires robust perception as well as high-level scene understanding due to perceptual challenges, such as occlusions, and uncertainty introduced by robot movement. For example, a robot climbing a cluttered staircase can misinterpret clutter as a step, misrepresenting the state and compromising safety. This requires robust state estimation methods capable of inferring the underlying structure of the environment even from incomplete sensor data. In this paper, we introduce a novel method for robust state estimation of staircases. We have three key contributions.
</p>

<div class="pastel-card-inner" style="display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1.5rem;">
    <div class="clearfix" style="flex: 1; min-width: 250px; text-align: justify; margin: auto 0;">
       <b> Staircase Modeling: </b> We present a novel split state-space model to parameterize and represent large-scale staircases that can be used to predict other stairs in the staircase. 
    </div>
    <img class="project_pic" style="width: 100%; max-width: 450px; height: auto; object-fit: contain; border-radius: 2%; margin: auto 0;" src="/images/bayesian_staircase/modeling.png" alt="" />
</div>

<div class="pastel-card-inner" style="display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1.5rem;">
     <div class="clearfix" style="flex: 1; min-width: 250px; text-align: justify; margin: auto 0;">
       <b> Staircase Estimation: </b> A robust pipeline for estimating staircase location and parameters over time using noisy detections in scenes with occlusion and clutter
    </div>
    <img class="project_pic" style="width: 100%; max-width: 450px; height: auto; object-fit: contain; border-radius: 2%; margin: auto 0;" src="/images/bayesian_staircase/estimation.jpg" alt="" />
</div>

<div class="pastel-card-inner" style="display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1.5rem;">
    <div class="clearfix" style="flex: 1; min-width: 250px; text-align: justify; margin: auto 0;">
       <b> Stair Surface Segmentation: </b> An algorithm combining the staircase estimate with the point cloud to segment the staircase ground points in presence of clutter
    </div>
    <img class="project_pic" style="width: 100%; max-width: 450px; height: auto; object-fit: contain; border-radius: 2%; margin: auto 0;" src="/images/bayesian_staircase/segmentation.png" alt="" />
</div>

<div class="pastel-card-inner" style="display: flex; align-items: center; flex-direction:column; margin-bottom: 2rem;">
    <div class="clearfix" style="margin-bottom: 1rem;">
       The video below demonstrates our proposed pipeline deployed on the robot different staircases with clutter. Our algorithm is able to estimate staircase location and geometry even in presence of occlusions or partial measurements. 
    </div>
    <img class="project_pic" style="width: 60%; height: auto; object-fit: contain; border-radius:2%; margin: 0.5em" src="/images/bayesian_staircase/bse_result_animation.gif" alt="" />
</div>

<div class="pastel-card-inner" style="display: flex; align-items: center; flex-direction:column; margin-bottom: 2rem;">
    <div class="clearfix" style="margin-bottom: 1rem;">
      Here are some more example results of our proposed work. Our algorithm generalizes to different types of staircase.
    </div>
    <img class="project_pic" style="width: 60vw; height: auto; object-fit: contain; margin: 0.5em" src="/images/bayesian_staircase/bse_result1.jpg" alt="" />
    <img class="project_pic" style="width: 60vw; height: auto; object-fit: contain; margin: 0.5em" src="/images/bayesian_staircase/bse_result2.jpg" alt="" />
    <img class="project_pic" style="width: 60vw; height: auto; object-fit: contain; margin: 0.5em" src="/images/bayesian_staircase/bse_result3.jpg" alt="" />
    <img class="project_pic" style="width: 60vw; height: auto; object-fit: contain; margin: 0.5em" src="/images/bayesian_staircase/bse_result4.jpg" alt="" />
    <img class="project_pic" style="width: 60vw; height: auto; object-fit: contain; margin: 0.5em" src="/images/bayesian_staircase/bse_result5.jpg" alt="" />
</div>

<div class="pastel-card-inner" style="display: flex; align-items: center; flex-direction:column; margin-bottom: 2rem;">
    <div class="clearfix" style="text-align: left; width: 100%; margin-bottom: 1rem;">
        Citation:
    </div>
    <div id="bibtex-indiv" class="bibtex-code" style="width: 100%;">
            <pre><code class="language-bibtex" >{{ page.bibtex | replace: '\t', '&#09;' | replace: '\n', '<br>' }}</code></pre>
    </div>
</div>


