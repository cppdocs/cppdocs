---
title: "std::ranges::input_range"
source_path: "cpp/ranges/input_range"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The input_range concept is a refinement of [range](/cpp/ranges/range/) for which ranges::begin returns a model of [input_iterator](/cpp/iterator/input_iterator/).

## Declarations
```cpp
template< class T >
concept input_range =
ranges::range<T> && std::input_iterator<ranges::iterator_t<T>>;
```
_(since C++20)_
