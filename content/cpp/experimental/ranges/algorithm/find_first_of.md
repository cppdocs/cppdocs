---
title: "std::experimental::ranges::find_first_of"
source_path: "cpp/experimental/ranges/algorithm/find_first_of"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

1) Searches the range [first1,last1) for any of the elements in the range [first2,last2), after projecting the ranges with proj1 and proj2 respectively. The projected elements are compared using pred.

## Declarations
```cpp
template< InputIterator I1, Sentinel<I1> S1, ForwardIterator I2, Sentinel<I2> S2,
class Proj1 = ranges::identity, class Proj2 = ranges::identity,
IndirectRelation<projected<I1, Proj1>,
projected<I2, Proj2>> Pred = ranges::equal_to<> >
I1 find_first_of( I1 first1, S1 last1, I2 first2, S2 last2, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
```
_(ranges TS)_

```cpp
template< InputRange R1, ForwardRange R2,
class Proj1 = ranges::identity, class Proj2 = ranges::identity,
IndirectRelation<projected<ranges::iterator_t<R1>, Proj1>,
projected<ranges::iterator_t<R2>, Proj2>> Pred = ranges::equal_to<> >
ranges::safe_iterator_t<R1> find_first_of( R1&& r1, R2&& r2, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
```
_(ranges TS)_

## Parameters
- `first1, last1`: the range of elements to examine
- `r1`: the range of elements to examine
- `first2, last2`: the range of elements to search for
- `r2`: the range of elements to search for
- `pred`: predicate to use to compare the projected elements with
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Return value
Iterator to the first element in the range [first1,last1) that is equal to an element from the range [first2,last2) after projection. If no such element is found, an iterator comparing equal to last1 is returned.

## Example
This section is incompleteReason: no example

## See also
- [find_first_of](/cpp/algorithm/find_first_of/)
- [findfind_iffind_if_not](/cpp/experimental/ranges/algorithm/find/)
