---
title: "std::sized_sentinel_for, std::disable_sized_sentinel_for"
source_path: "cpp/iterator/sized_sentinel_for"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

1) The sized_sentinel_for concept specifies that an object of the iterator type I and an object of the sentinel type S can be subtracted to compute the distance between them in constant time.

## Declarations
```cpp
template< class S, class I >
concept sized_sentinel_for =
std::sentinel_for<S, I> &&
!std::disable_sized_sentinel_for<std::remove_cv_t<S>,
std::remove_cv_t<I>> &&
requires(const I& i, const S& s) {
{ s - i } -> std::same_as<std::iter_difference_t<I>>;
{ i - s } -> std::same_as<std::iter_difference_t<I>>;
};
```
_(since C++20)_

```cpp
template< class S, class I >
inline constexpr bool disable_sized_sentinel_for = false;
```
_(since C++20)_

## See also
- [ranges::sized_range](/cpp/ranges/sized_range/)
- [ranges::size](/cpp/ranges/size/)
