---
title: "std::chrono::from_stream (std::chrono::weekday)"
source_path: "cpp/chrono/weekday/from_stream"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Attempts to parse the input stream is into the std::chrono::weekday wd according to the format string fmt.

## Declarations
```cpp
template< class CharT, class Traits, class Alloc = std::allocator<CharT> >
std::basic_istream<CharT, Traits>&
from_stream( std::basic_istream<CharT, Traits>& is, const CharT* fmt,
std::chrono::weekday& wd,
std::basic_string<CharT, Traits, Alloc>* abbrev = nullptr,
std::chrono::minutes* offset = nullptr );
```
_(since C++20)_

## Parameters
- `is`: an input stream
- `fmt`: a format string (see below)
- `wd`: object to hold the parse result
- `abbrev`: if not null, pointer to an object that will hold the time zone abbreviation or name corresponding to the %Z specifier
- `offset`: if not null, pointer to an object that will hold the offset from UTC corresponding to the %z specifier

## Return value
is

## See also
- [parse](/cpp/chrono/parse/)
