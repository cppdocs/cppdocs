---
title: "std::chrono::year_month::year, std::chrono::year_month::month"
source_path: "cpp/chrono/year_month/accessors"
category: "chrono"
since: "C++20"
---

Retrieves the year and month values stored in this year_month object.

## Declarations
```cpp
constexpr std::chrono::year year() const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::month month() const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    constexpr auto ym{std::chrono::year(2021)/std::chrono::July};  
    std::cout << (ym.year() == std::chrono::year(2021)) << ' ';
    std::cout << (ym.month() == std::chrono::month(7)) << '\n';
}
```
