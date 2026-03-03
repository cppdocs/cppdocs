---
title: "std::experimental::ranges::reference_t, std::experimental::ranges::rvalue_reference_t, std::experimental::ranges::iter_common_reference_t"
source_path: "cpp/experimental/ranges/iterator/reference_t"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

1) Obtain the reference type of a dereferenceable type T.

## Declarations
```cpp
template< class T >
concept bool /*dereferenceable*/ = requires(T& t) { {*t} -> auto&&; };
```
_(exposition only*)_

```cpp
template< /*dereferenceable*/ T >
using reference_t = decltype(*declval<T&>());
```
_(ranges TS)_

```cpp
template< /*dereferenceable*/ T >
requires requires(T& t) { { ranges::iter_move(t) } -> auto&&; }
using rvalue_reference_t = decltype(ranges::iter_move(declval<T&>()));
```
_(ranges TS)_

```cpp
template< Readable T >
using iter_common_reference_t = ranges::common_reference_t<ranges::reference_t<T>,
ranges::value_type_t<T>&>;
```
_(ranges TS)_

## Notes
The -> auto&& constraint checks that the type of the expression is not void.
