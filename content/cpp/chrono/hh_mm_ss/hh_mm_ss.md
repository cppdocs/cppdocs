---
title: "std::chrono::hh_mm_ss<Duration>::hh_mm_ss"
source_path: "cpp/chrono/hh_mm_ss/hh_mm_ss"
category: "chrono"
---

Constructs a hh_mm_ss object.

## Declarations
```cpp
constexpr hh_mm_ss() noexcept : hh_mm_ss{Duration::zero()} {}
```

```cpp
constexpr explicit hh_mm_ss( Duration d );
```

## Parameters
- `d`: the duration to be broken down

## Example
```cpp
#include <chrono>
#include <print>
 
int main()
{
    std::println("Default constructor: {}", std::chrono::hh_mm_ss<std::chrono::minutes>{});
 
    std::chrono::time_point now = std::chrono::system_clock::now();
    std::chrono::hh_mm_ss time_of_day{now - std::chrono::floor<std::chrono::days>(now)};
    std::println("The time of day is: {}", time_of_day);
}
```
