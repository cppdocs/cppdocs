---
title: "std::chrono::year::operator+, std::chrono::year::operator-"
source_path: "cpp/chrono/year/operator"
category: "chrono"
since: "C++20"
---

Applies the unary operators to the year value.

## Declarations
```cpp
constexpr std::chrono::year operator+() noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::year operator-() noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    constexpr std::chrono::year y{2020};
    constexpr auto ny = -y;
    std::cout << "The year " << (int)y << " negated is " << (int)ny << '\n';
}
```
