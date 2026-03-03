---
title: "std::experimental::ranges::search_n"
source_path: "cpp/experimental/ranges/algorithm/search_n"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

1) Searches the range [first,last) for the first sequence of count elements whose projected values are each equal to the given value value according to the predicate pred.

## Declarations
```cpp
template< ForwardIterator I, Sentinel<I> S, class T,
class Pred = ranges::equal_to<>, class Proj = ranges::identity >
requires IndirectlyComparable<I, const T*, Pred, Proj>
I search_n( I first, S last, ranges::difference_type_t<I> count,
const T& value, Pred pred = Pred{}, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< ForwardRange R, class T, class Pred = ranges::equal_to<>,
class Proj = ranges::identity >
requires IndirectlyComparable<ranges::iterator_t<R>, const T*, Pred, Proj>
ranges::safe_iterator_t<R> search_n( R&& r,
ranges::difference_type_t<ranges::iterator_t<R>> count,
const T& value, Pred pred = Pred{}, Proj proj = Proj{} );
```
_(ranges TS)_

## Parameters
- `first, last`: the range of elements to examine
- `r`: the range of elements to examine
- `count`: the length of the sequence to search for
- `value`: the value to search for
- `pred`: the predicate that compares the projected elements with value
- `proj`: the projection to apply to the elements

## Return value
Iterator to the beginning of the found sequence in the range [first,last). If no such sequence is found, an iterator that compares equal to last is returned.

## Example
This section is incompleteReason: no example

## See also
- [search_n](/cpp/algorithm/search_n/)
- [find_end](/cpp/experimental/ranges/algorithm/find_end/)
- [findfind_iffind_if_not](/cpp/experimental/ranges/algorithm/find/)
- [search](/cpp/experimental/ranges/algorithm/search/)
