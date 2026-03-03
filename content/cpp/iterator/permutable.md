---
title: "std::permutable"
source_path: "cpp/iterator/permutable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The concept permutable refines [std::forward_iterator](/cpp/iterator/forward_iterator/) by adding requirements for reordering through moves and swaps.

## Declarations
```cpp
template< class I >
concept permutable =
std::forward_iterator<I> &&
std::indirectly_movable_storable<I, I> &&
std::indirectly_swappable<I, I>;
```
_(since C++20)_

## See also
- [sortable](/cpp/iterator/sortable/)
- [ranges::removeranges::remove_if](/cpp/algorithm/ranges/remove/)
- [ranges::unique](/cpp/algorithm/ranges/unique/)
- [ranges::reverse](/cpp/algorithm/ranges/reverse/)
- [ranges::rotate](/cpp/algorithm/ranges/rotate/)
- [ranges::shuffle](/cpp/algorithm/ranges/shuffle/)
- [ranges::partition](/cpp/algorithm/ranges/partition/)
- [ranges::stable_partition](/cpp/algorithm/ranges/stable_partition/)
