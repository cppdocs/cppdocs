---
title: "std::ranges::view_interface<D>::operator[]"
source_path: "cpp/ranges/view_interface/operator_at"
category: "ranges"
since: "C++20"
---

The default implementation of operator[] member function obtains the element at the specified offset relative to the beginning iterator, reusing the operator[] of the iterator type.

## Declarations
```cpp
template<ranges::random_access_range R = D>
constexpr decltype(auto) operator[]( ranges::range_difference_t<R> n );
```
_(since C++20)_

```cpp
template<ranges::random_access_range R = const D>
constexpr decltype(auto) operator[]( ranges::range_difference_t<R> n ) const;
```
_(since C++20)_

## Parameters
- `n`: position of the element to return

## Return value
The element at offset n relative to the beginning iterator.

## Notes
In C++20, no type derived from [std::ranges::view_interface](/cpp/ranges/view_interface/) in the standard library provides their own operator[] member function.

However, following derived types cannot use the default implementations, as they never satisfy [random_access_range](/cpp/ranges/random_access_range/):

The inherited operator[] member function is available for [std::ranges::empty_view](/cpp/ranges/empty_view/), but a call to it always results in undefined behavior.

## Example
This section is incompleteReason: no example
