# vue-ramda
A wrapper for integrating [ramda](http://ramdajs.com/) to [Vuejs](http://vuejs.org)

## Why Ramda?

There are already several excellent libraries with a functional flavor. Typically, they are meant to be general-purpose toolkits, suitable for working in multiple paradigms. Ramda has a more focused goal. We wanted a library designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data. -- from ramdajs.com

## How to use it

```
npm install --save vue-ramda
```

Add to you main.js
```
import Vue from 'vue'
import VueRamda from 'vue-ramda'

Vue.use(VueRamda)
```

use it in `.vue` file:

```
this.$R.add(1, 2)
```

## Function List
[See ramda documentation](http://ramdajs.com/docs/)

## Licensing
MIT License
