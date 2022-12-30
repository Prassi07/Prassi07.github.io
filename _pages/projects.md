---
layout: projects
title: Projects
permalink: /projects/
author_profile: true
---

{% include base_path %}

This list showcases some of the <em>selected</em> research, course and independent projects I have worked on during my career.

{% for post in site.extprojects %}
  {% include list-projects.html %}
{% endfor %}
{% for post in site.projects %}
  {% include list-projects.html %}
{% endfor %}

