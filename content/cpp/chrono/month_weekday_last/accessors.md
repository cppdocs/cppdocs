---
title: "std::chrono::month_weekday_last::month, std::chrono::month_weekday_last::weekday_last"
source_path: "cpp/chrono/month_weekday_last/accessors"
category: "chrono"
since: "C++20"
---

Retrieves a copy of the [month](/cpp/chrono/month/) and [weekday_last](/cpp/chrono/weekday_last/) objects stored in *this.

## Declarations
```cpp
constexpr std::chrono::month month() const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::weekday_last weekday_last() const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono;
 
int main()
{
    std::cout << std::boolalpha;
 
    auto mwdl{March/Friday[last]}; // Last Friday in a March
    auto ywdl{year(2024)/mwdl};
    std::cout << (year_month_day{ywdl} == 
                  year_month_day{March/29/2024}) << ' ';
    // Last Friday of the next month, in 2024
    mwdl = {(mwdl.month() + months(1))/mwdl.weekday_last()};
    ywdl = {year(2024)/mwdl}; 
    std::cout << (year_month_day{ywdl} == 
                  year_month_day{April/26/2024}) << '\n';
}
```
