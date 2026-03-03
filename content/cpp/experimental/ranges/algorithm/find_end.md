---
title: "std::experimental::ranges::find_end"
source_path: "cpp/experimental/ranges/algorithm/find_end"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

1) Searches for the last occurrence of the sequence [first2,last2) in the range [first1,last1) (after projection with proj).

## Declarations
```cpp
template< ForwardIterator I1, Sentinel<I1> S1, ForwardIterator I2, Sentinel<I2> S2,
class Proj = ranges::identity,
IndirectRelation<I2, projected<I1, Proj>> Pred = ranges::equal_to<> >
I1 find_end( I1 first1, S1 last1, I2 first2, S2 last2,
Pred pred = Pred{}, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< ForwardRange R1, ForwardRange R2, class Proj = ranges::identity,
IndirectRelation<ranges::iterator_t<R2>,
projected<ranges::iterator_t<R1>, Proj>> Pred = ranges::equal_to<> >
ranges::safe_iterator_t<R1> find_end( Rng1&& rng1, Rng2&& rng2,
Pred pred = Pred{}, Proj proj = Proj{} );
```
_(ranges TS)_

## Parameters
- `first1, last1`: the range of elements to examine
- `r1`: the range of elements to examine
- `first2, last2`: the range of elements to search for
- `r2`: the range of elements to search for
- `pred`: predicate to compare the elements
- `proj`: projection to apply to the elements in the first range

## Return value
Iterator to the beginning of last occurrence of the sequence [first2,last2) in range [first1,last1) (after projection with proj).

## Notes
The projection is only applied to the range [first1,last1).

## Example
This section is incompleteReason: no example

## See also
- [find_end](/cpp/algorithm/find_end/)
- [search](/cpp/experimental/ranges/algorithm/search/)
- [adjacent_find](/cpp/experimental/ranges/algorithm/adjacent_find/)
- [findfind_iffind_if_not](/cpp/experimental/ranges/algorithm/find/)
- [find_first_of](/cpp/experimental/ranges/algorithm/find_first_of/)
- [search_n](/cpp/experimental/ranges/algorithm/search_n/)
