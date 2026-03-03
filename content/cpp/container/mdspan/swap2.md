---
title: "swap(std::mdspan)"
source_path: "cpp/container/mdspan/swap2"
category: "container"
since: "C++23"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::mdspan](/cpp/container/mdspan/). Exchanges the state of x with that of y. Equivalent to:

## Declarations
```cpp
friend constexpr void swap( mdspan& x, mdspan& y ) noexcept;
```
_(since C++23)_

## Parameters
- `x, y`: mdspan objects whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example
