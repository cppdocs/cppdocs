---
title: "std::chrono::operator+, std::chrono::operator- (std::chrono::year_month_weekday_last)"
source_path: "cpp/chrono/year_month_weekday_last/operator"
category: "chrono"
since: "C++20"
---

1,2) Adds dm.count() months to the date represented by ymwdl. The result has the same [year()](/cpp/chrono/year_month_weekday_last/accessors/) and [month()](/cpp/chrono/year_month_weekday_last/accessors/) as [std::chrono::year_month](/cpp/chrono/year_month/)(ymwdl.year(), ymwdl.month()) + dm and the same [weekday()](/cpp/chrono/year_month_weekday_last/accessors/) as ymwdl.

## Declarations
```cpp
constexpr std::chrono::year_month_weekday_last
operator+( const std::chrono::year_month_weekday_last& ymwdl,
const std::chrono::months& dm ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday_last
operator+( const std::chrono::months& dm,
const std::chrono::year_month_weekday_last& ymwdl ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday_last
operator+( const std::chrono::year_month_weekday_last& ymwdl,
const std::chrono::years& dy ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday_last
operator+( const std::chrono::years& dy,
const std::chrono::year_month_weekday_last& ymwdl ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday_last
operator-( const std::chrono::year_month_weekday_last& ymwdl,
const std::chrono::months& dm ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday_last
operator-( const std::chrono::year_month_weekday_last& ymwdl,
const std::chrono::years& dy ) noexcept;
```
_(since C++20)_

## Example
```cpp
#include <cassert>
#include <chrono>
using namespace std::chrono;
 
int main()
{
    constexpr auto ymwdl1{Tuesday[last]/11/2021};
    auto ymwdl2 = ymwdl1;
    ymwdl2 = std::chrono::months(12) + ymwdl2;
    ymwdl2 = ymwdl2 - std::chrono::years(1);
    assert(ymwdl1 == ymwdl2);
}
```
