---
title: "std::common_type<std::chrono::duration>"
source_path: "cpp/chrono/duration/common_type"
header: "<chrono>"
category: "chrono"
since: "C++11"
---

Exposes the type named type, which is the common type of two [std::chrono::duration](/cpp/chrono/duration/)s, whose period is the greatest common divisor of Period1 and Period2.

## Declarations
```cpp
template< class Rep1, class Period1, class Rep2, class Period2 >
struct common_type<std::chrono::duration<Rep1, Period1>,
std::chrono::duration<Rep2, Period2>>;
```
_(since C++11)_

## Example
```cpp
#include <chrono>
#include <iostream>
#include <type_traits>
 
// std::chrono already finds the greatest common divisor,
// likely using std::common_type<>. We make the type
// deduction externally. 
 
template<typename T,typename S>
constexpr auto durationDiff(const T& t, const S& s)
    -> typename std::common_type<T,S>::type
{
    typedef typename std::common_type<T,S>::type Common;
    return Common(t) - Common(s);
}
 
int main() 
{
    using namespace std::literals;
 
    constexpr auto ms = 30ms;
    constexpr auto us = 1100us;
    constexpr auto diff = durationDiff(ms, us);
 
    std::cout << ms << " - " << us << " = " << diff << '\n';
}
```

## See also
- [std::common_type<std::chrono::time_point>](/cpp/chrono/time_point/common_type/)
- [std::common_type](/cpp/types/common_type/)
- [common_type](/cpp/types/common_type/)
