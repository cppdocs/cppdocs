---
title: "std::chrono::month::operator unsigned"
source_path: "cpp/chrono/month/operator"
category: "chrono"
since: "C++20"
---

Returns the month value stored in *this.

## Declarations
```cpp
constexpr explicit operator unsigned() const noexcept;
```
_(since C++20)_

## Return value
The month value stored in *this.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    constexpr std::chrono::month m{6};
    constexpr unsigned p = static_cast<unsigned>(m);
    constexpr unsigned q = static_cast<unsigned>(std::chrono::September);
    std::cout << "The month is: " << p << '\n'
              << "September is: " << q << '\n'; 
}
```
