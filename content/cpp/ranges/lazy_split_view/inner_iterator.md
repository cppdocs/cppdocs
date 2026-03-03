---
title: "std::ranges::lazy_split_view<V, Pattern>::inner_iterator"
source_path: "cpp/ranges/lazy_split_view/inner_iterator"
category: "ranges"
---

The return type of [lazy_split_view::](/cpp/ranges/lazy_split_view/value_type/)[outer_iterator](/cpp/ranges/lazy_split_view/outer_iterator/)::value_type::begin().

## Declarations
```cpp
template< bool Const >
struct /*inner_iterator*/;
```
_(since C++20) (exposition only*)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3591 | C++20 | the && overload of base might invalidate outer iterators | constraints added |
| LWG 3593 | C++20 | the const& overload of base returns a reference but might not be noexcept | made noexcept |
