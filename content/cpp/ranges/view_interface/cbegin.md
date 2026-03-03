---
title: "std::ranges::view_interface<D>::cbegin"
source_path: "cpp/ranges/view_interface/cbegin"
category: "ranges"
since: "C++23"
---

The default implementation of cbegin() member function returns a constant beginning iterator of the range.

## Declarations
```cpp
constexpr auto cbegin();
```
_(since C++23)_

```cpp
constexpr auto cbegin() const requires ranges::range<const D>;
```
_(since C++23)_

## Return value
A constant beginning iterator of the range.

## Notes
All range adaptors and range factories in the standard library and [std::ranges::subrange](/cpp/ranges/subrange/) use the default implementation of cbegin.

## Example
This section is incompleteReason: no example

## See also
- [begincbegin](/cpp/iterator/begin/)
- [ranges::cbegin](/cpp/ranges/cbegin/)
