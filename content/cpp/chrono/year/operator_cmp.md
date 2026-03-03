---
title: "std::chrono::operator==,<=>(std::chrono::year)"
source_path: "cpp/chrono/year/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compare the two std::chrono::year x and y.

## Declarations
```cpp
constexpr bool operator==( const std::chrono::year& x,
const std::chrono::year& y ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::strong_ordering operator<=>( const std::chrono::year& x,
const std::chrono::year& y ) noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::chrono;
 
    constexpr year y1{2020};
    constexpr year y2{2021};
 
    std::cout << std::boolalpha << (y1 != y2) << '\n';
 
    static_assert((2020y < 2023y) && (2020y == 2020y) && (2020y <= 2023y) &&
                  (2023y > 2020y) && (2023y != 2020y) && (2023y >= 2020y));
}
```
