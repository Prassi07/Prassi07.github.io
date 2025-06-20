---
layout: publication_single
permalink: "/fast-staircase-detection"

title: "Fast Staircase Detection and Estimation using 3D Point Clouds with Multi-detection Merging for Heterogeneous Robots"
authors: '<b>Prasanna Sriganesh</b>, Namya Bagree, Bhaskar Vundurthy and Matthew Travers'
conference: '2023 IEEE International Conference on Robotics and Automation (ICRA)'

paperurl: 'https://ieeexplore.ieee.org/abstract/document/10160258'
youtubeId: '-QbWmr-CmYI'
youtubeId2: '6-V9mmfgTmQ'
image: '/images/staircase_icra.jpg'
github: 'https://github.com/Prassi07/staircase_autonomy' 

bibtex: "@inproceedings{sriganesh2023fast,
   \n\t title={Fast Staircase Detection and Estimation using 3D Point Clouds with Multi-detection Merging for Heterogeneous Robots},
   \n\t author={Sriganesh, Prasanna and Bagree, Namya and Vundurthy, Bhaskar and Travers, Matthew},
   \n\t booktitle={2023 IEEE International Conference on Robotics and Automation (ICRA)},
   \n\t pages={9253--9259},
   \n\t year={2023},
   \n\t organization={IEEE},
\n}"

---
{% include base_path %}

<p style="text-align: center; margin-top: 0em; margin-bottom: 0em;"> 
<a href="{{ page.paperurl }}" rel="permalink" class="btn2" target="_blank"><i class="fa fa-file-pdf" aria-hidden="true"></i> Full Paper</a>
  <a href="https://youtu.be/{{ page.youtubeId }}" rel="permalink" class="btn2" target="_blank" ><i class="fab fa-youtube" aria-hidden="true"></i> Video</a>
  {% if page.github %}
    <a href="{{ page.github }}" rel="permalink" class="btn2" target="_blank" ><i class="fab fa-github" aria-hidden="true"></i> Code</a>
  {% endif %}
</p>


<p style="margin-bottom: 0.25em; text-align: justify;">
Robotic systems need advanced mobility capabilities to operate in complex, three-dimensional environments designed for human use, e.g., apartments, warehouses or any such multi-level building. This work presents a novel method that enables mobile robots to robustly operate in multi-level environments by making it possible to autonomously locate and climb a range of different staircases.
</p>

<div class="container3" style="display: flex; align-items: center; margin-bottom: 1em; flex-direction: row; border: 2px solid #888; padding: 10px; border-radius: calc(0.5vw + 5px);">
    <div class="clearfix" style="text-align: center">
         <b> Staircase Dectection: </b> We first propose an algorithm that can quickly detect multiple types of staircases. Our algorithm smartly uses projections of the point cloud to staircases under 30 milliseconds in most instances, which makes it useful for robots that move at faster speeds. The algorithm is also platform agnostic and can be used on different robots. 
    </div>
    <img class="project_pic" style="width: 60%; height: auto; float: right; object-fit: contain; border-radius:2%" src="/images/staircase_results_animation.gif" alt="" />
</div>

<div class="container3" style="display: flex; align-items: center; margin-bottom: 1em; flex-direction: row; border: 2px solid #888; padding: 10px; border-radius: calc(0.5vw + 5px);">
    <div class="clearfix" style="text-align: center">
         <b> Multi-Detection Merging: </b>We also propose an algorithm that can merge detections coming either from different kinds of robots or even the same robot from different viewpoints without creating duplicate detections. This helps in getting better estimates as the robot gets better view of the staircase. 
    </div>
    <img class="project_pic" style="width: 60%; height: auto; float: right; object-fit: contain; border-radius:2%" src="/images/staircase_merging_animation.gif" alt="" />
</div>

<div class="container3" style="display: flex; align-items: center;  flex-direction:column; margin-bottom: 1em; border: 2px solid #888; padding: 10px; border-radius: calc(0.5vw + 5px);">
    <div class="clearfix">
      The video below demonstrates the detection algorithm and the multi-detection merging pipeline deployed on the robot for multiple large-scale staircases.
    </div>
    <div class="youtubePlayerContainer" style="margin: 0 auto; text-align: center;">
        {% include youtubePlayer.html id=page.youtubeId2 %}
    </div>
</div>

<div class="container3" style="display: flex; align-items: center;  flex-direction:column; margin-bottom: 1em; border: 2px solid #888; padding: 10px; border-radius: calc(0.5vw + 5px);">
    <div class="clearfix" style="text-align: left; width: 100%;">
        Citation:
    </div>
    <div id="bibtex-indiv" class="bibtex-code" style="width: 100%;">
            <pre><code class="language-bibtex" >{{ page.bibtex | replace: '\t', '&#09;' | replace: '\n', '<br>' }}</code></pre>
    </div>
</div>
