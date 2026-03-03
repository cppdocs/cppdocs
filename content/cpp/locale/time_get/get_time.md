---
title: "std::time_get<CharT,InputIt>::get_time, std::time_get<CharT,InputIt>::do_get_time"
source_path: "cpp/locale/time_get/get_time"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the protected virtual member function do_get_time of the most derived class.

## Declarations
```cpp
public:
iter_type get_time( iter_type beg, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, std::tm* t ) const;
```

```cpp
protected:
virtual iter_type do_get_time( iter_type beg, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, std::tm* t ) const;
```

## Parameters
- `beg`: iterator designating the start of the sequence to parse
- `end`: one past the end iterator for the sequence to parse
- `str`: a stream object that this function uses to obtain locale facets when needed, e.g. std::ctype to skip whitespace
- `err`: stream error flags object that is modified by this function to indicate errors
- `t`: pointer to the std::tm object that will hold the result of this function call

## Return value
Iterator pointing one past the last character in [beg,end) that was recognized as a part of a valid date.

## Notes
For the alphabetic components of the default time format (if any), this function is usually case-insensitive.

If a parsing error is encountered, most implementations of this function leave *t unmodified.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <locale>
#include <sstream>
 
void try_get_time(const std::string& s)
{
    std::cout << "Parsing the time out of '" << s
              << "' in the locale " << std::locale().name() << '\n';
    std::istringstream str(s);
    std::ios_base::iostate err = std::ios_base::goodbit;
 
    std::tm t;
    std::time_get<char> const& facet =
        std::use_facet<std::time_get<char>>(str.getloc());
    std::istreambuf_iterator<char> ret =
        facet.get_time({str}, {}, str, err, &t);
    str.setstate(err);
 
    if (str)
    {
        std::cout << "Hours: " << t.tm_hour << ", "
                     "Minutes: " << t.tm_min  << ", "
                     "Seconds: " << t.tm_sec  << '\n';
    }
    else
    {
        std::cout << "Parse failed. Unparsed string: ";
        std::copy(ret, {}, std::ostreambuf_iterator<char>(std::cout));
        std::cout << '\n';
    }
}
 
int main()
{
    std::locale::global(std::locale("ru_RU.utf8"));
    try_get_time("21:40:11");
    try_get_time("21-40-11");
 
    std::locale::global(std::locale("ja_JP.utf8"));
    try_get_time("21時37分58秒");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 248 | C++98 | eofbit was not set upon reaching the end iterator | sets eofbit if a valid time has not been read |
| LWG 461 | C++98 | do_get_time needed to parse localized time representation | parses with "%H:%M:%S" format |

## See also
- [get_time](/cpp/io/manip/get_time/)
