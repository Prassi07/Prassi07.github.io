---
layout: publication_single
permalink: "/clearing-clutter-on-stairs"

title: "Action-Informed Estimation and Planning: Clearing Clutter on Staircases via Quadrupedal Pedipulation"
authors: '<b>Prasanna Sriganesh</b>, Barath Satheeshkumar, Anushree Sabnis and Matthew Travers'
# conference:  'IEEE Robotics and Automation Letters (RA-L) 2025'

paperurl: 'https://arxiv.org/abs/2509.20516'
youtubeId: 'CTss0FFHwNU'
# github: 'https://github.com/Prassi07/staircase_autonomy' 
bibtex: "@article{sriganesh2025actioninformed,
  \n \t  title={Action-Informed Estimation and Planning: Clearing Clutter on Staircases via Quadrupedal Pedipulation},
  \n \t author={Prasanna Sriganesh and Barath Satheeshkumar and Anushree Sabnis and Matthew Travers},
  \n \t journal={arXiv preprint arXiv:2509.20516},
  \n \t year={2025},
}"

---
{% include base_path %}

<p style="text-align: center; margin-top: 0em; margin-bottom: 0em;"> 
<a href="{{ page.paperurl }}" rel="permalink" class="btn2" target="_blank"><i class="fa fa-file-pdf" aria-hidden="true"></i> Full Paper</a>
  <a href="https://youtu.be/{{ page.youtubeId }}" rel="permalink" class="btn2" target="_blank" ><i class="fab fa-youtube" aria-hidden="true"></i> Video</a>
  {% if page.github %}
    <a href="{{ page.github }}" rel="permalink" class="btn2" target="_blank" ><i class="fab fa-github" aria-hidden="true"></i> Code</a>
  {% endif %}
</p>

<div class="container3">
    <h2>Abstract</h2>
    <p>For robots to operate autonomously in densely cluttered environments, they must reason about and potentially physically interact with obstacles to clear a path. Safely clearing a path on challenging terrain, such as a cluttered staircase, requires controlled interaction. However, relying solely on exteroceptive (e.g., visual) feedback for interaction is challenging, as the robot's own body may occlude the object, and sensor measurements may be noisy. In this work, we propose an "action-informed" approach that tightly couples estimation and planning for quadrupedal robots to clear clutter on staircases via "pedipulation" (i.e., manipulation with a leg). Our action-informed estimation module uses proprioceptive (e.g., foot contact) feedback during an interaction to predict the object's displacement. This prediction serves as an action-informed prior to guide the perception system, enabling robust tracking even after partial pushes or brief occlusions. This interaction-aware state estimate is used by our motion planner to decide on subsequent actions, such as re-pushing, climbing, or treating an object as immovable. We show in hardware experiments that our interaction-aware system significantly outperforms an open-loop baseline in task success rate (e.g., 85% vs 35% on one task) and tracking accuracy, generalizing to various objects and environments.</p>
</div>

<div class="container3" style="display: flex; align-items: center; flex-direction:column;  margin-bottom: 1em; border: 2px solid #888; padding: 10px; border-radius: calc(0.5vw + 5px);">
    <div class="clearfix" style="text-align: center;">
       The video below is a fun demonstration of our proposed pipeline with a Halloween theme.
    </div>
    <div class="youtubePlayerContainer" style="margin: 0 auto; text-align: center;">
        {% include youtubePlayer.html id="weCLrurMnlU" %}
    </div>
</div>


<div class="container2">
    <h2>Our Approach</h2>
    <div class="container3" style="display: flex; align-items: center; margin-bottom: 1em; flex-direction: column;  border: 2px solid #888; padding: 10px; border-radius: calc(0.5vw + 5px);">
      <div class="clearfix" style="text-align: center">
        Our system is built on a tight coupling between planning, estimation, and action. We propose a framework that robustly segments and localizes clutter on staircases by leveraging geometric priors of the environment
      </div>
      <div style="display: flex; justify-content: center; margin: 1em 0;">
        <img class="project_pic" style="width: 80%; height: auto; object-fit: contain; margin: 0.5em" src="/images/clearing_clutter/movability.png" alt="A diagram showing how the input point cloud is used to generate a library of motion primitives for the world model." />
      </div>
      <div class="clearfix" style="text-align: center">
        When the robot is commanded to clear an object, a planner computes collision-free foot paths combined with the 'movable primitives' for pushing, which are then executed by a <b>pedipulation policy</b> learned via reinforcement learning. We then fuse <b>vision with proprioceptive contact feedback</b> to track an object's state through a push, even when it's occluded or when the push is partial.
      </div>
    </div>
</div>

<div class="container2">
  <h2>Results</h2>
  <div class="container3" style="display: flex; align-items: center;  flex-direction:column; margin-bottom: 1em; border: 2px solid #888; padding: 10px; border-radius: calc(0.5vw + 5px);">
      <div class="clearfix">
        Here are some results of our proposed work. Our algorithm generalizes to different types of objects and staircases.
      </div>
      <img class="project_pic" style="width: 85%; height: auto; object-fit: contain; margin: 0.5em" src="/images/clearing_clutter/basic_success_1.gif" alt="" />
      <div style="display: flex; flex-wrap: wrap; justify-content: center; width: 100%;">
        <img class="project_pic" style="width: 48%; height: auto; object-fit: contain; margin: 0.5em" src="/images/clearing_clutter/basic_success_2.gif" alt="" />
        <img class="project_pic" style="width: 48%; height: auto; object-fit: contain; margin: 0.5em" src="/images/clearing_clutter/basic_success_3.gif" alt="" />
        <img class="project_pic" style="width: 48%; height: auto; object-fit: contain; margin: 0.5em" src="/images/clearing_clutter/basic_success_4.gif" alt="" />
        <img class="project_pic" style="width: 48%; height: auto; object-fit: contain; margin: 0.5em" src="/images/clearing_clutter/basic_success_5.gif" alt="" />
      </div>
  </div>

  <div class="container3" style="display: flex; align-items: center;  flex-direction:column; margin-bottom: 1em; border: 2px solid #888; padding: 10px; border-radius: calc(0.5vw + 5px);">
      <div class="clearfix">
        Our perception-action coupling allows the robot to successfully track and re-plan after partial pushes, where the object doesn't fully clear the path.
      </div>
      <img class="project_pic" style="width: 85%; height: auto; object-fit: contain; margin: 0.5em" src="/images/clearing_clutter/partial_tracking.gif" alt="Partial push tracking result" />
  </div>

  <div class="container3" style="display: flex; align-items: center;  flex-direction:column; margin-bottom: 1em; border: 2px solid #888; padding: 10px; border-radius: calc(0.5vw + 5px);">
      <div class="clearfix">
        The system can also detect immovable objects based on proprioception feedback during a push. It then updates its model and can re-plan a new path to continue its mission.
      </div>
      <img class="project_pic" style="width: 85%; height: auto; object-fit: contain; margin: 0.5em" src="/images/clearing_clutter/immovable_update.gif" alt="Immovable object detection result" />
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
