---
title: "std::chrono::year::min"
source_path: "cpp/chrono/year/min"
category: "chrono"
since: "C++20"
---

Returns the smallest possible year, that is, [std::chrono::year](/cpp/chrono/year/)(-32767).

## Declarations
```cpp
static constexpr std::chrono::year min() noexcept;
```
_(since C++20)_

## Return value
[std::chrono::year](/cpp/chrono/year/)(-32767)

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << "The minimum year is: " << (int)std::chrono::year::min() << '\n';
}
```
