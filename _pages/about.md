---
layout: about
permalink: /
title: "Portfolio"
excerpt: "About me"
redirect_from: 
  - /about/
  - /about.html
---

<div class="pastel-card" style="margin-bottom: 2rem;" markdown="1">
<img src="/images/welcomePic.png" alt="Welcome" class="welcome-img" />

I'm a Ph.D. student at the **Robotics Institute, Carnegie Mellon University**. I work with [Dr. Matthew Travers](https://www.ri.cmu.edu/ri-faculty/matthew-j-travers/){:target="_blank"}, in [The Matt Lab](https://themattlab.org){:target="_blank"} and [Biorobotics lab](https://biorobotics.org){:target="_blank"}. In Summer 2026, I was a Robotics Research Intern at [Multiply Labs](https://www.multiplylabs.com/){:target="_blank"} working with [Dr. Jiuguang Wang](https://www.robo.guru/){:target="_blank"} on uncertainty-aware manipulation tasks. I was awarded the **Uber Presidential Fellowship** at the Robotics Institute, Carnegie Mellon University for the 2026–2027 academic year.

My current research focuses on mainly two things: 

- **Interaction-aware Motion Planning:** Developing algorithms that reason about robot-environment interactions to navigate realistic complex environments
- **Uncertainty-aware Active Perception:** Developing strategies for robots to actively reduce environmental uncertainty through targeted sensing actions

<p style="text-align: center; margin-top: 1.5rem;">
  <a href="mailto:{{site.author.email}}" rel="permalink" class="btn3" target="_blank"> <i class="fa fa-fw fa-envelope" aria-hidden="true"></i> Email </a>
  <a href="{{site.author.cv}}" rel="permalink" class="btn-pdf" target="_blank"> <i class="fa fa-fw fa-file" aria-hidden="true"></i> CV </a>
  <a href="{{ site.author.googlescholar }}" rel="permalink" class="btn-web" target="_blank"> <i class="fas fa-fw fa-graduation-cap" aria-hidden="true"></i> Google Scholar </a>
  <a href="https://www.github.com/{{ site.author.github }}" rel="permalink" class="btn-github" target="_blank"> <i class="fab fa-fw fa-github" aria-hidden="true"></i> Github </a>
</p>

I also completed my Masters in Robotics from Carnegie Mellon University. Before that, I worked under [Prof. Rajasekar Mohan](https://staff.pes.edu/nm1270){:target="_blank"} in the Microsoft Innovation Lab at PES University, Bengaluru and graduated with a Bachelors degree in Electronics and Communication Engineering. 

I was also running a YouTube Channel, [All About Robots]({{site.author.youtube}}){:target="_blank"} where I used to create simple tutorial videos on Robotics and Robot Building (currently inactive). My other hobbies include cooking, playing FPS games, astronomy, video editing and mobile photography. 
</div>

<div class="pastel-card" style="margin-bottom: 2rem; overflow: hidden; padding: 1rem 0;">
  <h2 class="text-primary" style="margin-top: 0; margin-bottom: 1rem; text-align: center;">Showreel of my Selected Research Work</h2>
  <div class="marquee-wrapper">
    <div class="marquee-content">
      <a href="/clearing-clutter-on-stairs" class="marquee-item">
        <img src="/images/clearing_clutter/basic_success_1.gif" alt="Showreel 1">
      </a>
      <a href="/clearing-clutter-on-stairs" class="marquee-item">
        <img src="/images/clearing_clutter/immovable_update.gif" alt="Showreel 2">
      </a>
      <a href="/bayesian-staircase-estimation" class="marquee-item">
        <img src="/images/bayesian_staircase/bse_result_animation.gif" alt="Showreel 3">
      </a>
      <!-- Duplicate for seamless scroll -->
      <a href="/clearing-clutter-on-stairs" class="marquee-item">
        <img src="/images/clearing_clutter/basic_success_1.gif" alt="Showreel 1">
      </a>
      <a href="/clearing-clutter-on-stairs" class="marquee-item">
        <img src="/images/clearing_clutter/immovable_update.gif" alt="Showreel 2">
      </a>
      <a href="/bayesian-staircase-estimation" class="marquee-item">
        <img src="/images/bayesian_staircase/bse_result_animation.gif" alt="Showreel 3">
      </a>
    </div>
  </div>
</div>

<div class="pastel-card" style="margin-bottom: 2rem;" markdown="1">
  <h2 class="text-primary" style="margin-top: 0; margin-bottom: 1.25rem; text-align: left;">News & Updates</h2>
  <div style="max-height: 380px; overflow-y: auto; padding-right: 0.75rem;" class="news-scroll-container">
    <ul style="list-style-type: none; padding-left: 0; margin: 0;">
      {% for news in site.data.news %}
        <li class="news-item">
          <div class="news-date-col">
            {{ news.date | date: "%B %-d, %Y" }}
          </div>
          <div class="news-desc-col">
            {% if news.badge %}
              <span class="badge-new-shiny">{{ news.badge }}</span>
            {% endif %}
            {{ news.description | markdownify | remove: '<p>' | remove: '</p>' }}
          </div>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

<br>
<p style="text-align: center;"> You can checkout my work using these links:  <br>
<a href="{{ base_path }}/publications"  rel="permalink" class="btn3"> Publications </a> <a href="{{ base_path }}/projects"  rel="permalink" class="btn3"> Projects </a></p>






