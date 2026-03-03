---
title: "std::chrono::weekday::c_encoding, std::chrono::weekday::iso_encoding"
source_path: "cpp/chrono/weekday/encoding"
category: "chrono"
since: "C++20"
---

1) Returns the weekday value stored in *this.

## Declarations
```cpp
constexpr unsigned c_encoding() const noexcept;
```
_(since C++20)_

```cpp
constexpr unsigned iso_encoding() const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << "i: C: ISO: Weekday:\n";
 
    for (unsigned i{0}; i != 8; ++i)
    {
        const std::chrono::weekday w{i};
        std::cout << i << "  "
                  << w.c_encoding() << "  "
                  << w.iso_encoding() << "    "
                  << w << '\n';
    }
}
```
