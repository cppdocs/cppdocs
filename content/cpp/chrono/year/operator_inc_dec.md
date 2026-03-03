---
title: "std::chrono::year::operator++, std::chrono::year::operator--"
source_path: "cpp/chrono/year/operator"
category: "chrono"
since: "C++20"
---

Adds or subtracts 1 from the year value.

## Declarations
```cpp
constexpr std::chrono::year& operator++() noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year operator++( int ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year& operator--() noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year operator--( int ) noexcept;
```
_(since C++20)_

## Notes
If the result would be outside the range [-32767,32767], the actual stored value is unspecified.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    std::chrono::year y{2020};
    std::cout << (++y == std::chrono::year(2021)) << ' ';
    std::cout << (--y == std::chrono::year(2020)) << '\n';
 
    using namespace std::literals::chrono_literals;
    y = 32767y;
    y++; //← unspecified, see ↑ Notes ↑
    std::cout << static_cast<int>(y) << '\n';
}
```

## See also
- [operator+=operator-=](/cpp/chrono/year/operator_arith/)
- [operator+operator-](/cpp/chrono/year/operator_arith_2/)
