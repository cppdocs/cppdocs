---
title: "std::chrono::year::is_leap"
source_path: "cpp/chrono/year/is_leap"
category: "chrono"
since: "C++20"
---

Determines if *this represents a leap year in the [proleptic Gregorian calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar).

## Declarations
```cpp
constexpr bool is_leap() const noexcept;
```
_(since C++20)_

## Return value
true if *this represents a leap year, otherwise false.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::chrono_literals;
    for (const std::chrono::year y : {2020y, 2021y, 2000y, 3000y})
    {
        if (const int iy{static_cast<int>(y)}; y.is_leap())
            std::cout << iy << " is a leap year because it is divisible by "
                      << (iy % 400 == 0 ? "400\n" : "4 and not divisible by 100\n");
        else
            std::cout << iy << " is not a leap year\n";
    }
}
```
