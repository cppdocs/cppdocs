---
title: "C++ named requirements: RandomNumberDistribution (since C++11)"
source_path: "cpp/named_req/RandomNumberDistribution"
category: "named_req"
since: "C++11"
---

A RandomNumberDistribution is a function object returning random numbers according to a [probability density function](https://en.wikipedia.org/wiki/Probability_density_function) p(x) or a [discrete probability distribution](https://en.wikipedia.org/wiki/Discrete_probability_distribution) P(xi).

## Notes
The parameters of a distribution object may be changed either permanently, by using d.param(p) or just for the duration of a single operator() call, by using d(g,p).

Calls to const member functions of the distribution and os << d do not affect the sequence of numbers produced by repeated d(g).
