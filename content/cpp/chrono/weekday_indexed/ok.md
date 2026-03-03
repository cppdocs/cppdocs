---
title: "std::chrono::weekday_indexed::ok"
source_path: "cpp/chrono/weekday_indexed/ok"
category: "chrono"
since: "C++20"
---

Checks if the weekday object and the index stored in *this are both valid.

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
true if weekday().ok() == true and index() is in the range [1,5]. Otherwise false.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    std::chrono::weekday_indexed wdi{std::chrono::Tuesday[2]};
    std::cout << (wdi.ok()) << ' ';
    wdi = {std::chrono::weekday(42)[2]}; 
    std::cout << (wdi.ok()) << ' ';
    wdi = {std::chrono::Tuesday[-4]}; 
    std::cout << (wdi.ok()) << '\n';
}
```
