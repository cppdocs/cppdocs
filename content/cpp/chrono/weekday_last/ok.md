---
title: "std::chrono::weekday_last::ok"
source_path: "cpp/chrono/weekday_last/ok"
category: "chrono"
since: "C++20"
---

Checks if the weekday object stored in *this is valid.

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
weekday().ok()

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    auto wdl{std::chrono::Tuesday[std::chrono::last]};
    std::cout << (wdl.ok()) << ' ';
 
    wdl = {std::chrono::weekday(42)[std::chrono::last]};
    std::cout << (wdl.ok()) << '\n';
}
```
