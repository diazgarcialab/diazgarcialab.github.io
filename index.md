---
title: Home
nav:
  order: 0
  tooltip: Home page
---

{% include section.html full=true %}

{% include hero.html image="images/vines.png" title="Grapevine Breeding Program" subtitle="University of California, Davis" %}

{% include section.html %}

The Grapevine Breeding Program at The University of California - Davis is part of the [Viticulture and Enology Department](https://wineserver.ucdavis.edu/#/), which has been at the forefront of innovation in grape growing and winemaking for over 135 years, shaping the industry in California and beyond.

{% include section.html %}

## Highlights

{% capture text %}
Our breeding program develops high-quality grape cultivars and rootstocks resistant/tolerant to diseases, pests, and other stresses in the environment. For this purpose, we use the large genetic and phenotypic diversity found across many American *Vitis* species. Our group collaborates with other research groups and extensionists in areas such as genomics, population genetics, plant physiology, machine learning, engineering, and others.

{%
  include link.html
  link="research"
  text="See what we've published"
  icon="fas fa-arrow-right"
  flip=true
%}
{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/germplasm_andy/errante_noir.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}
Our breeding program at UC Davis houses one of the largest collections of Vitis germplasm in the world. Germplasm collections made by Drs. [Harold Olmo](https://wineserver.ucdavis.edu/people/harold-olmo#/) and [Andy Walker](https://wineserver.ucdavis.edu/people/m-walker#/) for more than six decades resulted in thousands of accessions, spanning more than 40 different species.

{%
  include link.html
  link="tools"
  text="See a catalog of our germplasm"
  icon="fas fa-arrow-right"
  flip=true
%}
{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/germplasm_andy/camminare_noir.jpg"
  link="tools"
  title="Our germplasm resources"
  flip=true
  text=text
%}

{% capture text %}
We are a multidisciplinary team working towards the generation of high-quality grapes in CA.

{%
  include link.html
  link="team"
  text="Meet our team"
  icon="fas fa-arrow-right"
  flip=true
%}
{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/germplasm_andy/ambulo_blanc.jpg"
  link="team"
  title="Our Team"
  text=text
%}
