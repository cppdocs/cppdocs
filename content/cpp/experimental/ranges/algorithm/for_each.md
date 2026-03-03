---
title: "std::experimental::ranges::for_each"
source_path: "cpp/experimental/ranges/algorithm/for_each"
header: "<experimental/ranges/algorithm>"
category: "experimental"
---

1) Invokes the given function object f to the result of invoking the projection proj on dereferencing every iterator in the range [first,last) (i.e.,[ranges::invoke](/cpp/experimental/ranges/functional/invoke/)(f, [ranges::invoke](/cpp/experimental/ranges/functional/invoke/)(proj, *i))), in order.

## Declarations
```cpp
template< InputIterator I, Sentinel<I> S, class Proj = ranges::identity,
IndirectUnaryInvocable<projected<I, Proj>> Fun >
ranges::tagged_pair<tag::in(I), tag::fun(Fun)>
for_each( I first, S last, Fun f, Proj proj = Proj{} );
```
_(ranges TS)_

```cpp
template< InputRange R, class Proj = ranges::identity,
IndirectUnaryInvocable<projected<ranges::iterator_t<R>, Proj>> Fun >
ranges::tagged_pair<tag::in(ranges::safe_iterator_t<R>), tag::fun(Fun)>
for_each( R&& r, Fun f, Proj proj = Proj{} );
```
_(ranges TS)_

## Parameters
- `first, last`: the range to apply the function to
- `r`: the range to apply the function to
- `f`: callable object to be applied to each projected element in the range
- `proj`: projection to apply to the elements

## Return value
A tagged_pair object containing the following two members:

## Example
This section is incompleteReason: no example

## See also
- [range-for loop](/cpp/language/range-for/)
- [for_each](/cpp/algorithm/for_each/)
- [for_each_n](/cpp/algorithm/for_each_n/)
