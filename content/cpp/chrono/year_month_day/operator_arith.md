---
title: "std::chrono::year_month_day::operator+=, std::chrono::year_month_day::operator-="
source_path: "cpp/chrono/year_month_day/operator"
aliases:
  - "/cpp/chrono/year_month_day/operator/"
category: "chrono"
since: "C++20"
---

Modifies the time point *this represents by the duration dy or dm.

## Declarations
```cpp
constexpr std::chrono::year_month_day&
operator+=( const std::chrono::years& dy ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day&
operator+=( const std::chrono::months& dm ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day&
operator-=( const std::chrono::years& dy ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day&
operator-=( const std::chrono::months& dm ) const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <cassert>
#include <chrono>
#include <iostream>
 
int main()
{
    constexpr auto monthsInYear{12};
    auto ymd{std::chrono::day(1)/std::chrono::July/2020};
    std::cout << "#1 " << ymd << '\n';
 
    ymd -= std::chrono::years(10);
    std::cout << "#2 " << ymd << '\n';
    assert(ymd.month() == std::chrono::July);
    assert(ymd.year() == std::chrono::year(2010));
 
    ymd += std::chrono::months(10 * monthsInYear + 11);
    std::cout << "#3 " << ymd << '\n';
    assert(ymd.month() == std::chrono::month(6));
    assert(ymd.year() == std::chrono::year(2021));
 
    // Handling the ymd += months "overflow" case.
    ymd = std::chrono::May/31/2021; // ok
    std::cout << "#4 " << ymd << '\n';
    assert(ymd.ok());
 
    ymd += std::chrono::months{1}; // bad date: June has only 30 days
    std::cout << "#5 " << ymd << '\n';
    assert(not ymd.ok());
    assert(ymd == std::chrono::June/31/2021);
 
    // Snap to the last day of the month, June 30:
    const auto ymd1 = ymd.year()/ymd.month()/std::chrono::last;
    std::cout << "#6 " << ymd1 << '\n';
    assert(ymd1.ok());
    assert(ymd1 == std::chrono::June/30/2021);
 
    // Overflow into the next month, July 1 (via converting to/from sys_days):
    const std::chrono::year_month_day ymd2 = std::chrono::sys_days{ymd};
    std::cout << "#7 " << ymd2 << '\n';
    assert(ymd2.ok());
    assert(ymd2 == std::chrono::July/1/2021);
}
```

## See also
- [operator+operator-](/cpp/chrono/year_month_day/operator_arith_2/)
