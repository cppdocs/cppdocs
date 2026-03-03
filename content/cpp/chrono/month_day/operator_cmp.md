---
title: "std::chrono::operator==,<=>(std::chrono::month_day)"
source_path: "cpp/chrono/month_day/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compares two month_day values.

## Declarations
```cpp
constexpr bool operator==( const std::chrono::month_day& x,
const std::chrono::month_day& y ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::strong_ordering operator<=>( const std::chrono::month_day& x,
const std::chrono::month_day& y ) noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    constexpr auto md1{std::chrono::August/15};
    constexpr auto md2{std::chrono::month(8)/std::chrono::day(15)};
    std::cout << std::boolalpha << (md1 == md2) << '\n';
 
    static_assert(md1 <= md2);
}
```
