---
title: "std::mergeable"
source_path: "cpp/iterator/mergeable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The mergeable concept specifies the requirements for algorithms that merge two input ranges into a single output range according to the strict weak ordering imposed by Comp.

## Declarations
```cpp
template< class I1, class I2, class Out, class Comp = ranges::less,
class Proj1 = std::identity, class Proj2 = std::identity >
concept mergeable =
std::input_iterator<I1> &&
std::input_iterator<I2> &&
std::weakly_incrementable<Out> &&
std::indirectly_copyable<I1, Out> &&
std::indirectly_copyable<I2, Out> &&
std::indirect_strict_weak_order<Comp,
std::projected<I1, Proj1>,
std::projected<I2, Proj2>>;
```
_(since C++20)_

## See also
- [ranges::merge](/cpp/algorithm/ranges/merge/)
- [ranges::set_union](/cpp/algorithm/ranges/set_union/)
- [ranges::set_intersection](/cpp/algorithm/ranges/set_intersection/)
- [ranges::set_difference](/cpp/algorithm/ranges/set_difference/)
- [ranges::set_symmetric_difference](/cpp/algorithm/ranges/set_symmetric_difference/)
