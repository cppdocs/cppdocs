---
title: "std::chrono::month_day_last::month"
source_path: "cpp/chrono/month_day_last/month"
category: "chrono"
since: "C++20"
---

Retrieves a copy of the std::chrono::month object stored in *this.

## Declarations
```cpp
constexpr std::chrono::month month() const noexcept;
```
_(since C++20)_

## Return value
A copy of the std::chrono::month object stored in *this.

## Example
```cpp
#include <chrono>
#include <iostream>
 
using namespace std::chrono;
 
int main()
{
    std::cout << std::boolalpha;
 
    auto mdl{February/last}; // Last day of a February
    auto ymdl{year(2020) / mdl};
    std::cout << (year_month_day{ymdl} == year_month_day{February/29/2020}) << ' ';
 
    mdl = (mdl.month() + months(1)) / last; // Last day of the next month, in 2020
    ymdl = year(2020) / mdl;
    std::cout << (year_month_day{ymdl} == year_month_day{March/31/2020}) << '\n';
}
```
