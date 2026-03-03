---
title: "std::experimental::ranges::count, std::experimental::ranges::count_if"
source_path: "cpp/experimental/ranges/algorithm/count"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

Returns the number of elements in the range [first,last) satisfying specific criteria.

## Declarations
```cpp
template< InputIterator I, Sentinel<I> S, class T, class Proj = ranges::identity >
requires IndirectRelation<ranges::equal_to<>, projected<I, Proj>, const T*>
ranges::difference_type_t<I> count( I first, S last, const T& value, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputRange R, class T, class Proj = ranges::identity >
requires IndirectRelation<ranges::equal_to<>,
projected<ranges::iterator_t<R>, Proj>, const T*>
ranges::difference_type_t<ranges::iterator_t<R>>
count( R&& r, const T& value, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputIterator I, Sentinel<I> S, class Proj = ranges::identity,
IndirectUnaryPredicate<projected<I, Proj>> Pred >
ranges::difference_type_t<I> count_if( I first, S last, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputRange R, class Proj = ranges::identity,
IndirectUnaryPredicate<projected<ranges::iterator_t<R>, Proj>> Pred >
ranges::difference_type_t<ranges::iterator_t<R>>
count_if( R&& r, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

## Parameters
- `first, last`: the range of elements to examine
- `r`: the range of elements to examine
- `value`: the value to search for
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
Number of elements satisfying the condition.

## Notes
For the number of elements in the range [first,last) without any additional criteria, see [ranges::distance](/cpp/iterator/ranges/distance/).

## Example
This section is incompleteReason: no example

## See also
- [countcount_if](/cpp/algorithm/count/)
- [distance](/cpp/experimental/ranges/iterator/distance/)
