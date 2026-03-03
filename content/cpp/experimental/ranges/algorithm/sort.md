---
title: "std::experimental::ranges::sort"
source_path: "cpp/experimental/ranges/algorithm/sort"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

1) Sorts the elements in the range [first,last) in ascending order. The order of equal elements is not guaranteed to be preserved. Elements are compared using comp after applying the projection proj.

## Declarations
```cpp
template< RandomAccessIterator I, Sentinel<I> S,
class Comp = ranges::less<>, class Proj = ranges::identity >
requires Sortable<I, Comp, Proj>
I sort( I first, S last, Comp comp = Comp{}, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< RandomAccessRange R,
class Comp = ranges::less<>, class Proj = ranges::identity >
requires Sortable<ranges::iterator_t<R>, Comp, Proj>
ranges::safe_iterator_t<R> sort( R&& r, Comp comp = Comp{}, Proj proj = Proj{} );
```
_(ranges TS)_

## Parameters
- `first, last`: the range of elements to sort
- `r`: the range of elements to sort
- `comp`: the comparator to use
- `proj`: the projection to apply to elements in the range

## Return value
An iterator pointing past the end of the range (i.e., it compares equal to last for overload (1), and ranges::end(r) for overload (2)).

## Example
This section is incompleteReason: no example

## See also
- [sort](/cpp/algorithm/sort/)
