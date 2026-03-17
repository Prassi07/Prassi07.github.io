---
layout: about
permalink: /
title: "Portfolio"
excerpt: "About me"
redirect_from: 
  - /about/
  - /about.html
---


I'm a Ph.D. student at the Robotics Institute, Carnegie Mellon University. I work with [Dr. Matthew Travers](https://www.ri.cmu.edu/ri-faculty/matthew-j-travers/){:target="_blank"}, in the [Matt Lab](https://themattlab.org){:target="_blank"} and [Biorobotics lab](https://biorobotics.org){:target="_blank"}. My current work focuses on mainly two things, 

- **Interaction-aware Motion Planning:** Developing algorithms that reason about robot-environment interactions to navigate realistic complex environments
- **Uncertainty-aware Active Perception:** Developing strategies for robots to actively reduce environmental uncertainty through targeted sensing actions

<p style="text-align: center; margin-top: 1.5rem;"> <a href="mailto:{{site.author.email}}"  rel="permalink" class="btn3" target="_blank"> <i class="fa fa-fw fa-envelope" aria-hidden="true"></i> Email </a> <a href="{{site.author.cv}}"  rel="permalink" class="btn3" target="_blank"> <i class="fa fa-fw fa-file" aria-hidden="true"></i> CV </a> <a href="{{ site.author.googlescholar }}"  rel="permalink" class="btn3" target="_blank"> <i class="fas fa-fw fa-graduation-cap" aria-hidden="true"></i> Google Scholar </a> <a href="https://www.github.com/{{ site.author.github }}" rel="permalink" class="btn3" target="_blank"> <i class="fab fa-fw fa-github"  aria-hidden="true"></i> Github </a> </p>

I also completed my Masters in Robotics from Carnegie Mellon University. Before that, I worked under [Prof. Rajasekar Mohan](https://staff.pes.edu/nm1270){:target="_blank"} in the Microsoft Innovation Lab at PES University, Bengaluru and graduated with a Bachelors degree in Electronics and Communication Engineering. 
 
I was also running a YouTube Channel, [All About Robots]({{site.author.youtube}}){:target="_blank"} where I used to create simple tutorial videos on Robotics and Robot Building (currently inactive). My other hobbies include cooking, playing FPS games, astronomy, video editing and mobile photography. 

<br>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
  <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
    <img src="https://via.placeholder.com/600x400.gif?text=Showreel+1" style="width: 100%; height: auto; display: block;" alt="Showreel 1">
  </div>
  <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
    <img src="https://via.placeholder.com/600x400.gif?text=Showreel+2" style="width: 100%; height: auto; display: block;" alt="Showreel 2">
  </div>
</div>

<br>
<h2 style="margin-bottom: 1rem; color: #4f46e5;">News & Updates</h2>
<ul style="list-style-type: none; padding-left: 0;">
  {% for news in site.data.news limit:3 %}
    <li style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #f0f2f5;">
      <div style="font-weight: 600; color: #1e1e24;">{{ news.title }}</div>
      <div style="font-size: 0.85em; color: #7a8288; margin-bottom: 0.25rem;">{{ news.date | date: "%B %d, %Y" }}</div>
      <div style="font-size: 0.95em;">{{ news.description }}</div>
    </li>
  {% endfor %}
</ul>

<br>
<p style="text-align: center;"> You can checkout my further work using these links:  <br>
<a href="{{ base_path }}/research"  rel="permalink" class="btn3"> Research </a> <a href="{{ base_path }}/publications"  rel="permalink" class="btn3"> Publications </a> <a href="{{ base_path }}/projects"  rel="permalink" class="btn3"> Projects </a></p>






