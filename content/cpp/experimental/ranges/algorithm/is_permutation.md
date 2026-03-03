---
title: "std::experimental::ranges::is_permutation"
source_path: "cpp/experimental/ranges/algorithm/is_permutation"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

1) Returns true if there exists a permutation of the elements in range [first1,last1) that makes the range equal to [first2,last2), and false otherwise.

## Declarations
```cpp
template< ForwardIterator I1, Sentinel<I1> S1, ForwardIterator I2, Sentinel<I2> S2,
class Pred = ranges::equal_to<>,
class Proj1 = ranges::identity, class Proj2 = ranges::identity >
requires IndirectlyComparable<I1, I2, Pred, Proj1, Proj2>
bool is_permutation( I1 first1, S1 last1, I2 first2, S2 last2, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
```
_(ranges TS)_

```cpp
template< ForwardRange R1, ForwardRange R2, class Pred = ranges::equal_to<>,
class Proj1 = ranges::identity, class Proj2 = ranges::identity >
requires IndirectlyComparable<ranges::iterator_t<R1>, ranges::iterator_t<R2>,
Pred, Proj1, Proj2>
bool is_permutation( R1&& r1, R2&& r2, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
```
_(ranges TS)_

```cpp
template< ForwardIterator I1, Sentinel<I1> S1, class I2,
class Pred = ranges::equal_to<>,
class Proj1 = ranges::identity, class Proj2 = ranges::identity >
requires ForwardIterator<std::decay_t<I2>> && !Range<I2> &&
IndirectlyComparable<I1, std::decay_t<I2>, Pred, Proj1, Proj2>
bool is_permutation( I1 first1, S1 last1, I2&& first2_, Pred pred = Pred{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
```
_(ranges TS) (deprecated)_

```cpp
template< ForwardRange R1, class I2, class Pred = ranges::equal_to<>,
class Proj1 = ranges::identity, class Proj2 = ranges::identity >
requires ForwardIterator<std::decay_t<I2>> && !Range<I2> &&
IndirectlyComparable<ranges::iterator_t<R1>, std::decay_t<I2>, Pred, Proj1, Proj2>
bool is_permutation( R1&& r1, I2&& first2_, Pred pred = Pred{},
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
true if the range [first1,last1) is a permutation of the range [first2,last2).

## Example
This section is incompleteReason: no example

## See also
- [is_permutation](/cpp/algorithm/is_permutation/)
