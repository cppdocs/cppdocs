---
title: "std::experimental::ranges::lexicographical_compare"
source_path: "cpp/experimental/ranges/algorithm/lexicographical_compare"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

1) Checks if the first range [first1,last1) is lexicographically less than the second range [first2,last2). Elements are compared using the given binary comparison function comp, after being projected with proj1 and proj2 respectively.

## Declarations
```cpp
template< InputIterator I1, Sentinel<I1> S1, InputIterator I2, Sentinel<I2> S2,
class Proj1 = ranges::identity, class Proj2 = ranges::identity,
class Comp = ranges::less<> >
requires IndirectStrictWeakOrder<Comp, projected<I1, Proj1>, projected<I2, Proj2>>
bool lexicographical_compare( I1 first1, S1 last1, I2 first2, S2 last2,
Comp comp = Comp{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
```
_(ranges TS)_

```cpp
template< InputRange R1, InputRange R2,
class Proj1 = ranges::identity, class Proj2 = ranges::identity,
class Comp = ranges::less<> >
requires IndirectStrictWeakOrder<Comp, projected<ranges::iterator_t<R1>, Proj1>,
projected<ranges::iterator_t<R2>, Proj2>>
bool lexicographical_compare( R1&& r1, R2&& r2, Comp comp = Comp{},
Proj1 proj1 = Proj1{}, Proj2 proj2 = Proj2{} );
```
_(ranges TS)_

## Parameters
- `first1, last1`: the first range of elements to examine
- `r1`: the first range of elements to examine
- `first2, last2`: the second range of elements to examine
- `r2`: the second range of elements to examine
- `comp`: comparison function to apply to the projected elements
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Return value
true if the first range is lexicographically less than the second.

## Example
This section is incompleteReason: no example

## See also
- [lexicographical_compare](/cpp/algorithm/lexicographical_compare/)
- [equal](/cpp/experimental/ranges/algorithm/equal/)
