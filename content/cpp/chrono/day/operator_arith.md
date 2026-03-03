---
title: "std::chrono::day::operator+=, std::chrono::day::operator-="
source_path: "cpp/chrono/day/operator"
aliases:
  - "/cpp/chrono/day/operator/"
category: "chrono"
since: "C++20"
---

Adds or subtracts d.count() days from the day value.

## Declarations
```cpp
constexpr std::chrono::day& operator+=( const std::chrono::days& d ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::day& operator-=( const std::chrono::days& d ) noexcept;
```
_(since C++20)_

## Return value
A reference to this day after modification.

## Notes
If the result would be outside the range [0,255], the actual stored value is unspecified.

## Example
```cpp
#include <cassert>
#include <chrono>
 
int main()
{
    std::chrono::day d{15};
 
    d += std::chrono::days(2);
    assert(d == std::chrono::day(17));
 
    d -= std::chrono::days{3};
    assert(d == std::chrono::day(14));
}
```

## See also
- [operator++operator++(int)operator--operator--(int)](/cpp/chrono/day/operator_inc_dec/)
- [operator+operator-](/cpp/chrono/day/operator_arith_2/)
