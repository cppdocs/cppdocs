---
title: "std::chrono::zoned_time<Duration,TimeZonePtr>::zoned_time"
source_path: "cpp/chrono/zoned_time/zoned_time"
category: "chrono"
since: "C++20"
---

Constructs a zoned_time object, initializing the stored time zone pointer and time point according to the following table, where traits is [std::chrono::zoned_traits](/cpp/chrono/zoned_traits/)<TimeZonePtr>:

## Declarations
```cpp
zoned_time();
```
_(since C++20)_

```cpp
zoned_time( const std::chrono::sys_time<Duration>& st );
```
_(since C++20)_

```cpp
zoned_time( const zoned_time& other ) = default;
```
_(since C++20)_

```cpp
template< class Duration2 >
zoned_time( const std::chrono::zoned_time<Duration2, TimeZonePtr>& other );
```
_(since C++20)_

```cpp
explicit zoned_time( TimeZonePtr z );
```
_(since C++20)_

```cpp
explicit zoned_time( std::string_view name );
```
_(since C++20)_

```cpp
zoned_time( TimeZonePtr z, const std::chrono::sys_time<Duration>& st );
```
_(since C++20)_

```cpp
zoned_time( std::string_view name, const std::chrono::sys_time<Duration>& st );
```
_(since C++20)_

```cpp
zoned_time( TimeZonePtr z, const std::chrono::local_time<Duration>& tp );
```
_(since C++20)_

```cpp
zoned_time( std::string_view name, const std::chrono::local_time<Duration>& tp );
```
_(since C++20)_

```cpp
zoned_time( TimeZonePtr z, const std::chrono::local_time<Duration>& tp,
std::chrono::choose c );
```
_(since C++20)_

```cpp
zoned_time( std::string_view name,
const std::chrono::local_time<Duration>& tp, std::chrono::choose c );
```
_(since C++20)_

```cpp
template< class Duration2, class TimeZonePtr2 >
zoned_time( TimeZonePtr z,
const std::chrono::zoned_time<Duration2, TimeZonePtr2>& zt );
```
_(since C++20)_

```cpp
template< class Duration2, class TimeZonePtr2 >
zoned_time( TimeZonePtr z,
const std::chrono::zoned_time<Duration2, TimeZonePtr2>& zt,
std::chrono::choose );
```
_(since C++20)_

```cpp
template< class Duration2, class TimeZonePtr2 >
zoned_time( std::string_view name,
const std::chrono::zoned_time<Duration2, TimeZonePtr2>& zt );
```
_(since C++20)_

```cpp
template< class Duration2, class TimeZonePtr2 >
zoned_time( std::string_view name,
const std::chrono::zoned_time<Duration2, TimeZonePtr2>& zt,
std::chrono::choose );
```
_(since C++20)_

## Notes
zoned_time does not have a move constructor and attempting to move one will perform a copy instead using the defaulted copy constructor (3). Thus, when TimeZonePtr is a move-only type, zoned_time is immovable: it can be neither moved nor copied.

The constructors (14,16) accept a std::chrono::choose parameter, but that parameter has no effect.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <string_view>
 
int main()
{
    using std::chrono_literals::operator""y;
    using std::operator""sv;
 
    std::cout << std::chrono::zoned_time{} << " : default\n";
 
    constexpr std::string_view location1{"America/Phoenix"sv};
    std::cout << std::chrono::zoned_time{location1} << " : " << location1 << '\n';
 
    const std::chrono::time_zone* timeZonePtr = std::chrono::locate_zone("UTC");
    std::cout << std::chrono::zoned_time{timeZonePtr} << " : UTC time zone\n";
 
    constexpr auto location2{"Europe/Rome"sv};
    std::cout << std::chrono::zoned_time{location2, std::chrono::local_days{2021y/12/31}}
              << " : " << location2 << '\n';
 
    constexpr auto location3{"Europe/Rome"sv};
    constexpr auto some_date = std::chrono::sys_time<std::chrono::days>{2021y/12/31};
    std::cout << std::chrono::zoned_time{location3, some_date}
              << " : " << location3 << '\n';
 
    const auto now =
        std::chrono::floor<std::chrono::minutes>(std::chrono::system_clock::now());
    constexpr auto location4{"Europe/Rome"sv};
    std::cout << std::chrono::zoned_time{location4, now} << " : " << location4 << '\n';
 
    constexpr auto NewYork{"America/New_York"sv};
    constexpr auto Tokyo{"Asia/Tokyo"sv};
    const std::chrono::zoned_time tz_Tokyo{Tokyo, now};
    const std::chrono::zoned_time tz_NewYork{NewYork, now};
    std::cout << std::chrono::zoned_time{Tokyo, tz_NewYork} << " : " << Tokyo << '\n';
    std::cout << std::chrono::zoned_time{NewYork, tz_Tokyo} << " : " << NewYork << '\n';
}
```
