---
title: "std::ranges::output_range"
source_path: "cpp/ranges/output_range"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The output_range concept is a refinement of [range](/cpp/ranges/range/) for which ranges::begin returns a model of [output_iterator](/cpp/iterator/output_iterator/).

## Declarations
```cpp
template<class R, class T>
concept output_range =
ranges::range<R> && std::output_iterator<ranges::iterator_t<R>, T>;
```
_(since C++20)_
