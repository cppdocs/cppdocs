---
title: "std::chrono::operator+, std::chrono::operator- (std::chrono::weekday)"
source_path: "cpp/chrono/weekday/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

1,2) Adds d.count() days to wd. The weekday value held in the result is computed by first evaluating static_cast<long long>(wd.c_encoding()) + d.count() and reducing it modulo 7 to an integer in the range [0,6].

## Declarations
```cpp
constexpr std::chrono::weekday operator+( const std::chrono::weekday& wd,
const std::chrono::days& d ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::weekday operator+( const std::chrono::days& d,
const std::chrono::weekday& wd ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::weekday operator-( const std::chrono::weekday& wd,
const std::chrono::days& d ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::days operator-( const std::chrono::weekday& wd1,
const std::chrono::weekday& wd2 ) noexcept;
```
_(since C++20)_

## Notes
As long as the computation doesn't overflow, (1-3) always return a valid weekday even if wd.ok() is false.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    std::chrono::weekday wd{4};
    wd = wd + std::chrono::days(2);
    std::cout << (wd == std::chrono::weekday(6)) << ' '
              << (wd == std::chrono::Saturday) << ' ';
 
    wd = wd - std::chrono::days(3);
    std::cout << (wd == std::chrono::weekday(3)) << ' '
              << (wd == std::chrono::Wednesday) << ' ';
 
    wd = std::chrono::Tuesday;
    wd = wd + std::chrono::days{8}; // (((2 + 8) == 10) % 7) == 3;
    std::cout << (wd == std::chrono::Wednesday) << ' ';
 
    wd = wd + (std::chrono::Sunday - std::chrono::Thursday); // (3 + 3) == 6
    std::cout << (wd == std::chrono::Saturday) << '\n';
}
```

## See also
- [operator++operator++(int)operator--operator--(int)](/cpp/chrono/weekday/operator_inc_dec/)
- [operator+=operator-=](/cpp/chrono/weekday/operator_arith/)
