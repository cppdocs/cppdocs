---
title: "std::experimental::ranges::SizedSentinel"
source_path: "cpp/experimental/ranges/iterator/SizedSentinel"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The SizedSentinel concept specifies that an object of the iterator type I and an object of the sentinel type S can be subtracted to compute the distance between them in constant time.

## Declarations
```cpp
template< class S, class I >
concept bool SizedSentinel =
Sentinel<S, I> &&
!ranges::disable_sized_sentinel<std::remove_cv_t<S>, std::remove_cv_t<I>> &&
requires(const I& i, const S& s) {
{ s - i } -> Same<ranges::difference_type_t<I>>&&;
{ i - s } -> Same<ranges::difference_type_t<I>>&&;
};
```
_(ranges TS)_

```cpp
template< class S, class I >
constexpr bool disable_sized_sentinel = false;
```
_(ranges TS)_
