---
title: "std::ranges::view_interface<D>::back"
source_path: "cpp/ranges/view_interface/back"
category: "ranges"
since: "C++20"
---

The default implementation of back() member function returns the last element in the view of the derived type. Whether the element is returned by value or by reference depends on the operator* of the iterator type.

## Declarations
```cpp
constexpr decltype(auto) back()
requires ranges::bidirectional_range<D> && ranges::common_range<D>;
```
_(since C++20)_

```cpp
constexpr decltype(auto) back() const
requires ranges::bidirectional_range<const D> && ranges::common_range<const D>;
```
_(since C++20)_

## Return value
The last element in the view.

## Notes
In C++20, no type derived from [std::ranges::view_interface](/cpp/ranges/view_interface/) in the standard library provides their own back() member function.

However, following derived types cannot use the default implementations, as they never satisfy neither [bidirectional_range](/cpp/ranges/bidirectional_range/) nor [common_range](/cpp/ranges/common_range/):

The inherited back() member function is available for [std::ranges::empty_view](/cpp/ranges/empty_view/), but a call to it always results in undefined behavior.

## Example
This section is incompleteReason: no example

## See also
- [rbegincrbegin](/cpp/iterator/rbegin/)
- [ranges::rbegin](/cpp/ranges/rbegin/)
- [ranges::crbegin](/cpp/ranges/crbegin/)
