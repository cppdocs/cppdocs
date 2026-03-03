---
title: "operator+,-,*,/,%(std::chrono::duration)"
source_path: "cpp/chrono/duration/operator"
category: "chrono"
since: "C++11"
---

Performs basic arithmetic operations between two durations or between a duration and a tick count.

## Declarations
```cpp
template< class Rep1, class Period1, class Rep2, class Period2 >
typename std::common_type<duration<Rep1,Period1>, duration<Rep2,Period2>>::type
constexpr operator+( const duration<Rep1,Period1>& lhs,
const duration<Rep2,Period2>& rhs );
```
_(since C++11)_

```cpp
template< class Rep1, class Period1, class Rep2, class Period2 >
typename std::common_type<duration<Rep1,Period1>, duration<Rep2,Period2>>::type
constexpr operator-( const duration<Rep1,Period1>& lhs,
const duration<Rep2,Period2>& rhs );
```
_(since C++11)_

```cpp
template< class Rep1, class Period, class Rep2 >
duration<typename std::common_type<Rep1,Rep2>::type, Period>
constexpr operator*( const duration<Rep1,Period>& d,
const Rep2& s );
```
_(since C++11)_

```cpp
template< class Rep1, class Rep2, class Period >
duration<typename std::common_type<Rep1,Rep2>::type, Period>
constexpr operator*( const Rep1& s,
const duration<Rep2,Period>& d );
```
_(since C++11)_

```cpp
template< class Rep1, class Period, class Rep2 >
duration<typename std::common_type<Rep1,Rep2>::type, Period>
constexpr operator/( const duration<Rep1,Period>& d,
const Rep2& s );
```
_(since C++11)_

```cpp
template< class Rep1, class Period1, class Rep2, class Period2 >
typename std::common_type<Rep1,Rep2>::type
constexpr operator/( const duration<Rep1,Period1>& lhs,
const duration<Rep2,Period2>& rhs );
```
_(since C++11)_

```cpp
template< class Rep1, class Period, class Rep2 >
duration<typename std::common_type<Rep1,Rep2>::type, Period>
constexpr operator%( const duration<Rep1, Period>& d,
const Rep2& s );
```
_(since C++11)_

```cpp
template< class Rep1, class Period1, class Rep2, class Period2 >
typename std::common_type<duration<Rep1,Period1>, duration<Rep2,Period2>>::type
constexpr operator%( const duration<Rep1,Period1>& lhs,
const duration<Rep2,Period2>& rhs );
```
_(since C++11)_

## Parameters
- `lhs`: duration on the left-hand side of the operator
- `rhs`: duration on the right-hand side of the operator
- `d`: the duration argument for mixed-argument operators
- `s`: non-duration argument for mixed-argument operators

## Return value
Assuming that CD is the function return type and CD<A, B> = [std::common_type](/cpp/types/common_type/)<A, B>::type, then:

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    // Simple arithmetic:
    std::chrono::seconds s = std::chrono::hours(1)
                           + 2 * std::chrono::minutes(10)
                           + std::chrono::seconds(70) / 10;
    std::cout << "1 hour + 2*10 min + 70/10 sec = " << s << " (seconds)\n";
 
    using namespace std::chrono_literals;
 
    // Difference between dividing a duration by a number
    // and dividing a duration by another duration:
    std::cout << "Dividing that by 2 minutes gives "
              << s / 2min << '\n'
              << "Dividing that by 2 gives "
              << (s / 2).count() << " seconds\n";
 
    // The remainder operator is useful in determining where
    // in a time frame is this particular duration, e.g. to
    // break it down into hours, minutes, and seconds:
    std::cout << s << " (seconds) = "
              << std::chrono::duration_cast<std::chrono::hours>(
                 s) << " (hour) + "
              << std::chrono::duration_cast<std::chrono::minutes>(
                 s % 1h) << " (minutes) + "
              << std::chrono::duration_cast<std::chrono::seconds>(
                 s % 1min) << " (seconds)\n";
 
    constexpr auto sun_earth_distance{150'000'000ULL}; // km
    constexpr auto speed_of_light{300000ULL}; // km/sec
    std::chrono::seconds t(sun_earth_distance / speed_of_light); // sec
    std::cout << "A photon flies from the Sun to the Earth in "
              << t / 1min << " minutes " << t % 1min << " (seconds)\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3050 | C++11 | convertibility constraint used non-const xvalue | use const lvalues instead |
