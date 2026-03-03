---
title: "std::chrono::month::ok"
source_path: "cpp/chrono/month/ok"
category: "chrono"
since: "C++20"
---

Checks if the month value stored in *this is in the valid range, i.e., [1,12].

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
true if the month value stored in *this is in the range [1,12]. Otherwise false.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    for (const unsigned mm : {6u, 0u, 16U})
    {
        std::cout << mm << ": ";
        const std::chrono::month m{mm};
        m.ok() ? std::cout << "month is valid\n"
               : std::cout << "month is invalid\n";
    }
}
```
