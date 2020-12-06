---
layout: archive
title: Projects
permalink: /projects/
author_profile: true
---

{% if author.googlescholar %}
  WELCOME TO PRPOJECTS</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
