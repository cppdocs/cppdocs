---
title: "std::chrono::operator==(std::chrono::weekday)"
source_path: "cpp/chrono/weekday/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compare the two std::chrono::weekday x and y.

## Declarations
```cpp
constexpr bool operator==( const std::chrono::weekday& x,
const std::chrono::weekday& y ) noexcept;
```
_(since C++20)_

## Return value
x.c_encoding() == y.c_encoding()

## Notes
weekday does not support the <, <=, > and >= operators because there is no universal consensus on which day is the first day of the week.

## Example
```cpp
#include <chrono>
 
int main()
{
    using namespace std::literals;
 
    constexpr std::chrono::weekday wd1{2};
    constexpr std::chrono::weekday wd2{std::chrono::Friday};
    static_assert(wd1 != wd2);
 
    // 13 January 1313 is a Friday
    constexpr std::chrono::weekday wd3{1313y/1/13d};
    static_assert(wd2 == wd3);
}
```
