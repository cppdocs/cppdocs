---
title: "std::chrono::parse"
source_path: "cpp/chrono/parse"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Returns an object manip of unspecified type such that, given a [std::basic_istream](/cpp/io/basic_istream/)<CharT, Traits> object is, the expression is >> manip calls from_stream (unqualified, to enable [argument-dependent lookup](/cpp/language/adl/)) as follows:

## Declarations
```cpp
template< class CharT, class Parsable >
/* unspecified */ parse( const CharT* fmt, Parsable& tp );
```
_(since C++20)_

```cpp
template< class CharT, class Traits, class Alloc, class Parsable >
/* unspecified */ parse( const std::basic_string<CharT, Traits, Alloc>& fmt,
Parsable& tp );
```
_(since C++20)_

```cpp
template< class CharT, class Traits, class Alloc, class Parsable >
/* unspecified */ parse( const CharT* fmt, Parsable& tp,
std::basic_string<CharT, Traits, Alloc>& abbrev );
```
_(since C++20)_

```cpp
template< class CharT, class Traits, class Alloc, class Parsable >
/* unspecified */ parse( const std::basic_string<CharT, Traits, Alloc>& fmt,
Parsable& tp,
std::basic_string<CharT, Traits, Alloc>& abbrev );
```
_(since C++20)_

```cpp
template< class CharT, class Parsable >
/* unspecified */ parse( const CharT* fmt, Parsable& tp,
std::chrono::minutes& offset );
```
_(since C++20)_

```cpp
template< class CharT, class Traits, class Alloc, class Parsable >
/* unspecified */ parse( const std::basic_string<CharT, Traits, Alloc>& fmt,
Parsable& tp, std::chrono::minutes& offset );
```
_(since C++20)_

```cpp
template< class CharT, class Traits, class Alloc, class Parsable >
/* unspecified */ parse( const CharT* fmt, Parsable& tp,
std::basic_string<CharT, Traits, Alloc>& abbrev,
std::chrono::minutes& offset );
```
_(since C++20)_

```cpp
template< class CharT, class Traits, class Alloc, class Parsable >
/* unspecified */ parse( const std::basic_string<CharT, Traits, Alloc>& fmt,
Parsable& tp,
std::basic_string<CharT, Traits, Alloc>& abbrev,
std::chrono::minutes& offset );
```
_(since C++20)_

## Parameters
- `fmt`: a format string (see below)
- `tp`: object to hold the parse result
- `abbrev`: string to hold the time zone abbreviation or name corresponding to the %Z specifier
- `offset`: duration to represent the offset from UTC corresponding to the %z specifier

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3554 | C++20 | overloads for plain null-terminated character type sequences were missing | added |

## See also
- [from_stream(std::chrono::sys_time)](/cpp/chrono/system_clock/from_stream/)
- [from_stream(std::chrono::utc_time)](/cpp/chrono/utc_clock/from_stream/)
- [from_stream(std::chrono::tai_time)](/cpp/chrono/tai_clock/from_stream/)
- [from_stream(std::chrono::gps_time)](/cpp/chrono/gps_clock/from_stream/)
- [from_stream(std::chrono::file_time)](/cpp/chrono/file_clock/from_stream/)
- [from_stream(std::chrono::local_time)](/cpp/chrono/local_t/from_stream/)
- [from_stream](/cpp/chrono/year/from_stream/)
- [from_stream](/cpp/chrono/month/from_stream/)
- [from_stream](/cpp/chrono/day/from_stream/)
- [from_stream](/cpp/chrono/weekday/from_stream/)
- [from_stream](/cpp/chrono/month_day/from_stream/)
- [from_stream](/cpp/chrono/year_month/from_stream/)
- [from_stream](/cpp/chrono/year_month_day/from_stream/)
- [get_time](/cpp/io/manip/get_time/)
