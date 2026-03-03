---
title: "std::experimental::ranges::find, std::experimental::ranges::find_if, std::experimental::ranges::find_if_not"
source_path: "cpp/experimental/ranges/algorithm/find"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

Returns the first element in the range [first,last) that satisfies specific criteria:

## Declarations
```cpp
template< InputIterator I, Sentinel<I> S, class T, class Proj = ranges::identity >
requires IndirectRelation<ranges::equal_to<>, projected<I, Proj>, const T*>
I find( I first, S last, const T& value, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputRange R, class T, class Proj = ranges::identity >
requires IndirectRelation<ranges::equal_to<>,
projected<ranges::iterator_t<R>, Proj>, const T*>
ranges::safe_iterator_t<R> find( R&& r, const T& value, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputIterator I, Sentinel<I> S, class Proj = ranges::identity,
IndirectUnaryPredicate<projected<I, Proj>> Pred >
I find_if( I first, S last, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputRange R, class Proj = ranges::identity,
IndirectUnaryPredicate<projected<ranges::iterator_t<R>, Proj>> Pred >
ranges::safe_iterator_t<R> find_if( R&& r, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputIterator I, Sentinel<I> S, class Proj = ranges::identity,
IndirectUnaryPredicate<projected<I, Proj>> Pred >
I find_if_not( I first, S last, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputRange R, class Proj = ranges::identity,
IndirectUnaryPredicate<projected<ranges::iterator_t<R>, Proj>> Pred >
ranges::safe_iterator_t<R> find_if_not( R&& r, Pred pred, Proj proj = Proj{} );
```
_(ranges TS)_

## Parameters
- `first, last`: the range of elements to examine
- `r`: the range of elements to examine
- `value`: value to compare the projected elements to
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
Iterator to the first element satisfying the condition. If no such element is found, returns an iterator that compares equal to last.

## Example
This section is incompleteReason: no example

## See also
- [findfind_iffind_if_not](/cpp/algorithm/find/)
- [adjacent_find](/cpp/experimental/ranges/algorithm/adjacent_find/)
- [find_end](/cpp/experimental/ranges/algorithm/find_end/)
- [find_first_of](/cpp/experimental/ranges/algorithm/find_first_of/)
- [mismatch](/cpp/experimental/ranges/algorithm/mismatch/)
- [search](/cpp/experimental/ranges/algorithm/search/)
