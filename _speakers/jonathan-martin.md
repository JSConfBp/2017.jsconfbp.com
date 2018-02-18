---
layout: speaker
order: 14
title: Async patterns to scale your multicore JavaScript… elegantly.
image: /assets/speakers/jonathan.jpg
name: Jonathan Martin
twitter: nybblr
github: nybblr
from: Mobile, USA
company: Big Nerd Ranch
decor: 3

social_card:
    twitter_card_type: summary_large_image
    description: Session by Jonathan Martin
    image: /assets/social-cards/speaker-jonathan.jpg
---


<div class="speaker-youtube">
    <iframe src="https://www.youtube.com/embed/726eZyVtC0Y?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

“JavaScript is a toy language because it doesn’t support multithreading.” Heard that one before? Although the event loop means our program does one thing at a time, JavaScript is actually well-suited for a plethora of concurrency problems while avoiding typical multithreading woes. You might say JavaScript is single-threaded… just so it can be multithreaded!

Using functional programming techniques with Async IIFEs, Web Worker clusters and SharedArrayBuffers, you can elegantly architecture highly concurrent multicore web apps and backends… without spaghetti.