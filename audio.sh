#!/bin/sh
browserify -t brfs audio.js > public/bundle.js;
gulp uglify-js;