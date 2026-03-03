---
title: "std::chrono::duration<Rep,Period>::duration"
source_path: "cpp/chrono/duration/duration"
category: "chrono"
since: "C++11"
---

Constructs a new duration from one of several optional data sources.

## Declarations
```cpp
constexpr duration() = default;
```
_(since C++11)_

```cpp
duration( const duration& ) = default;
```
_(since C++11)_

```cpp
template< class Rep2 >
constexpr explicit duration( const Rep2& r );
```
_(since C++11)_

```cpp
template< class Rep2, class Period2 >
constexpr duration( const duration<Rep2, Period2>& d );
```
_(since C++11)_

## Parameters
- `r`: a tick count
- `d`: a duration to copy from

## Example
```cpp
#include <chrono>
 
int main()
{
    std::chrono::hours h(1); // one hour
    std::chrono::milliseconds ms{3}; // 3 milliseconds
    std::chrono::duration<int, std::kilo> ks(3); // 3000 seconds
 
    // error: treat_as_floating_point<int>::value == false,
    // This duration allows whole tick counts only
//  std::chrono::duration<int, std::kilo> d3(3.5);
 
    // 30Hz clock using fractional ticks
    std::chrono::duration<double, std::ratio<1, 30>> hz30(3.5);
 
    // 3000 microseconds constructed from 3 milliseconds
    std::chrono::microseconds us = ms;
    // error: 1/1000000 is not divisible by 1/1000
//  std::chrono::milliseconds ms2 = us
    std::chrono::duration<double, std::milli> ms2 = us; // 3.0 milliseconds
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2094 | C++11 | for overload (4), std::ratio_divide<Period2, period>::nummight overflow when evaluatingstd::ratio_divide<Period2, period>::den | overload (4) does notparticipate in overloadresolution in this case |
| LWG 3050 | C++11 | convertibility constraint used non-const xvalue | use const lvalues instead |

## See also
- [operator=](/cpp/chrono/duration/operator/)
