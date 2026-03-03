---
title: "std::chrono::year_month_weekday_last::operator sys_days, std::chrono::year_month_weekday_last::operator local_days"
source_path: "cpp/chrono/year_month_weekday_last/operator"
category: "chrono"
since: "C++20"
---

Converts *this to a [std::chrono::time_point](/cpp/chrono/time_point/) representing the same date as this year_month_weekday_last.

## Declarations
```cpp
constexpr operator std::chrono::sys_days() const noexcept;
```
_(since C++20)_

```cpp
constexpr explicit operator std::chrono::local_days() const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono;
 
int main()
{
    constexpr auto ymwdl{Tuesday[last]/11/2021};
    static_assert(static_cast<local_days>(ymwdl) ==
                  static_cast<local_days>(November/30/2021));
    // convert from field-based to serial-based to add days
    constexpr auto sd = static_cast<sys_days>(ymwdl);
    constexpr year_month_day ymd{sd + days(42)};
    std::cout << ymd << '\n';
}
```
