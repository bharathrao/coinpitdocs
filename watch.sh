#!/bin/sh
cd docs
fswatch -ro source | xargs -n1 make html
