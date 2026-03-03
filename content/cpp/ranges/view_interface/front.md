---
title: "std::ranges::view_interface<D>::front"
source_path: "cpp/ranges/view_interface/front"
category: "ranges"
since: "C++20"
---

The default implementation of front() member function returns the first element in the view of the derived type. Whether the element is returned by value or by reference depends on the operator* of the iterator type.

## Declarations
```cpp
constexpr decltype(auto) front()
requires ranges::forward_range<D>;
```
_(since C++20)_

```cpp
constexpr decltype(auto) front() const
requires ranges::forward_range<const D>;
```
_(since C++20)_

## Return value
The first element in the view.

## Notes
In C++20, no type derived from [std::ranges::view_interface](/cpp/ranges/view_interface/) in the standard library provides their own front() member function. Almost all of these types use the default implementation.

A notable exception is [std::ranges::basic_istream_view](/cpp/ranges/basic_istream_view/). For it never satisfies [forward_range](/cpp/ranges/forward_range/), the view cannot use the inherited front().

The inherited front() member function is available for [std::ranges::empty_view](/cpp/ranges/empty_view/), but a call to it always results in undefined behavior.

## Example
This section is incompleteReason: no example

## See also
- [begincbegin](/cpp/iterator/begin/)
- [ranges::begin](/cpp/ranges/begin/)
- [ranges::cbegin](/cpp/ranges/cbegin/)
