---
title: "std::chrono::operator==(std::chrono::year_month_weekday)"
source_path: "cpp/chrono/year_month_weekday/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compares the two year_month_weekday values x and y.

## Declarations
```cpp
constexpr bool operator==( const std::chrono::year_month_weekday& x,
const std::chrono::year_month_weekday& y ) noexcept;
```
_(since C++20)_

## Return value
x.year() == y.year() && x.month() == y.month() && x.weekday_indexed() == y.weekday_indexed()

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono;
 
int main()
{
    constexpr auto ymwdi1{Wednesday[1]/January/2021};
    constexpr year_month_weekday ymwdi2{year(2021), month(1), weekday(3)[1]};
    std::cout << std::boolalpha << (ymwdi1 == ymwdi2) << '\n';
}
```
