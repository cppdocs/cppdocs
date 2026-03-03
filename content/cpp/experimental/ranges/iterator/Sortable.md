---
title: "std::experimental::ranges::Sortable"
source_path: "cpp/experimental/ranges/iterator/Sortable"
category: "experimental"
---

The Sortable concept specifies the common requirements of algorithms that permute sequences into ordered sequences (for example, [ranges::sort](/cpp/experimental/ranges/algorithm/sort/)).

## Declarations
```cpp
template< class I, class R = ranges::less<>, class P = ranges::identity >
concept bool Sortable =
Permutable<I> &&
IndirectStrictWeakOrder<R, ranges::projected<I, P>>;
```
_(ranges TS)_
