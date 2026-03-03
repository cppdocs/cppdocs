---
title: "Deduction guides for std::chrono::zoned_time"
source_path: "cpp/chrono/zoned_time/deduction_guides"
category: "chrono"
since: "C++20"
---

These deduction guides normalize Duration to a minimum resolution of [std::chrono::seconds](/cpp/chrono/duration/), and provide correct handling for time zone names specified using types convertible to [std::string_view](/cpp/string/basic_string_view/).

## Declarations
```cpp
zoned_time() -> zoned_time<std::chrono::seconds>;
```
_(since C++20)_

```cpp
template< class Duration >
zoned_time( std::chrono::sys_time<Duration> )
-> zoned_time<std::common_type_t<Duration, std::chrono::seconds>>;
```
_(since C++20)_

```cpp
template< class TimeZonePtrOrName >
zoned_time( TimeZonePtrOrName&& ) -> zoned_time<std::chrono::seconds, /* see below */>;
```
_(since C++20)_

```cpp
template< class TimeZonePtrOrName, class Duration >
zoned_time( TimeZonePtrOrName&&, std::chrono::sys_time<Duration> )
-> zoned_time<std::common_type_t<Duration, std::chrono::seconds>, /* see below */>;
```
_(since C++20)_

```cpp
template< class TimeZonePtrOrName, class Duration >
zoned_time( TimeZonePtrOrName&&, std::chrono::local_time<Duration>,
std::chrono::choose = std::chrono::choose::earliest )
-> zoned_time<std::common_type_t<Duration, std::chrono::seconds>, /* see below */>;
```
_(since C++20)_

```cpp
template< class TimeZonePtrOrName, class Duration, class TimeZonePtr2 >
zoned_time( TimeZonePtrOrName&&, std::chrono::zoned_time<Duration, TimeZonePtr2>,
std::chrono::choose = std::chrono::choose::earliest )
-> zoned_time<std::common_type_t<Duration, std::chrono::seconds>, /* see below */>;
```
_(since C++20)_
