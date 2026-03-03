---
title: "std::chrono::month_day_last::ok"
source_path: "cpp/chrono/month_day_last/ok"
category: "chrono"
since: "C++20"
---

Checks if the month object stored in *this is valid.

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
month().ok()

## Example
```cpp
#include <cassert>
#include <chrono>
 
int main()
{
    auto mdl{std::chrono::February/std::chrono::last};
    assert(mdl.ok());
    mdl = {std::chrono::month(42)/std::chrono::last};
    assert(!mdl.ok());
}
```
