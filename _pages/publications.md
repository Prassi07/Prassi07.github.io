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

{% for post in site.publications reversed %}
    {% include list-publication.html %}
{% endfor %}