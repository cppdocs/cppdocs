---
title: "std::experimental::ranges::adjacent_find"
source_path: "cpp/experimental/ranges/algorithm/adjacent_find"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

1) Searches the range [first,last) for two consecutive identical elements. Elements are compared using pred after being projected with proj.

## Declarations
```cpp
template< ForwardIterator I, Sentinel<I> S, class Proj = ranges::identity,
IndirectRelation<projected<I, Proj>> Pred = ranges::equal_to<> >
I adjacent_find( I first, S last, Pred pred = Pred{}, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< ForwardRange R, class Proj = ranges::identity,
IndirectRelation<projected<ranges::iterator_t<R>, Proj>> Pred = ranges::equal_to<> >
ranges::safe_iterator_t<R> adjacent_find( R&& r, Pred pred = Pred{}, Proj proj = Proj{} );
```
_(ranges TS)_

## Parameters
- `first, last`: the range of elements to examine
- `r`: the range of elements to examine
- `pred`: predicate to use to compare the projected elements
- `proj`: projection to apply to the elements

## Return value
An iterator to the first of the first pair of identical elements, that is, the first iterator i such that both i and i + 1 are in the range [first,last) and [ranges::invoke](/cpp/experimental/ranges/functional/invoke/)(pred, [ranges::invoke](/cpp/experimental/ranges/functional/invoke/)(proj, *i), [ranges::invoke](/cpp/experimental/ranges/functional/invoke/)(proj, *(i + 1))) != false.

## Example
This section is incompleteReason: no example

## See also
- [adjacent_find](/cpp/algorithm/adjacent_find/)
