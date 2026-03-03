---
title: "std::chrono::month_weekday_last::ok"
source_path: "cpp/chrono/month_weekday_last/ok"
category: "chrono"
since: "C++20"
---

Checks if the contained [month](/cpp/chrono/month/) and [weekday_last](/cpp/chrono/weekday_last/) objects are valid.

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
month().ok() && weekday_last().ok()

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    auto mwdl{std::chrono::March/std::chrono::Wednesday[std::chrono::last]};
    std::cout << (mwdl.ok()) << ' ';
    mwdl = {std::chrono::month(3)/std::chrono::weekday(42)[std::chrono::last]}; 
    std::cout << (mwdl.ok()) << '\n';
}
```
