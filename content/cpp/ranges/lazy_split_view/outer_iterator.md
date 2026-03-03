---
title: "std::ranges::lazy_split_view<V, Pattern>::outer_iterator"
source_path: "cpp/ranges/lazy_split_view/outer_iterator"
category: "ranges"
---

The return type of [lazy_split_view::begin](/cpp/ranges/lazy_split_view/begin/), and of [lazy_split_view::end](/cpp/ranges/lazy_split_view/end/) when the underlying view is a [common_range](/cpp/ranges/common_range/) and [forward_range](/cpp/ranges/forward_range/).

## Declarations
```cpp
template< bool Const >
struct /*outer_iterator*/;
```
_(since C++20) (exposition only*)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3904 | C++20 | trailing_empty_ was not initialized in constructor (4) | initialized |
