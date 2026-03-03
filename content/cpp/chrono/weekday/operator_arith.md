---
title: "std::chrono::weekday::operator+=, std::chrono::weekday::operator-="
source_path: "cpp/chrono/weekday/operator"
aliases:
  - "/cpp/chrono/weekday/operator/"
category: "chrono"
since: "C++20"
---

Adds or subtracts d.count() from the weekday value, reducing the result modulo 7 to an integer in the range [0,6].

## Declarations
```cpp
constexpr std::chrono::weekday& operator+=( const std::chrono::days& d ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::weekday& operator-=( const std::chrono::days& d ) noexcept;
```
_(since C++20)_

## Return value
A reference to this weekday after modification.

## Notes
After a call to one of these functions, ok() is always true if no overflow occurred during the operation.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    std::chrono::weekday wd{5}; // Friday is 5
    wd += std::chrono::days(2);
    std::cout << (wd == std::chrono::weekday(0)) << ' '
              << (wd == std::chrono::Sunday) << ' ';
 
    wd -= std::chrono::days(3);
    std::cout << (wd == std::chrono::weekday(4)) << ' '
              << (wd == std::chrono::Thursday) << ' ';
 
    wd = std::chrono::Wednesday;
    wd += std::chrono::days{8}; // ((3 += 8 == 11) % 7) == 4;
    std::cout << (wd == std::chrono::Thursday) << ' ';
 
    wd -= (std::chrono::Sunday - std::chrono::Tuesday); // -= -2
    // (4 -= -2) == 6
    std::cout << (wd == std::chrono::Saturday) << '\n';
}
```

## See also
- [operator++operator++(int)operator--operator--(int)](/cpp/chrono/weekday/operator_inc_dec/)
- [operator+operator-](/cpp/chrono/weekday/operator_arith_2/)
