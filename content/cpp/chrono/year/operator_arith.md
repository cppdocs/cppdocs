---
title: "std::chrono::year::operator+=, std::chrono::year::operator-="
source_path: "cpp/chrono/year/operator"
aliases:
  - "/cpp/chrono/year/operator/"
category: "chrono"
since: "C++20"
---

Adds or subtracts y.count() years from the year value.

## Declarations
```cpp
constexpr std::chrono::year& operator+=( const std::chrono::years& y ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year& operator-=( const std::chrono::years& y ) noexcept;
```
_(since C++20)_

## Return value
A reference to this year after modification.

## Notes
If the result would be outside the range [-32767,32767], the actual stored value is unspecified.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::literals::chrono_literals;
    std::cout << std::boolalpha;
 
    std::chrono::year y{2020};
 
    y += std::chrono::years(12);
    std::cout << (y == 2032y) << ' ';
 
    y -= std::chrono::years(33);
    std::cout << (y == 1999y) << '\n';
}
```

## See also
- [operator++operator++(int)operator--operator--(int)](/cpp/chrono/year/operator_inc_dec/)
- [operator+operator-](/cpp/chrono/year/operator_arith_2/)
