---
title: "std::chrono::weekday_indexed"
source_path: "cpp/chrono/weekday_indexed"
header: "<chrono>"
---

The class weekday_indexed combines a [weekday](/cpp/chrono/weekday/), representing a day of the week in the [proleptic Gregorian calendar](https://en.wikipedia.org/wiki/proleptic_Gregorian_calendar), with a small index n in the range [1,5]. It represents the first, second, third, fourth, or fifth weekday of some month.

## Declarations
```cpp
class weekday_indexed;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::chrono;
 
    constexpr weekday_indexed wi = Friday[2];
 
    // Indexed weekday can be used at any place where chrono::day can be used:
    constexpr year_month_weekday ymwd = 2021y / August / wi;
    static_assert(ymwd == August / wi / 2021y &&
                  ymwd == wi / August / 2021y);
    std::cout << ymwd << '\n';
 
    constexpr year_month_day ymd{ymwd}; // a conversion
    static_assert(ymd == 2021y / 8 / 13);
    std::cout << ymd << '\n';
}
```
