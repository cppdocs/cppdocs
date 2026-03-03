---
title: "std::chrono::weekday::weekday"
source_path: "cpp/chrono/weekday/weekday"
category: "chrono"
since: "C++20"
---

Constructs a weekday object.

## Declarations
```cpp
weekday() = default;
```
_(since C++20)_

```cpp
constexpr explicit weekday( unsigned wd ) noexcept;
```
_(since C++20)_

```cpp
constexpr weekday( const std::chrono::sys_days& sd ) noexcept;
```
_(since C++20)_

```cpp
constexpr explicit weekday( const std::chrono::local_days& ld ) noexcept;
```
_(since C++20)_

## Parameters
- `wd`: a weekday value
- `sd`: a system days object
- `ld`: a local days object

## Example
```cpp
#include <chrono>
#include <iomanip>
#include <iostream>
 
int main()
{
    constexpr std::chrono::weekday friday{5}; // uses overload (2)
    static_assert(friday == std::chrono::Friday);
 
    for (int y{2020}; y <= 2024; ++y)
    {
        const std::chrono::year cur_year{y};
        for (int cur_month{1}; cur_month != 13; ++cur_month)
        {
            const std::chrono::year_month_day ymd{cur_year/cur_month/13};
            const std::chrono::weekday cur_weekday{std::chrono::sys_days(ymd)}; // (3)
            if (cur_weekday == friday)
                std::cout << ymd << " is " << friday << '\n';
        }
    }
}
```
