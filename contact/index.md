---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---
{%- capture hero_content -%}
{%- include link.html type="email" icon="" text="diazgarcia@ucdavis.edu" tooltip="" link="diazgarcia@ucdavis.edu" style="button" -%}
{%- include link.html type="address" icon="" text="Google Maps" tooltip="Our location on Google Maps for easy navigation" link="https://goo.gl/maps/LTj9avFKvN63SdnJ9" style="button" -%}
{%- endcapture -%}

{% include section.html full=true %}

{% include hero.html image="images/mondavi.jpg" title="Contact Us" subtitle="The Diaz-Garcia lab is part of the Viticulture and Enology Department at UC Davis." content=hero_content %}

{% include section.html %}

{% capture col1 %}
{%
  include figure.html
  image="images/UC-Davis-aerial-water-tower.jpg"
  caption="The University of California - Davis"
%}
{% endcapture %}
{% capture col2 %}

### <i class="fas fa-mail-bulk"></i>Mailing Address

1136 Robert Mondavi Institute North<br>
595 Hilgard Lane, Davis, CA 95616-5270<br>
United States

{% endcapture %}
{% include two-col.html col1=col1 col2=col2 %}
