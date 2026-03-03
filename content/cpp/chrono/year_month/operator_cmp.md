---
title: "std::chrono::operator==,<=>(std::chrono::year_month)"
source_path: "cpp/chrono/year_month/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compares the two year_month values x and y.

## Declarations
```cpp
constexpr bool operator==( const std::chrono::year_month& x,
const std::chrono::year_month& y ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::strong_ordering operator<=>( const std::chrono::year_month& x,
const std::chrono::year_month& y ) noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::chrono;
 
    constexpr year_month ym1{year(2021), month(7)};
    constexpr year_month ym2{year(2021)/7};
    static_assert(ym1 == ym2);
    std::cout << ym1 << '\n';
 
    static_assert((2020y/1 < 2020y/2) && (2020y/2 == 2020y/2) && (2020y/3 <= 2021y/3) &&
                  (2023y/1 > 2020y/2) && (3020y/2 != 2020y/2) && (2020y/3 >= 2020y/3));
}
```
