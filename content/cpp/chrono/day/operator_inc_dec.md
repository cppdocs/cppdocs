---
title: "std::chrono::day::operator++, std::chrono::day::operator--"
source_path: "cpp/chrono/day/operator"
category: "chrono"
since: "C++20"
---

Adds or subtracts 1 from the day value.

## Declarations
```cpp
constexpr std::chrono::day& operator++() noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::day operator++( int ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::day& operator--() noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::day operator--( int ) noexcept;
```
_(since C++20)_

## Notes
If the result would be outside the range [0,255], the actual stored value is unspecified.

## Example
```cpp
#include <cassert>
#include <chrono>
 
int main()
{
    std::chrono::day d{15};
 
    ++d;
    assert(d == std::chrono::day(16));
 
    --d;
    assert(d == std::chrono::day(15));
}
```

## See also
- [operator+=operator-=](/cpp/chrono/day/operator_arith/)
- [operator+operator-](/cpp/chrono/day/operator_arith_2/)
