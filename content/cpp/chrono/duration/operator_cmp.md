---
title: "operator==,!=,<,<=,>,>=,<=>(std::chrono::duration)"
source_path: "cpp/chrono/duration/operator_cmp"
category: "chrono"
since: "C++11"
---

Compares two durations. Let CT be [std::common_type](/cpp/types/common_type/)<[std::chrono::duration](/cpp/chrono/duration/)<Rep1, Period1>, [std::chrono::duration](/cpp/chrono/duration/)<Rep2, Period2>>::type:

## Declarations
```cpp
template< class Rep1, class Period1, class Rep2, class Period2 >
constexpr bool operator==( const std::chrono::duration<Rep1, Period1>& lhs,
const std::chrono::duration<Rep2, Period2>& rhs );
```
_(since C++11)_

```cpp
template< class Rep1, class Period1, class Rep2, class Period2 >
constexpr bool operator!=( const std::chrono::duration<Rep1, Period1>& lhs,
const std::chrono::duration<Rep2, Period2>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class Rep1, class Period1, class Rep2, class Period2 >
constexpr bool operator<( const std::chrono::duration<Rep1, Period1>& lhs,
const std::chrono::duration<Rep2, Period2>& rhs );
```
_(since C++11)_

```cpp
template< class Rep1, class Period1, class Rep2, class Period2 >
constexpr bool operator<=( const std::chrono::duration<Rep1, Period1>& lhs,
const std::chrono::duration<Rep2, Period2>& rhs );
```
_(since C++11)_

```cpp
template< class Rep1, class Period1, class Rep2, class Period2 >
constexpr bool operator>( const std::chrono::duration<Rep1, Period1>& lhs,
const std::chrono::duration<Rep2, Period2>& rhs );
```
_(since C++11)_

```cpp
template< class Rep1, class Period1, class Rep2, class Period2 >
constexpr bool operator>=( const std::chrono::duration<Rep1, Period1>& lhs,
const std::chrono::duration<Rep2, Period2>& rhs );
```
_(since C++11)_

```cpp
template< class Rep1, class Period1, class Rep2, class Period2 >
requires std::three_way_comparable<std::common_type_t<Rep1, Rep2>>
constexpr auto operator<=>( const std::chrono::duration<Rep1, Period1>& lhs,
const std::chrono::duration<Rep2, Period2>& rhs );
```
_(since C++20)_

## Parameters
- `lhs`: duration on the left-hand side of the operator
- `rhs`: duration on the right-hand side of the operator

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    constexpr auto t1 = std::chrono::seconds(2);
    constexpr auto t2 = std::chrono::milliseconds(2000);
 
    if constexpr (t1 == t2)
        std::cout << t1 << " == " << t2 << '\n';
    else
        std::cout << t1 << " != " << t2 << '\n';
 
    constexpr auto t3 = std::chrono::seconds(61);
    constexpr auto t4 = std::chrono::minutes(1);
 
    if constexpr (t3 > t4)
        std::cout << t3 << " > " << t4 << '\n';
    else
        std::cout << t3 << " <= " << t4 << '\n';
 
    using namespace std::chrono_literals;
 
    static_assert(1h == 60min);
    static_assert(1min == 60s);
    static_assert(1s == 1'000ms);
    static_assert(1ms == 1'000us);
    static_assert(1us == 1'000ns);
}
```
