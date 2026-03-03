---
title: "std::experimental::ranges::IndirectlyComparable"
source_path: "cpp/experimental/ranges/iterator/IndirectlyComparable"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

## Declarations
```cpp
template< class I1, class I2, class R = ranges::equal_to<>,
class P1 = ranges::identity, class P2 = ranges::identity >
concept bool IndirectlyComparable =
IndirectRelation<R, ranges::projected<I1, P1>, ranges::projected<I2, P2>>;
```
_(ranges TS)_
