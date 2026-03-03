---
title: "std::chrono::month::operator+=, std::chrono::month::operator-="
source_path: "cpp/chrono/month/operator"
aliases:
  - "/cpp/chrono/month/operator/"
category: "chrono"
since: "C++20"
---

Adds or subtracts m.count() from the month value, reducing the result modulo 12 to an integer in the range [1,12].

## Declarations
```cpp
constexpr std::chrono::month& operator+=( const std::chrono::months& m ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::month& operator-=( const std::chrono::months& m ) noexcept;
```
_(since C++20)_

## Return value
A reference to this month after modification.

## Notes
After a call to one of these functions, [ok()](/cpp/chrono/month/ok/) is always true if no overflow occurred during the operation.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    std::chrono::month m{6};
    m += std::chrono::months(2);
    std::cout << (m == std::chrono::month(8)) << ' '
              << (m == std::chrono::August) << ' ';
 
    m -= std::chrono::months(3);
    std::cout << (m == std::chrono::month(5)) << ' '
              << (m == std::chrono::May) << ' ';
 
    m = std::chrono::October;
    m += std::chrono::months{8}; // ((10 += 8 == 18) % 12) == 6;
    std::cout << (m == std::chrono::June) << ' ';
 
    m -= std::chrono::months{std::chrono::December - std::chrono::February}; // -= 10
    // (6 -= 10) == -4; -4 % 12 == (12 - 4) == 8
    std::cout << (m == std::chrono::August) << '\n';
}
```

## See also
- [operator++operator++(int)operator--operator--(int)](/cpp/chrono/month/operator_inc_dec/)
- [operator+operator-](/cpp/chrono/month/operator_arith_2/)
