---
title: "std::chrono::abs(std::chrono::duration)"
source_path: "cpp/chrono/duration/abs"
header: "<chrono>"
category: "chrono"
since: "C++17"
---

Returns the absolute value of the duration d. Specifically, if d >= d.zero(), return d, otherwise return -d.

## Declarations
```cpp
template< class Rep, class Period >
constexpr std::chrono::duration<Rep, Period> abs( std::chrono::duration<Rep, Period> d );
```
_(since C++17)_

## Parameters
- `d`: duration

## Return value
Absolute value of d.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::chrono;
 
    static_assert(abs(-42s) == std::chrono::abs(42s));
 
    std::cout << "abs(+3min) = " << abs(3min).count() << '\n'
              << "abs(-3min) = " << abs(-3min).count() << '\n';
}
```

## See also
- [operator+operator-](/cpp/chrono/duration/operator_arith/)
- [abs(int)labsllabs](/cpp/numeric/math/abs/)
