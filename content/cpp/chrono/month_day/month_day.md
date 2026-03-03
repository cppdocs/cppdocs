---
title: "std::chrono::month_day::month_day"
source_path: "cpp/chrono/month_day/month_day"
category: "chrono"
since: "C++20"
---

Constructs a month_day.

## Declarations
```cpp
month_day() = default;
```
_(since C++20)_

```cpp
constexpr month_day( const std::chrono::month& m,
const std::chrono::day& d ) noexcept;
```
_(since C++20)_

## Notes
A more convenient way to construct a month_day is with operator/, e.g., [std::chrono::April](/cpp/chrono/month/)/1.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::chrono_literals;
    constexpr auto mo_da = std::chrono::month_day(std::chrono::February, 29d);
    std::cout << static_cast<unsigned>(mo_da.day()) << '/' 
              << static_cast<unsigned>(mo_da.month()) << '\n';
}
```

## See also
- [operator/](/cpp/chrono/operator_slash/)
