---
layout: projects
title: Projects
permalink: /projects/
author_profile: true
---

{% include base_path %}

This list showcases some of the <em>selected</em> research, course and independent projects I have worked on during my career.

<h1>Research Projects</h1>
<ul>
{% for post in site.extprojects %}
  {% if post.project_type == "Research" %}
    {% include list-projects.html %}
  {% endif %}
{% endfor %}
{% for post in site.projects %}
  {% if post.project_type == "Research" %}
    {% include list-projects.html %}
  {% endif %}
{% endfor %}
</ul>


<h1>Other Projects</h1>
<ul>
{% for post in site.extprojects %}
  {% if post.project_type != "Research" %}
    {% include list-projects.html %}
  {% endif %}
{% endfor %}
{% for post in site.projects %}
  {% if post.project_type != "Research" %}
    {% include list-projects.html %}
  {% endif %}
{% endfor %}
</ul>
