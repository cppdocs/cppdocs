---
title: "C++ named requirements: RangeAdaptorObject (since C++20)"
source_path: "cpp/named_req/RangeAdaptorObject"
category: "named_req"
since: "C++20"
---

Range adaptor objects are customization point objects that accept [viewable_range](/cpp/ranges/viewable_range/) as their first arguments and return a [view](/cpp/ranges/view/). Some range adaptor objects are unary, i.e. they take one [viewable_range](/cpp/ranges/viewable_range/) as their only argument. Other range adaptor objects take a [viewable_range](/cpp/ranges/viewable_range/) and other trailing arguments.

## Notes
operator() is unsupported for volatile-qualified or const-volatile-qualified version of range adaptor object types. Arrays and functions are converted to pointers while binding.
