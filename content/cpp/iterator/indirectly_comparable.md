---
title: "std::indirectly_comparable"
source_path: "cpp/iterator/indirectly_comparable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The concept indirectly_comparable specifies the fundamental algorithm requirement for comparing values across two independent ranges.

## Declarations
```cpp
template< class I1, class I2, class Comp,
class Proj1 = std::identity, class Proj2 = std::identity >
concept indirectly_comparable =
std::indirect_binary_predicate<Comp, std::projected<I1, Proj1>, std::projected<I2, Proj2>>;
```
_(since C++20)_

## See also
- [indirect_binary_predicate](/cpp/iterator/indirect_binary_predicate/)
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
- [predicate](/cpp/concepts/predicate/)
