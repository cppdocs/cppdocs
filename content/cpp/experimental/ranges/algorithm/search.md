---
title: "std::experimental::ranges::search"
source_path: "cpp/experimental/ranges/algorithm/search"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

1) Searches for the first occurrence of the sequence of elements [first2,last2) in the range [first1,last1). Elements are compared using pred after being projected with proj2 and proj1, respectively.

## Declarations
```cpp
template< ForwardIterator I1, Sentinel<I1> S1,
ForwardIterator I2, Sentinel<I2> S2, class Pred = ranges::equal_to<>,
class Proj1 = ranges::identity, class Proj2 = ranges::identity >
requires IndirectlyComparable<I1, I2, Pred, Proj1, Proj2>
I1 search( I1 first1, S1 last1, I2 first2, S2 last2,
Pred pred = Pred{}, Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
```
_(ranges TS)_

```cpp
template< ForwardRange R1, ForwardRange R2, class Pred = ranges::equal_to<>,
class Proj1 = ranges::identity, class Proj2 = ranges::identity >
requires IndirectlyComparable<ranges::iterator_t<R1>, ranges::iterator_t<R2>,
Pred, Proj1, Proj2>
ranges::safe_iterator_t<R1> search( R1&& r1, R2&& r2, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
```
_(ranges TS)_

## Parameters
- `first1, last1`: the range of elements to examine
- `r1`: the range of elements to examine
- `first2, last2`: the range of elements to search for
- `r2`: the range of elements to search for
- `pred`: predicate to apply to the projected elements
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Return value
An iterator to the beginning of first occurrence of the sequence [first2,last2) in the range [first1,last1). If [first2,last2) is empty, first1 is returned. If no such occurrence is found, an iterator that compares equal to last1 is returned.

## Example
This section is incompleteReason: no example

## See also
- [search](/cpp/algorithm/search/)
- [find_end](/cpp/experimental/ranges/algorithm/find_end/)
- [equal](/cpp/experimental/ranges/algorithm/equal/)
- [findfind_iffind_if_not](/cpp/experimental/ranges/algorithm/find/)
- [lexicographical_compare](/cpp/experimental/ranges/algorithm/lexicographical_compare/)
- [mismatch](/cpp/experimental/ranges/algorithm/mismatch/)
- [search_n](/cpp/experimental/ranges/algorithm/search_n/)
