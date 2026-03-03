---
title: "std::chrono::month_weekday::ok"
source_path: "cpp/chrono/month_weekday/ok"
category: "chrono"
since: "C++20"
---

Checks if the contained [month](/cpp/chrono/month/) and [weekday_indexed](/cpp/chrono/weekday_indexed/) objects are valid.

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
month().ok() && weekday_indexed().ok()

## Example
```cpp
#include <cassert>
#include <chrono>
 
int main()
{
    auto mwdi{std::chrono::March/std::chrono::Friday[1]};
    assert(mwdi.ok());
 
    mwdi = {std::chrono::month(17)/std::chrono::Friday[1]}; 
    assert(not mwdi.ok());
 
    mwdi = {std::chrono::March/std::chrono::Friday[-4]}; 
    assert(not mwdi.ok());
}
```
