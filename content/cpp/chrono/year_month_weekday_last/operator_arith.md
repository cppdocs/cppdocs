---
title: "std::chrono::year_month_weekday_last::operator+=, std::chrono::year_month_weekday_last::operator-="
source_path: "cpp/chrono/year_month_weekday_last/operator"
aliases:
  - "/cpp/chrono/year_month_weekday_last/operator/"
category: "chrono"
since: "C++20"
---

Modifies the time point *this represents by the duration dy or dm.

## Declarations
```cpp
constexpr std::chrono::year_month_weekday_last&
operator+=( const std::chrono::years& dy ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday_last&
operator+=( const std::chrono::months& dm ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday_last&
operator-=( const std::chrono::years& dy ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year_month_weekday_last&
operator-=( const std::chrono::months& dm ) const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono;
 
int main()
{
    auto ymwdl{August/Friday[last]/2022};
    std::cout << year_month_day{ymwdl} << '\n';
    ymwdl += months(2);
    std::cout << year_month_day{ymwdl} << '\n';
    ymwdl -= years(1); 
    std::cout << year_month_day{ymwdl} << '\n';
}
```

## See also
- [operator+operator-](/cpp/chrono/year_month_weekday_last/operator_arith_2/)
