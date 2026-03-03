---
title: "std::chrono::from_stream (std::chrono::duration)"
source_path: "cpp/chrono/duration/from_stream"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Attempts to parse the input stream is into the [std::chrono::duration](/cpp/chrono/duration/) d, interpreted as the time of day since midnight, according to the format string fmt.

## Declarations
```cpp
template< class CharT, class Traits, class Rep, class Period,
class Alloc = std::allocator<CharT> >
std::basic_istream<CharT, Traits>&
from_stream( std::basic_istream<CharT, Traits>& is, const CharT* fmt,
std::chrono::duration<Rep, Period>& d,
std::basic_string<CharT, Traits, Alloc>* abbrev = nullptr,
std::chrono::minutes* offset = nullptr );
```
_(since C++20)_

## Parameters
- `is`: an input stream
- `fmt`: a format string (see below)
- `d`: std::chrono::duration object to hold the parse result
- `abbrev`: if not null, pointer to an object that will hold the time zone abbreviation or name corresponding to the %Z specifier
- `offset`: if not null, pointer to an object that will hold the offset from UTC corresponding to the %z specifier

## Return value
is

## Example
```cpp
#include <chrono>
#include <iostream>
#include <locale>
#include <sstream>
 
int main()
{
    std::istringstream is{"16:14:34"};
    is.imbue(std::locale("en_US.utf-8"));
    std::chrono::hours hh;
    is >> std::chrono::from_stream("%H:%M:%S", hh);
    is.fail() ? std::cout << "Parse failed!\n" : std::cout << hh.count() << '\n';
}
```

## See also
- [parse](/cpp/chrono/parse/)
