---
title: "std::ranges::transform_view<V,F>::iterator"
source_path: "cpp/ranges/transform_view/iterator"
category: "ranges"
---

The return type of [transform_view::begin](/cpp/ranges/transform_view/begin/), and of [transform_view::end](/cpp/ranges/transform_view/end/) when the underlying view is a [common_range](/cpp/ranges/common_range/).

## Declarations
```cpp
template< bool Const >
class /*iterator*/
```
_(since C++20) (exposition only*)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2259R1 | C++20 | member iterator_category is always defined | defined only if Base models forward_range |
| LWG 3555 | C++20 | the definition of iterator_concept ignores const | made to consider |
| LWG 3798 | C++20 | iterator_category is input-only if transformation result is rvalue reference | may have a stronger category |
