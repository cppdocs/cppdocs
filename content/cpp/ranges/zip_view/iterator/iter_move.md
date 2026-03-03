---
title: "iter_move(ranges::zip_view::iterator)"
source_path: "cpp/ranges/zip_view/iterator/iter_move"
category: "ranges"
since: "C++23"
---

Equivalent to: return /*tuple-transform*/([ranges::iter_move](/cpp/iterator/ranges/iter_move/), i.current_);, where [current_](/cpp/ranges/zip_view/iterator/#Data_members) denotes the underlying tuple-like object that holds iterators to elements of adapted views.

## Declarations
```cpp
friend constexpr auto iter_move( const iterator& i ) noexcept(/* see below */);
```
_(since C++23)_

## Parameters
- `i`: iterator

## Return value
std::move(*i) if *i is an lvalue reference, otherwise *i
