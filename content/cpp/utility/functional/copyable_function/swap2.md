---
title: "swap(std::copyable_function)"
source_path: "cpp/utility/functional/copyable_function/swap2"
category: "utility"
since: "C++26"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for std::copyable_function. Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
friend void swap( std::copyable_function& lhs, std::copyable_function& rhs ) noexcept;
```
_(since C++26)_

## Parameters
- `lhs, rhs`: std::copyable_function objects whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/utility/functional/copyable_function/swap/)
- [std::swap(std::function)](/cpp/utility/functional/function/swap2/)
- [std::swap](/cpp/utility/swap/)
- [swap(std::move_only_function)](/cpp/utility/functional/move_only_function/swap2/)
- [std::swap](/cpp/utility/swap/)
