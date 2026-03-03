---
title: "std::sortable"
source_path: "cpp/iterator/sortable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The sortable concept specifies the requirements for algorithms that permute a range into an ordered range according to Comp.

## Declarations
```cpp
template< class I, class Comp = ranges::less, class Proj = std::identity >
concept sortable =
std::permutable<I> &&
std::indirect_strict_weak_order<Comp, std::projected<I, Proj>>;
```
_(since C++20)_

## See also
- [ranges::sort](/cpp/algorithm/ranges/sort/)
- [ranges::stable_sort](/cpp/algorithm/ranges/stable_sort/)
- [ranges::partial_sort](/cpp/algorithm/ranges/partial_sort/)
- [ranges::nth_element](/cpp/algorithm/ranges/nth_element/)
- [ranges::inplace_merge](/cpp/algorithm/ranges/inplace_merge/)
- [ranges::push_heap](/cpp/algorithm/ranges/push_heap/)
- [ranges::pop_heap](/cpp/algorithm/ranges/pop_heap/)
- [ranges::make_heap](/cpp/algorithm/ranges/make_heap/)
- [ranges::sort_heap](/cpp/algorithm/ranges/sort_heap/)
- [ranges::next_permutation](/cpp/algorithm/ranges/next_permutation/)
- [ranges::prev_permutation](/cpp/algorithm/ranges/prev_permutation/)
