---
title: "std::experimental::ranges::mismatch"
source_path: "cpp/experimental/ranges/algorithm/mismatch"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

1) Returns the first mismatching pair of elements from two ranges: one defined by [first1,last1) and another defined by [first2,last2).

## Declarations
```cpp
template< InputIterator I1, Sentinel<I1> S1, InputIterator I2, Sentinel<I2> S2,
class Proj1 = ranges::identity, class Proj2 = ranges::identity,
class Pred = ranges::equal_to<> >
requires IndirectRelation<Pred, projected<I1, Proj1>, projected<I2, Proj2>>
auto mismatch( I1 first1, S1 last1, I2 first2, S2 last2, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} )
-> ranges::tagged_pair<tag::in1(I1), tag::in2(I2)>;
```
_(ranges TS)_

```cpp
template< InputRange R1, InputRange R2,
class Proj1 = ranges::identity, class Proj2 = ranges::identity,
class Pred = ranges::equal_to<> >
requires IndirectRelation<Pred, projected<ranges::iterator_t<R1>, Proj1>,
projected<ranges::iterator_t<R2>, Proj2>>
auto mismatch( R1&& r1, R2&& r2, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} )
-> ranges::tagged_pair<tag::in1(ranges::safe_iterator_t<R1>),
tag::in2(ranges::safe_iterator_t<R2>)>;
```
_(ranges TS)_

```cpp
template< InputIterator I1, Sentinel<I1> S1, class I2,
class Pred = ranges::equal_to<>,
class Proj1 = ranges::identity, class Proj2 = ranges::identity >
requires InputIterator<std::decay_t<I2>> && !Range<I2> &&
IndirectRelation<Pred, projected<I1, Proj1>,
projected<std::decay_t<I2>, Proj2>>
auto mismatch( I1 first1, S1 last1, I2&& first2_, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} )
-> ranges::tagged_pair<tag::in1(I1), tag::in2(std::decay_t<I2>)>;
```
_(ranges TS) (deprecated)_

```cpp
template< InputRange R1, class I2, class Pred = ranges::equal_to<>,
class Proj1 = ranges::identity, class Proj2 = ranges::identity >
requires InputIterator<std::decay_t<I2>> && !Range<I2> &&
IndirectRelation<Pred, projected<ranges::iterator_t<R1>, Proj1>,
projected<std::decay_t<I2>, Proj2>>
auto mismatch( R1&& r1, I2&& first2_, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} )
-> ranges::tagged_pair<tag::in1(ranges::safe_iterator_t<Rng1>),
tag::in2(std::decay_t<I2>)>;
```
_(ranges TS) (deprecated)_

## Parameters
- `first1, last1`: the first range of the elements
- `r1`: the first range of the elements
- `first2, last2`: the second range of the elements
- `r2`: the second range of the elements
- `first2_`: the beginning of the second range of the elements
- `pred`: predicate to apply to the projected elements
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Return value
A tagged_pair object with iterators to the first two non-equal elements (the iterator from the first range has the tag in1 and the iterator from the second range has the tag in2).

## Example
This section is incompleteReason: no example

## See also
- [mismatch](/cpp/algorithm/mismatch/)
- [equal](/cpp/experimental/ranges/algorithm/equal/)
- [findfind_iffind_if_not](/cpp/experimental/ranges/algorithm/find/)
- [lexicographical_compare](/cpp/experimental/ranges/algorithm/lexicographical_compare/)
- [search](/cpp/experimental/ranges/algorithm/search/)
