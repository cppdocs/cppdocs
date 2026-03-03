---
title: "std::chrono::weekday::operator++, std::chrono::weekday::operator--"
source_path: "cpp/chrono/weekday/operator"
category: "chrono"
since: "C++20"
---

Adds or subtracts 1 from the weekday value, reducing the result modulo 7 to an integer in the range [0,6].

## Declarations
```cpp
constexpr std::chrono::weekday& operator++() noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::weekday operator++( int ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::weekday& operator--() noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::weekday operator--( int ) noexcept;
```
_(since C++20)_

## Notes
After a call to one of these functions, [ok()](/cpp/chrono/weekday/ok/) is always true.

## Example
```cpp
#include <cassert>
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    std::chrono::weekday wd{0}; // Sunday is 0 or 7
 
    --wd;
    std::cout << (wd == std::chrono::Saturday) << ' ';
 
    ++wd;
    std::cout << (wd == std::chrono::Sunday) << '\n';
 
    wd = std::chrono::weekday{13};
    assert(!wd.ok());
    wd++;
    assert(wd.ok());
}
```

## See also
- [operator+=operator-=](/cpp/chrono/weekday/operator_arith/)
- [operator+operator-](/cpp/chrono/weekday/operator_arith_2/)
