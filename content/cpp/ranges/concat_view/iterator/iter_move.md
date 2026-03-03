---
title: "iter_move(ranges::concat_view::iterator)"
source_path: "cpp/ranges/concat_view/iterator/iter_move"
category: "ranges"
since: "C++26"
---

Returns the result of applying [ranges::iter_move](/cpp/iterator/ranges/iter_move/) to the underlying iterator contained in [it_](/cpp/ranges/concat_view/iterator/#it) ﻿.

## Declarations
```cpp
friend constexpr decltype(auto)
iter_move( const /*iterator*/& it ) noexcept(/* see description */);
```
_(since C++26)_

## Parameters
- `it`: iterator

## Return value
The result of applying [ranges::iter_move](/cpp/iterator/ranges/iter_move/) to the underlying iterator.
