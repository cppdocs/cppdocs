---
title: "std::chrono::year_month_day_last::operator+=, std::chrono::year_month_day_last::operator-="
source_path: "cpp/chrono/year_month_day_last/operator"
aliases:
  - "/cpp/chrono/year_month_day_last/operator/"
category: "chrono"
since: "C++20"
---

Modifies the time point *this represents by the duration dy or dm.

## Declarations
```cpp
constexpr std::chrono::year_month_day_last&
operator+=( const std::chrono::years& dy ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day_last&
operator+=( const std::chrono::months& dm ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day_last&
operator-=( const std::chrono::years& dy ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_day_last&
operator-=( const std::chrono::months& dm ) const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <cassert>
#include <chrono>
 
int main()
{
    auto ymdl{11/std::chrono::last/2020};
 
    ymdl += std::chrono::years(15);
    assert(ymdl.day() == std::chrono::day(30));
    assert(ymdl.month() == std::chrono::November);
    assert(ymdl.year() == std::chrono::year(2035));
 
    ymdl -= std::chrono::months(6);
    assert(ymdl.day() == std::chrono::day(31));
    assert(ymdl.month() == std::chrono::May);
    assert(ymdl.year() == std::chrono::year(2035));
}
```

## See also
- [operator+operator-](/cpp/chrono/year_month_day_last/operator_arith_2/)
