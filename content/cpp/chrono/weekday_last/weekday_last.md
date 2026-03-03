---
title: "std::chrono::weekday_last::weekday_last"
source_path: "cpp/chrono/weekday_last/weekday_last"
category: "chrono"
since: "C++20"
---

Constructs a weekday_last object storing the weekday wd.

## Declarations
```cpp
constexpr explicit weekday_last( const std::chrono::weekday& wd ) noexcept;
```
_(since C++20)_

## Notes
A more convenient way to construct a weekday_last is with weekday's operator[], i.e., wd[[std::chrono::last](/cpp/chrono/last_spec/)].

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono;
 
int main()
{
    const year_month_day ymd{floor<days>(system_clock::now())};
    const weekday_last wdl{Sunday[last]}; // A last Sunday of a month
    const year_month_day last_sun{ymd.year() / ymd.month() / wdl};
 
    std::cout << "The last Sunday of current month falls on "
              << (int)last_sun.year() << '/'
              << (unsigned)last_sun.month() << '/'
              << (unsigned)last_sun.day() << '\n';
}
```
