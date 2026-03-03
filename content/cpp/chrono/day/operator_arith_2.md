---
title: "std::chrono::operator+, std::chrono::operator- (std::chrono::day)"
source_path: "cpp/chrono/day/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

1,2) Adds ds.count() days to d.

## Declarations
```cpp
constexpr std::chrono::day operator+( const std::chrono::day& d,
const std::chrono::days& ds ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::day operator+( const std::chrono::days& ds,
const std::chrono::day& d ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::day operator-( const std::chrono::day& d,
const std::chrono::days& ds ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::days operator-( const std::chrono::day& x,
const std::chrono::day& y ) noexcept;
```
_(since C++20)_

## Notes
1-3) If the result would be outside the range [0, 255], the actual stored value is unspecified.

## Example
```cpp
#include <cassert>
#include <chrono>
 
int main()
{
    std::chrono::day d{15};
 
    d = d + std::chrono::days(2);
    assert(d == std::chrono::day(17));
 
    d = d - std::chrono::days(3);
    assert(d == std::chrono::day(14));
 
    constexpr std::chrono::days ds = std::chrono::day(16) - std::chrono::day(14);
    static_assert(ds == std::chrono::days(2));
}
```

## See also
- [operator++operator++(int)operator--operator--(int)](/cpp/chrono/day/operator_inc_dec/)
- [operator+=operator-=](/cpp/chrono/day/operator_arith/)
