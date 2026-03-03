---
title: "std::experimental::ranges::equal"
source_path: "cpp/experimental/ranges/algorithm/equal"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

1) Returns true if the range [first1,last1) is equal to the range [first2,last2), and false otherwise.

## Declarations
```cpp
template< InputIterator I1, Sentinel<I1> S1, InputIterator I2, Sentinel<I2> S2,
class Pred = ranges::equal_to<>,
class Proj1 = ranges::identity, class Proj2 = ranges::identity >
requires IndirectlyComparable<I1, I2, Pred, Proj1, Proj2>
bool equal( I1 first1, S1 last1, I2 first2, S2 last2, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
```
_(ranges TS)_

```cpp
template< InputRange R1, InputRange R2, class Pred = ranges::equal_to<>,
class Proj1 = ranges::identity, class Proj2 = ranges::identity >
requires IndirectlyComparable<ranges::iterator_t<R1>, ranges::iterator_t<R2>,
Pred, Proj1, Proj2>
bool equal( R1&& r1, R2&& r2, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
```
_(ranges TS)_

```cpp
template< InputIterator I1, Sentinel<I1> S1, class I2,
class Pred = ranges::equal_to<>,
class Proj1 = ranges::identity, class Proj2 = ranges::identity >
requires InputIterator<std::decay_t<I2>> && !Range<I2> &&
IndirectlyComparable<I1, std::decay_t<I2>, Pred, Proj1, Proj2>
bool equal( I1 first1, S1 last1, I2&& first2_, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
```
_(ranges TS) (deprecated)_

```cpp
template< InputRange R1, class I2, class Pred = ranges::equal_to<>,
class Proj1 = ranges::identity, class Proj2 = ranges::identity >
requires InputIterator<std::decay_t<I2>> && !Range<I2> &&
IndirectlyComparable<ranges::iterator_t<R1>, std::decay_t<I2>, Pred, Proj1, Proj2>
bool equal( R1&& r1, I2&& first2_, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
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
true if the two ranges are equal, otherwise returns false.

## Notes
ranges::equal should not be used to compare the ranges formed by the iterators from [std::unordered_set](/cpp/container/unordered_set/), [std::unordered_multiset](/cpp/container/unordered_multiset/), [std::unordered_map](/cpp/container/unordered_map/), or [std::unordered_multimap](/cpp/container/unordered_multimap/) because the order in which the elements are stored in those containers may be different even if the two containers store the same elements.

When comparing entire containers for equality, operator== for the corresponding container are usually preferred.

## Example
This section is incompleteReason: no example

## See also
- [equal](/cpp/algorithm/equal/)
- [findfind_iffind_if_not](/cpp/experimental/ranges/algorithm/find/)
- [lexicographical_compare](/cpp/experimental/ranges/algorithm/lexicographical_compare/)
- [mismatch](/cpp/experimental/ranges/algorithm/mismatch/)
- [search](/cpp/experimental/ranges/algorithm/search/)
