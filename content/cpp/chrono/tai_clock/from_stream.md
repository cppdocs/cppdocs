---
title: "std::chrono::from_stream (std::chrono::tai_time)"
source_path: "cpp/chrono/tai_clock/from_stream"
category: "chrono"
since: "C++20"
---

Attempts to parse the input stream is into the time point tp according to the format string fmt.

## Declarations
```cpp
template< class CharT, class Traits, class Duration, class Alloc = std::allocator<CharT> >
std::basic_istream<CharT, Traits>&
from_stream( std::basic_istream<CharT, Traits>& is, const CharT* fmt,
std::chrono::tai_time<Duration>& tp,
std::basic_string<CharT, Traits, Alloc>* abbrev = nullptr,
std::chrono::minutes* offset = nullptr );
```
_(since C++20)_

## Parameters
- `is`: an input stream
- `fmt`: a format string (see below)
- `tp`: time point object to hold the parse result
- `abbrev`: if not null, pointer to an object that will hold the time zone abbreviation or name corresponding to the %Z specifier
- `offset`: if not null, pointer to an object that will hold the offset from UTC corresponding to the %z specifier

## Return value
is

## Example
This section is incompleteReason: no example

## See also
- [parse](/cpp/chrono/parse/)
