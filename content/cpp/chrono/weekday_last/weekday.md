---
title: "std::chrono::weekday_last::weekday"
source_path: "cpp/chrono/weekday_last/weekday"
category: "chrono"
since: "C++20"
---

Retrieves a copy of the std::chrono::weekday object stored in *this.

## Declarations
```cpp
constexpr std::chrono::weekday weekday() const noexcept;
```
_(since C++20)_

## Return value
A copy of the std::chrono::weekday object stored in *this.

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono;
 
int main()
{
    std::cout << std::boolalpha;
 
    auto wdl{Tuesday[last]}; // Last Tuesday of a month
    std::cout << (year_month_day{wdl/10/2019} ==
                  year_month_day{October/29/2019}) << ' ';
 
    wdl = {(wdl.weekday() + days(2))[last]}; // Last Tuesday is now last Thursday
    std::cout << (year_month_day{wdl/10/2019} ==
                  year_month_day{October/31/2019}) << '\n';
}
```
