---
layout: page
title: Updates
permalink: /updates/
---

{% for item in site.updates %}
<article class="update">
  <h2 class="update__title">
    <a href="{{ item.url }}">{{ item.title }}</a>
  </h2>

  <p class="update__lead">{{ item.lead }}</p>

</article>
{% endfor %}
