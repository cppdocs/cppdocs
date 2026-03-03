---
title: "std::chrono::operator==(std::chrono::weekday_indexed)"
source_path: "cpp/chrono/weekday_indexed/operator_cmp"
aliases:
  - "/cpp/chrono/weekday_indexed/operator/"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compares the two weekday_indexed x and y.

## Declarations
```cpp
constexpr bool operator==( const std::chrono::weekday_indexed& x,
const std::chrono::weekday_indexed& y ) noexcept;
```
_(since C++20)_

## Return value
x.weekday() == y.weekday() && x.index() == y.index()

## Example
```cpp
#include <chrono>
 
int main()
{
    constexpr std::chrono::weekday_indexed wdi1{std::chrono::Wednesday[2]};
    constexpr std::chrono::weekday_indexed wdi2{std::chrono::weekday(3), 2};
    static_assert(wdi1 == wdi2);
}
```
