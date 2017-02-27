<!-- $theme: default -->


# CJUG Mobile Framework Shootout

Glen Smith
[@glen_a_smith](http://twitter.com/glen_a_smith)
glen@bytecode.com.au


---

# What are we talking about?

* [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) (purely native Web applications)
* [Ionic 2](http://ionicframework.com/) Hybrid Apps (web apps in a native bridge container)
* [NativeScript](https://www.nativescript.org/) (native apps written in JavaScript - no WebView)

---

# Finding #1: These are *all* awesome options

> What you choose is really about your prefs

---

# Finding #2: These are *all* compromises on platform-specific code

> What you choose is also about features you need

---

# Angular All The Things!

* I love it and find it compelling for enterprise web
* All of these framework love Angular
* I will be re-using the same Angular src across all platforms

---

# Voteamatic Redux
> Our CJUG voting app goes mobile

---

_Screenshot of Web Votamatic goes here_

---

_Wireframe of what we're building_


---


# Progressive Web Apps
> If you love the Web

---

# Why PWA?
* Come for the website, stay for the app
* Launch & Notification integration to the Device
* Great offline experience (for developers too)

---

# Game Changing Angle
* No app stores required (do they even work?)
* Your app will turn up in search results (as an app)
* There is no "redirect to app store" angle - you're here already

---

# Tech in Play
* Manifest file for icon, splash, permissions
* ServiceWorker for heavy proxy lifting

---

# ProgVoter Demo

---

# Drawbacks
* Chrome support only (Cordova iOS Shims)
* Broad interest (Microsoft Universal, Firefox, Apple)
* Not all native service available
* Immature toolstack


---

# Ionic 2 Hybrid Apps
> Web apps with Native Plugins

---

# Why Ionic?
* Single Source UI (CSS Magic per Platform)
* Lots of Cordova Plugins for Native Stuff
* Lots of Developers
* Great docs / samples to learn from

---


# Game Changing Angle
* Test in the Browser without an emulator
* Easy deploy to devices (without AppStore)
* Cloud Build Service (No Mac Required)
* Easy to Learn: Angular all the things
* Tons of third party content

---

# HybridVoter Demo

---

# Drawbacks
* Trail native features (since it's a swing-like emulation)
* Performance issues if you're not careful
* At mercy of Cordova reliability (+ browser goes away)
* Not based on Angular CLI

---

# NativeScript Native Apps
> Love JS, but want Native UI and Libs

---

# Why NativeScript?
* No WebViews - all Native UI Widgets and Libs
* Performance is *close* to Native
* Don't want to maintain Swift and Kotlin codebases/skillsets.

---

# Tech In Play

* Compile time dynamic generation of proxy code
* Lots of reflection with callsite optimisation 

---

# Game Changing Angle
* Re-use your Angular code in a Native app (view layer native)
* Augment your app with whatever Native libs you want
* Tons of plugins (that are easy to inspect)
* Performance and feel is Native

---

# NativeVoter Demo

---

# Drawbacks
* Have to learn a new UI layer and Widget set
* Performance close to native, with some lag
* Still need a Mac for OSX builds

---

# So where does that leave us?
> Web, Hybrid or Native?

---

# Finding #1: These are *all* awesome options

> What you choose is really about your prefs

---

# Finding #2: These are *all* compromises on platform-specific code

> What you choose is also about features you need

---

# Thoughts?

