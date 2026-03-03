---
title: "std::match_results<BidirIt,Alloc>::format"
source_path: "cpp/regex/match_results/format"
category: "regex"
since: "C++11"
---

format outputs a format string, replacing any format specifiers or escape sequences in that string with match data from *this.

## Declarations
```cpp
template< class OutputIt >
OutputIt format( OutputIt out,
const char_type* fmt_first, const char_type* fmt_last,
std::regex_constants::match_flag_type flags =
std::regex_constants::format_default ) const;
```
_(since C++11)_

```cpp
template< class OutputIt, class ST, class SA >
OutputIt format( OutputIt out,
const basic_string<char_type,ST,SA>& fmt,
std::regex_constants::match_flag_type flags =
std::regex_constants::format_default ) const;
```
_(since C++11)_

```cpp
template< class ST, class SA >
std::basic_string<char_type,ST,SA>
format( const std::basic_string<char_type,ST,SA>& fmt,
std::regex_constants::match_flag_type flags =
std::regex_constants::format_default ) const;
```
_(since C++11)_

```cpp
string_type format( const char_type* fmt_s,
std::regex_constants::match_flag_type flags =
std::regex_constants::format_default ) const;
```
_(since C++11)_

## Parameters
- `fmt_begin, fmt_end`: pointers to a range of characters defining the format character sequence
- `fmt`: std::basic_string defining the format character sequence
- `fmt_s`: pointer to a null-terminated character string defining the format character sequence
- `out`: iterator that the resulting character sequence is copied to
- `flags`: std::regex_constants::match_flag_type bitmask specifying which format specifiers and escape sequences are recognized

## Example
```cpp
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    std::string s = "for a good time, call 867-5309";
    std::regex phone_regex("\\d{3}-\\d{4}");
    std::smatch phone_match;
 
    if (std::regex_search(s, phone_match, phone_regex))
    {
        std::string fmt_s = phone_match.format(
            "$`"   // $` means characters before the match
            "[$&]" // $& means the matched characters
            "$'"); // $' means characters following the match
        std::cout << fmt_s << '\n';
    }   
}
```

## See also
- [regex_replace](/cpp/regex/regex_replace/)
- [match_flag_type](/cpp/regex/match_flag_type/)
