---
title: "std::ranges::view_interface<D>::cend"
source_path: "cpp/ranges/view_interface/cend"
category: "ranges"
since: "C++23"
---

The default implementation of cend() member function returns the sentinel for the constant iterator of the range.

## Declarations
```cpp
constexpr auto cend();
```
_(since C++23)_

```cpp
constexpr auto cend() const requires ranges::range<const D>;
```
_(since C++23)_

## Return value
The sentinel for the constant iterator of the range.

## Notes
All range adaptors and range factories in the standard library and [std::ranges::subrange](/cpp/ranges/subrange/) use the default implementation of cend.

## Example
This section is incompleteReason: no example

## See also
- [endcend](/cpp/iterator/end/)
- [ranges::cend](/cpp/ranges/cend/)
