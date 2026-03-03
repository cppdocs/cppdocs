---
title: "std::ranges::join_view<V>::sentinel"
source_path: "cpp/ranges/join_view/sentinel"
category: "ranges"
---

The return type of [join_view::end](/cpp/ranges/join_view/end/) when either of the underlying ranges (V or [ranges::range_reference_t](/cpp/ranges/range_reference_t/)<V>) is not a [common_range](/cpp/ranges/common_range/), or when the parent join_view is not a [forward_range](/cpp/ranges/forward_range/).

## Declarations
```cpp
template< bool Const >
class /*sentinel*/
```
_(since C++20) (exposition only*)_
