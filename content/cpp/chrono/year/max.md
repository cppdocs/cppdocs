---
title: "std::chrono::year::max"
source_path: "cpp/chrono/year/max"
category: "chrono"
since: "C++20"
---

Returns the largest possible year, that is, [std::chrono::year](/cpp/chrono/year/)(32767).

## Declarations
```cpp
static constexpr year max() noexcept;
```
_(since C++20)_

## Return value
[std::chrono::year](/cpp/chrono/year/)(32767)

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << "The maximum year is: " << (int)std::chrono::year::max() << '\n';
}
```
