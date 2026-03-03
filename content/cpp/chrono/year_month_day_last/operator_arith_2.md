---
title: "std::chrono::operator+, std::chrono::operator- (std::chrono::year_month_day_last)"
source_path: "cpp/chrono/year_month_day_last/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

1,2) Adds dm.count() months to the date represented by ymdl. The result has the same [year()](/cpp/chrono/year_month_day_last/accessors/) and [month()](/cpp/chrono/year_month_day_last/accessors/) as [std::chrono::year_month](/cpp/chrono/year_month/)(ymdl.year(), ymdl.month()) + dm.

## Declarations
```cpp
constexpr std::chrono::year_month_day_last
operator+( const std::chrono::year_month_day_last& ymdl,
const std::chrono::months& dm ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day_last
operator+( const std::chrono::months& dm,
const std::chrono::year_month_day_last& ymdl ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day_last
operator+( const std::chrono::year_month_day_last& ymdl,
const std::chrono::years& dy ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day_last
operator+( const std::chrono::years& dy,
const std::chrono::year_month_day_last& ymdl ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day_last
operator-( const std::chrono::year_month_day_last& ymdl,
const std::chrono::months& dm ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day_last
operator-( const std::chrono::year_month_day_last& ymdl,
const std::chrono::years& dy ) noexcept;
```
_(since C++20)_

## Example
```cpp
#include <cassert>
#include <chrono>
#include <iostream>
 
int main()
{
    auto ymdl{11/std::chrono::last/2020};
    std::cout << ymdl << '\n';
 
    ymdl = std::chrono::years(10) + ymdl;
    std::cout << ymdl << '\n';
    assert(ymdl == std::chrono::day(30)/
                   std::chrono::November/
                   std::chrono::year(2030));
 
    ymdl = ymdl - std::chrono::months(6);
    std::cout << ymdl << '\n';
    assert(ymdl == std::chrono::day(31)/
                   std::chrono::May/
                   std::chrono::year(2030));
}
```
