---
title: "std::ranges::join_view<V>::iterator"
source_path: "cpp/ranges/join_view/iterator"
category: "ranges"
---

The return type of [join_view::begin](/cpp/ranges/join_view/begin/), and of [join_view::end](/cpp/ranges/join_view/end/) when both the outer range V and the inner range [ranges::range_reference_t](/cpp/ranges/range_reference_t/)<V> satisfy [common_range](/cpp/ranges/common_range/) and the parent join_view is a [forward_range](/cpp/ranges/forward_range/).

## Declarations
```cpp
template< bool Const >
class /*iterator*/
```
_(since C++20) (exposition only*)_
