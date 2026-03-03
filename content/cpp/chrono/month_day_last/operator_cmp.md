---
title: "std::chrono::operator==,<=>(std::chrono::month_day_last)"
source_path: "cpp/chrono/month_day_last/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compares the two month_day_last values x and y.

## Declarations
```cpp
constexpr bool operator==( const std::chrono::month_day_last& x,
const std::chrono::month_day_last& y ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::strong_ordering operator<=>( const std::chrono::month_day_last& x,
const std::chrono::month_day_last& y ) noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    constexpr auto mdl1{std::chrono::February/std::chrono::last};
    constexpr std::chrono::month_day_last mdl2{std::chrono::month(2)};
    std::cout << std::boolalpha << (mdl1 == mdl2) << '\n';
 
    static_assert(mdl1 <= mdl2);
}
```
