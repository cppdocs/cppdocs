---
title: "std::ranges::elements_view<V,N>::iterator"
source_path: "cpp/ranges/elements_view/iterator"
category: "ranges"
---

The return type of [elements_view::begin](/cpp/ranges/elements_view/begin/), and of [elements_view::end](/cpp/ranges/elements_view/end/) when the underlying view is a [common_range](/cpp/ranges/common_range/).

## Declarations
```cpp
template< bool Const >
class /*iterator*/;
```
_(exposition only*)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2259R1 | C++20 | member iterator_category is always defined | defined only if Base models forward_range |
| LWG 3555 | C++20 | the definition of iterator_concept ignores const | made to consider |

## See also
- [iterator](/cpp/ranges/transform_view/iterator/)
- [common_range](/cpp/ranges/common_range/)
