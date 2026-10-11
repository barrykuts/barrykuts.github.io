---
layout: about
title: about
permalink: /
profile:
  align: right
  image: photo-placeholder.svg
  image_circular: false
selected_papers: false
social: false
announcements:
  enabled: false
  scrollable: false
  limit: 3
latest_posts:
  enabled: false
  scrollable: false
  limit: 3
---

I'm a product builder interested in giving people more control over how they use technology.

Born and raised in NYC, I became fascinated with financial markets at 13. I studied accounting at Baruch College, earned my CPA, and began my career in tax before moving into real estate private equity. A self-taught engineer, I later led product and research strategy at [Dymension](https://dymension.xyz/), a settlement blockchain.

Outside of work I enjoy baking, practicing brazilian jiu-jitsu and spending time with family, friends, and my puppy Bugsy.

### latest posts

<ul>
  {% for post in site.posts limit: 3 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      <span>— {{ post.date | date: '%B %-d, %Y' }}</span>
    </li>
  {% endfor %}
</ul>
