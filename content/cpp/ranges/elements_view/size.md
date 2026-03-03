---
title: "std::ranges::elements_view<V,N>::size"
source_path: "cpp/ranges/elements_view/size"
category: "ranges"
since: "C++20"
---

Returns the number of elements, i.e. [ranges::size](/cpp/ranges/size/)(base_), where [base_](/cpp/ranges/elements_view/#Data_members) is the underlying view.

## Declarations
```cpp
constexpr auto size() requires ranges::sized_range<V>;
```
_(since C++20)_

```cpp
constexpr auto size() const requires ranges::sized_range<const V>;
```
_(since C++20)_

## Return value
The number of elements.

## Example
This section is incompleteReason: no example

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
