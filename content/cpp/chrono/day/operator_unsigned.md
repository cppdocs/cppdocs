---
title: "std::chrono::day::operator unsigned"
source_path: "cpp/chrono/day/operator"
category: "chrono"
since: "C++20"
---

Returns the day value stored in *this.

## Declarations
```cpp
constexpr explicit operator unsigned() const noexcept;
```
_(since C++20)_

## Return value
The day value stored in *this.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    constexpr std::chrono::day d{15};
    constexpr unsigned day = static_cast<unsigned>(d);
    std::cout << "The day is: " << day << '\n';
}
```
