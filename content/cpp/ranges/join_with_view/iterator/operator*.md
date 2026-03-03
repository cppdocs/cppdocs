---
title: "std::ranges::join_with_view<V,Pattern>::iterator<Const>::operator*"
source_path: "cpp/ranges/join_with_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Returns the current element in the joined view.

## Declarations
```cpp
constexpr decltype(auto) operator*() const;
```
_(since C++23)_

## Return value
[std::visit](/cpp/utility/variant/visit/)([](auto& it) -> /*reference*/ { return *it; },[inner_it_](/cpp/ranges/join_with_view/iterator/#inner_it) ﻿), where /*reference*/ is [ranges::common_reference_t](/cpp/experimental/ranges/type_traits/common_reference/)<[std::iter_reference_t](/cpp/iterator/iter_t/)<[InnerIter](/cpp/ranges/join_with_view/iterator/#InnerIter) ﻿>,[std::iter_reference_t](/cpp/iterator/iter_t/)<[PatternIter](/cpp/ranges/join_with_view/iterator/#PatternIter) ﻿>>.

## Example
This section is incompleteReason: no example
