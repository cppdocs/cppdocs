---
title: "iter_move(ranges::join_with_view::iterator)"
source_path: "cpp/ranges/join_with_view/iterator/iter_move"
category: "ranges"
since: "C++23"
---

Returns the result of applying [ranges::iter_move](/cpp/iterator/ranges/iter_move/) to the [inner iterator](/cpp/ranges/join_with_view/iterator/).

## Declarations
```cpp
friend constexpr decltype(auto) iter_move( const /*iterator*/& i );
```
_(since C++23)_

## Parameters
- `i`: iterator

## Return value
[std::visit](/cpp/utility/variant/visit/)<rvalue_reference>([ranges::iter_move](/cpp/iterator/ranges/iter_move/), x.[inner_it_](/cpp/ranges/join_with_view/iterator/#inner_it)), where rvalue_reference is [std::common_reference_t](/cpp/types/common_reference/)<[ranges::range_rvalue_reference_t](/cpp/ranges/range_reference_t/)<[InnerBase](/cpp/ranges/join_with_view/iterator/#InnerBase) ﻿>,[ranges::range_rvalue_reference_t](/cpp/ranges/range_reference_t/)<[PatternBase](/cpp/ranges/join_with_view/iterator/#PatternBase) ﻿>>.

## See also
- [iter_move](/cpp/iterator/ranges/iter_move/)
