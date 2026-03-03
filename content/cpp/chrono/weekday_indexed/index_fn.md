---
title: "std::chrono::weekday_indexed::index"
source_path: "cpp/chrono/weekday_indexed/index"
url: "/cpp/chrono/weekday_indexed/index/"
category: "chrono"
since: "C++20"
---

Accesses the index stored in *this.

## Declarations
```cpp
constexpr unsigned index() const noexcept;
```
_(since C++20)_

## Return value
The index stored in *this.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    std::chrono::weekday_indexed wdi {std::chrono::Tuesday[2]}; // 2nd Tuesday of a month
    std::cout << (std::chrono::year_month_day{wdi/10/2019} == 
                  std::chrono::year_month_day{std::chrono::October/8/2019}) << ' ';
 
    wdi = {wdi.weekday()[wdi.index() + 2]}; // 2nd Tuesday => 4th Tuesday
    std::cout << (std::chrono::year_month_day{wdi/10/2019} == 
                  std::chrono::year_month_day{std::chrono::October/22/2019}) << '\n';
}
```
