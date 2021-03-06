<!-- $theme: default -->


# CJUG Mobile Framework Shootout

Glen Smith
[@glen_a_smith](http://twitter.com/glen_a_smith)
glen@bytecode.com.au


---

# Tonight's Big Goal

> Get a vibe for a bunch of frameworks

---

# I have one month's experience.

> So if you have experiences, please share!


---

# Tonight's story goes...

> "I need a mobile app by Friday! Release the chickens!"

---

# What are we talking about?

* [NativeScript](https://www.nativescript.org/) (native apps written in JavaScript - no WebView)
* [Ionic 2](http://ionicframework.com/) Hybrid Apps (web apps in a native bridge container)
* [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) (purely native Web applications)

---

# So... Angular All The Things!

* I love it and find it compelling for enterprise web
* All of these framework are Angular-centric
* I will be re-using the same* Angular src across all platforms

---

# What are we **not*** talking about? 
> Also cool, but not on the agenda

* "Pure" Native approaches
* [React Native](https://facebook.github.io/react-native/)
* [Xamarin](https://www.xamarin.com/)

---

# Spoiler Finding #1: These are *all* awesome options

> What you choose is really about your prefs.

---

# Spoiler Finding #2: These are *all* compromises on platform-specific code

> What you choose is also about features you need, and what you are into.

---


# Spoiler Finding #3: These are *all* within your realistic reach

> None of these are targetted for rock stars

---


# Voteamatic Redux
> Narative: Our [CJUG voting app](http://cjugaustralia.org/votamatic/) goes mobile

---

# Following along at home?
> Grab the [Source Code](https://github.com/glenasmith/cjug-mobile-2017) for this talk.

---

# Option 1

---

# NativeScript Native Apps
> Love Web Dev, but want Native UI and Libs

---

# Why NativeScript?
* No WebViews - all Native UI Widgets and Libs
* Performance is *close* to Native
* You **don't** want to maintain Swift and Kotlin codebases/skillsets.
* You **do** want to use native libs 
* You like [good documentation](https://docs.nativescript.org/angular/code-samples/ui/button.html)

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
* Emulators. Don't start me.
* Performance close to native, with some lag
* Still need a Mac for OSX builds

---

# Option 2

---

# Ionic 2 Hybrid Apps
> Web apps with Native Plugins

---

# Why Ionic?
* Single Source UI (CSS Magic per Platform)
* Lots of Cordova Plugins for Native Stuff
* Lots of Developers
* [Great docs](http://ionicframework.com/docs/v2/components/) / samples to learn from

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

# Option 3

---

# Progressive Web Apps
> If you love the Web

---

# Why PWA?
* Come for the website, stay for the app
* Launch & Notification integration to the Device
* Great offline experience (for developers too)
* New and shiny [documentation](https://developers.google.com/web/progressive-web-apps/)

---

# Game Changing Angle
* No app stores required (do they even work?)
* Your app will turn up in search results (as an app)
* There is no "redirect to app store" angle - you're here already

---

# Tech in Play
* Manifest file for icon, splash, permissions
* ServiceWorker for heavy proxy lifting, offline support
* HTML5 for the rest (IndexedDb, etc)

---

# ProgVoter Demo

---

# Drawbacks
* Chrome support only (Cordova iOS Shims)
* Broad interest (Microsoft Universal, Firefox, Apple)
* Not all native service available
* Immature toolstack

---


# So where does that leave us?
> Web, Hybrid or Native?

---

# Finding #1: These are *all* awesome options

> What you choose is really about your prefs

---

# Finding #2: These are *all* compromises on platform-specific code

> What you choose is also about features you need (NFC?)

---


# Finding #3: These are *all* within your realistic reach

> None of these are targetted for rock stars

---

# Thoughts?
> We would love to here your experiences! 
> (you might even want to give a talk :-) 

