---
title: "std::chrono::month_day::ok"
source_path: "cpp/chrono/month_day/ok"
category: "chrono"
since: "C++20"
---

Determines whether this month_day stores a valid month-day combination.

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
true if the month and day combination is valid, otherwise false.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    constexpr auto md1{std::chrono::July/15};
    std::cout << (md1.ok()) << ' ';
    constexpr std::chrono::month_day md2{std::chrono::month(14), std::chrono::day(42)};
    std::cout << (md2.ok()) << ' ';
    constexpr auto md3{std::chrono::February/29};
    std::cout << (md3.ok()) << '\n';
}
```
