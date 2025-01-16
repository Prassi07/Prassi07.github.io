---
layout: publications
title: "Publications"
permalink: /publications/
author_profile: true
---
{% if site.author.googlescholar %}
  You can also find my articles on <u><a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</u> <i class="fas fa-fw fa-graduation-cap" aria-hidden="true"></i>
{% endif %}

{% include base_path %}



{% assign sorted_publications = site.publications | sort: 'date' | reverse %}
{% assign current_year = nil %}

{% for post in sorted_publications %}
  {% assign post_year = post.date | date: "%Y" %}
  
  {% if post_year != current_year %}
    {% include year_header.html year = post_year %} 
    {% assign current_year = post_year %}
  {% endif %}

  {% include list-publication.html %}
{% endfor %}
