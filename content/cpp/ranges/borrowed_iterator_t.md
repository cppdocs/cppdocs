---
title: "std::ranges::borrowed_iterator_t, std::ranges::borrowed_subrange_t"
source_path: "cpp/ranges/borrowed_iterator_t"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) std::[ranges::iterator_t](/cpp/ranges/iterator_t/)<R> if R models [borrowed_range](/cpp/ranges/borrowed_range/), [std::ranges::dangling](/cpp/ranges/dangling/) otherwise.

## Declarations
```cpp
template< ranges::range R >
using borrowed_iterator_t = /* see below */;
```
_(since C++20)_

```cpp
template< ranges::range R >
using borrowed_subrange_t = /* see below */;
```
_(since C++20)_

## See also
- [ranges::dangling](/cpp/ranges/dangling/)
