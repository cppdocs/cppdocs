---
title: "operator==, operator<=>(std::coroutine_handle)"
source_path: "cpp/coroutine/coroutine_handle/operator_cmp"
header: "<coroutine>"
category: "coroutine"
since: "C++20"
---

Compares two [std::coroutine_handle](/cpp/coroutine/coroutine_handle/)<> values x and y according to their underlying addresses.

## Declarations
```cpp
constexpr bool
operator==( std::coroutine_handle<> x, std::coroutine_handle<> y ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::strong_ordering
operator<=>( std::coroutine_handle<> x, std::coroutine_handle<> y ) noexcept;
```
_(since C++20)_

## Parameters
- `x, y`: std::coroutine_handle<> values to compare

## Notes
Although these operators are only overloaded for [std::coroutine_handle](/cpp/coroutine/coroutine_handle/)<>, other specializations of [std::coroutine_handle](/cpp/coroutine/coroutine_handle/) are also equality comparable and three-way comparable, because they are implicitly convertible to [std::coroutine_handle](/cpp/coroutine/coroutine_handle/)<>.

## Example
This section is incompleteReason: no example
