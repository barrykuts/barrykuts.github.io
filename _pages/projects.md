---
layout: page
title: projects
permalink: /projects/
nav: false
nav_order: 1
_styles: |
  .project-list {
    border-top: 1px solid var(--global-divider-color, #e5e5e5);
    border-bottom: 1px solid var(--global-divider-color, #e5e5e5);
    padding: 42px 0;
    display: grid;
    gap: 42px;
  }
  .project-entry {
    display: grid;
    grid-template-columns: 164px minmax(0, 1fr);
    gap: 40px;
    align-items: start;
  }
  .project-thumbnail {
    display: block;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 2px 9px rgb(0 0 0 / 18%);
  }
  .project-thumbnail img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 10;
    object-fit: contain;
    background: #fff;
  }
  .project-entry h2 {
    margin: 0 0 4px;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.4;
  }
  .project-entry h2 a {
    color: var(--global-text-color);
    text-decoration: none;
  }
  .project-entry h2 a:hover {
    text-decoration: underline;
  }
  .project-summary {
    margin: 0 0 6px;
    font-size: 19px;
    line-height: 1.5;
    color: var(--global-text-color);
  }
  .project-category {
    margin: 0 0 12px;
    font-size: 18px;
    font-style: italic;
    color: var(--global-text-color);
  }
  .project-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .project-actions a {
    display: inline-block;
    border: 1px solid var(--global-text-color);
    border-radius: 2px;
    padding: 7px 20px;
    color: var(--global-text-color);
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
    text-transform: uppercase;
    text-decoration: none;
  }
  .project-actions a:hover {
    background: var(--global-text-color);
    color: var(--global-bg-color);
  }
  .project-entry a:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: 4px;
  }
  @media (max-width: 600px) {
    .project-list { padding: 28px 0; gap: 36px; }
    .project-entry { grid-template-columns: minmax(0, 1fr); gap: 18px; }
    .project-thumbnail { width: 164px; }
    .project-entry h2 { font-size: 21px; }
    .project-summary { font-size: 17px; }
  }
---

<div class="project-list">
  {% assign sorted_projects = site.projects | sort: 'importance' %}
  {% for project in sorted_projects %}
    <article class="project-entry">
      {% if project.img %}
        <a class="project-thumbnail" href="{{ project.url | relative_url }}" aria-label="{{ project.title | escape }}">
          <img src="{{ project.img | relative_url }}" alt="" width="320" height="200" loading="lazy">
        </a>
      {% endif %}
      <div class="project-details">
        <h2><a href="{{ project.url | relative_url }}">{{ project.title | escape }}</a></h2>
        <p class="project-summary">{{ project.description | escape }}</p>
        {% if project.category == 'examples' %}
          <p class="project-category">Example project</p>
        {% elsif project.category %}
          <p class="project-category">{{ project.category | capitalize | escape }}</p>
        {% endif %}
        <div class="project-actions">
          <a href="{{ project.url | relative_url }}" aria-label="View {{ project.title | escape }}">Project</a>
          {% if project.github %}
            <a href="{{ project.github | escape }}" aria-label="Code for {{ project.title | escape }}">Code</a>
          {% endif %}
          {% if project.website %}
            <a href="{{ project.website | escape }}" aria-label="Website for {{ project.title | escape }}">Website</a>
          {% endif %}
        </div>
      </div>
    </article>
  {% endfor %}
</div>
