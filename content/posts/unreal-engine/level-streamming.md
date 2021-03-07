---
title: "World Composition: Level loading/unloading"
date: 2021-02-27T06:00:23+06:00
hero: hero.jpg
description: How to know what and when levels are being loaded and unloaded
menu:
  sidebar:
    name: World Composition
    identifier: ue4-world-component
    parent: ue4
    weight: 40
---

## TLDR: What you will get from this post <code>:thinking:</code>

After reading this post, you should have a basic understanding of:
*  what is World Composition;
*  pros and cons of World Composition;
*  my solution to some of these problems;

## Basics: What is World Composition? 

To put it bluntly, World Composition is a system designed by Epic to manage large worlds: a system where you don't have to worry about the loading and unloading levels logic and let the streamming distance do its thing. It resolves around reading sub-level information directly from the file system, making it more optimized and taking the burden of all this logic from the programmer. 

With World Composition, you can achieve many great things regarding large areas, e.g., if you have a large heightmap, you can divide into **tiles** and upload them directly using World Composition - you only have to make sure the names are something like <mark>TileName_X0_Y0</mark>, <mark>TileName_X0_Y1</mark> and so on.
{{< vs 3 >}}

{{<img src="/posts/unreal-engine/tiled_heightmap_import.webp"  align="center"  title="Import Tiled Landscape by Epic Games" >}}

{{< vs 3 >}}

I won't go into more detail about *what is it* because this should be nothing new, if you've stumbled across this blog post, you've probably read all the [documentation](https://docs.unrealengine.com/en-US/BuildingWorlds/LevelStreaming/WorldBrowser/index.html) regarding this (even tho, it's not much). But, if it comes to it, I could do a more detailed post about how to tile a heightmap and configurations.

## Then where is the problem?

The moment you pass the "beginners" stage of World Composition (or any game related aspect) and actually want to built some logic that will depend on the loading and unloading of tiles... this is where we start facing our first set of problems. 

**How so?** You may ask, well... Imagine you want to integrate some time of data at run time - there's no way this data can be added to the tile on the editor and save it there, no you want to add *pure* dynmaic data that should not be "hard-coded" into the world. To make it more clear, imagine someone outside the game drew an area of interest (<mark>AOI</mark>) and now you want this area to be replicated into your game world and mapped directly on the landscape/tiles.

Okay, so with this example in mind, you may still ask? **Where exactly is the problem here?** Imagine this area covers more than one tile worth of game "area": will you have this area be drawn on tiles that have still not been loaded? It could be a solution but what if it's a truly **big** area that covers most of the game map except 2 or 3 tiles? 

I had similar problems before, I specifically needed to know when certain tiles would be loaded into memory so I could load the dynamic information that was to be placed there. Since I couldn't find any way for an Actor to know when a certain tile was loaded, I had to come up with something.

## My Approach: An Overview

The solution I came up with is very intertwined with what I was already working with: for every object I wanted to spawn on specific tiles, I knew exactly what those tiles' package names were.  

With this information, my solution is a little bit based on the **Observer Pattern** but with a slight difference. So, we have our interested object, **Subscriber** and what our **Subscriber** Actors want is to dump one or more tiles' names to somewhere and be notified when these were loaded and unloaded. First things to discuss is "Composition or Inheritance?" , which should we use? In my case, I opted for Composotion (*aka* ActorComponents) since, in this context, it is much more scalable and I can add it to already existing Actors without going through the pain of refactoring everything. 

Okay, Components, got it. Now we need to decided what exactly this component is gonna do and for that, let's just define what we need it to do:
  - receive the names of the tiles we are interested in
  - for each tile, bind to their loading and unloading
  - when one is loaded/unloaded, notify us and that notification must come with the tile's name 

Now we are ready to start implementing our component.
## My Approach: Implementation

Before anything else: I implemented it using Blueprints but it's also very possible to use C++ for this. Maybe, one day I will make another post with the C++ implementation, but for now, Blueprints will have to do. 

Now, we just have a small thing to remember: with levels names, we have access to a 4 events related to level streaming:

{{< vs 3 >}}

{{<img src="/posts/unreal-engine/levels-events.png"  align="center"  title="Event Dispatchers related to level streaming" >}}

{{< vs 3 >}}

But there's a little thing that makes this process a little bothersome: when we are interested in binding to multiple levels, we have no way of knowing which one of the levels actually loaded!

Naturally, the first thing we need to implement is for each tile the component's owner is interested in, we will bind to <kbd>On Level Shown</kbd> and <kbd>On Level Hidden</kbd>.

{{< vs 3 >}}

{{<img src="/posts/unreal-engine/bind-to-levels.png"  align="center"  title="Binding to levels" >}}

{{< vs 3 >}}

{{<img src="/posts/unreal-engine/bind-to-level-load.png"  align="center"  title="Binding to level load" >}}

{{< vs 3 >}}

{{<img src="/posts/unreal-engine/bind-to-level-unload.png"  align="center"  title="Binding to level unload" >}}

{{< vs 3 >}}

Additionally, we will also implement another function that receives a singular level/tile name and adds it to the component's **LevelList**.

{{< vs 3 >}}

{{<img src="/posts/unreal-engine/add-level.png"  align="center"  title="Adding level to list" >}}

{{< vs 3 >}}

Now, we will define two event dispatchers, one to notify the "owner" that a certain tile was loaded and the same for unloading - our events will have one input: a String with the level's name. To keep it simple, I'll name them **OnLevelLoaded** and **OnLevelUnloaded**.

{{< vs 3 >}}

{{<img src="/posts/unreal-engine/event-dispatchers.png"  align="center"  title="The event dispatchers" >}}

{{<img src="/posts/unreal-engine/dispatcher-details.png"  align="center"  title="The event dispatchers" >}}

{{< vs 3 >}}


Next, what do we do now? We have now bound ourselves to different streaming events but they all end up in the same function... It's time to figure out which level(s) notified us and for that we will need a new variable: **Active Levels**, an array of level names. sEvery time the component is notified of a level loading (function **OnLevelLoaded** is called), we will go through every level we are interested in and check if this one went from not-loaded/not-visible to loaded/visible. We do this by storing new active levels (new visible/loaded levels) in our **Active Levels** array and call **OnLevelLoaded** (input being the level name in question). If the current level (in the iteration) was already inserted to **Active Levels** we don't have to do anything. 

{{< vs 3 >}}

{{<img src="/posts/unreal-engine/on-level-loaded.png"  align="center"  title="On Level Loaded pt. 1" >}}

{{< vs 3 >}}

{{<img src="/posts/unreal-engine/on-level-loaded-2.png"  align="center"  title="On Level Loaded pt. 2" >}}

{{< vs 3 >}}

Now, we basically apply the same logic to **OnLevelUnloaded**


{{< vs 3 >}}

{{<img src="/posts/unreal-engine/on-level-unloaded.png"  align="center"  title="On Level UnLoaded pt. 1" >}}

{{< vs 3 >}}

{{<img src="/posts/unreal-engine/on-level-unloaded-2.png"  align="center"  title="On Level UnLoaded pt. 2" >}}

{{< vs 3 >}}

Now, all that's left to do is call the component's binding functions and bind to our two new event dispatchers.

{{< vs 3 >}}

{{<img src="/posts/unreal-engine/owner-binds.png"  align="center"  title="Owner calls binds" >}}

{{< vs 3 >}}


And voila! It's done!

## Ending Note

If anything is confusing or you think some parts of the implementation can be optimized, please do share!

