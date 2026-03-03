---
title: "iter_move(ranges::transform_view::iterator)"
source_path: "cpp/ranges/transform_view/iterator/iter_move"
category: "ranges"
since: "C++20"
---

If *i is an lvalue reference, returns [std::move](/cpp/utility/move/)(*i); otherwise returns *i.

## Declarations
```cpp
friend constexpr decltype(auto) iter_move( const /*iterator*/& i )
noexcept(/* see below */);
```
_(since C++20)_

## Parameters
- `i`: iterator

## Return value
std::move(*i) if *i is an lvalue reference, otherwise *i
