---
title: "std::chrono::operator+, std::chrono::operator- (std::chrono::year_month_day)"
source_path: "cpp/chrono/year_month_day/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

1,2) Adds dm.count() months to the date represented by ymd. The result has the same day() as ymd and the same year() and month() as [std::chrono::year_month](/cpp/chrono/year_month/)(ymd.year(), ymd.month()) + dm.

## Declarations
```cpp
constexpr std::chrono::year_month_day operator+( const std::chrono::year_month_day& ymd,
const std::chrono::months& dm
) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day operator+( const std::chrono::months& dm,
const std::chrono::year_month_day& ymd
) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day operator+( const std::chrono::year_month_day& ymd,
const std::chrono::years& dy
) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day operator+( const std::chrono::years& dy,
const std::chrono::year_month_day& ymd
) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day operator-( const std::chrono::year_month_day& ymd,
const std::chrono::months& dm
) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day operator-( const std::chrono::year_month_day& ymd,
const std::chrono::years& dy
) noexcept;
```
_(since C++20)_

## Notes
Even if ymd.ok() is true, the resulting year_month_day may not represent a valid date if ymd.day() is 29, 30, or 31.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    auto ymd{std::chrono::day(1)/std::chrono::July/2021};
 
    ymd = ymd + std::chrono::months(4);
    std::cout << (ymd.month() == std::chrono::November) << ' '
              << (ymd.year() == std::chrono::year(2021)) << ' ';
 
    ymd = ymd - std::chrono::years(10);
    std::cout << (ymd.month() == std::chrono::month(11)) << ' '
              << (ymd.year() == std::chrono::year(2011)) << '\n';
}
```
