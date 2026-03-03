---
title: "std::ranges::filter_view<V,Pred>::iterator"
source_path: "cpp/ranges/filter_view/iterator"
category: "ranges"
---

The return type of [filter_view::begin](/cpp/ranges/filter_view/).

## Declarations
```cpp
class /*iterator*/;
```
_(since C++20) (exposition only*)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2259R1 | C++20 | member type iterator_category was always defined | defined only if V is a forward_range |
| LWG 3533 | C++20 | the const& overload of base copied the underlying iterator | returns a reference to it |
| LWG 3593 | C++20 | the const& overload of base might not be noexcept | made noexcept |
