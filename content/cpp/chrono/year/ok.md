---
title: "std::chrono::year::ok"
source_path: "cpp/chrono/year/ok"
category: "chrono"
since: "C++20"
---

Checks if the year value stored in *this is in the valid range, i.e., [-32767,32767].

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
true if the year value stored in *this is in the range [-32767,32767]. Otherwise false.

## Example
```cpp
#include <chrono>
#include <iomanip>
#include <iostream>
 
int main()
{
    std::cout << "input year │ internal value │ ok()\n" << std::boolalpha;
 
    for (const int i : {2020, 0x8000, 0x8001, 0xFFFF, 0x18000})
    {
        const std::chrono::year y{i};
        std::cout << std::setw(10) << i << " │ "
                  << std::setw(14) << static_cast<int>(y) << " │ "
                  << y.ok() << '\n';
    }
}
```
