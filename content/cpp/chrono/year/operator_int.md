---
title: "std::chrono::year::operator int"
source_path: "cpp/chrono/year/operator"
category: "chrono"
since: "C++20"
---

Returns the year value stored in *this.

## Declarations
```cpp
constexpr explicit operator int() const noexcept;
```
_(since C++20)_

## Return value
The year value stored in *this.

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono;
 
int main()
{
    constexpr std::chrono::year y{2020};
    std::cout << "The year is: " << static_cast<int>(y) << '\n';
 
    const year_month_day ymd{floor<days>(system_clock::now())};
    const std::chrono::year this_year{ymd.year()};
    std::cout << "This year is: " << int(this_year) << '\n';
}
```
