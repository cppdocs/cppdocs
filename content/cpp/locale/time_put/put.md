---
title: "std::time_put<CharT,OutputIt>::put, std::time_put<CharT,OutputIt>::do_put"
source_path: "cpp/locale/time_put/put"
header: "<locale>"
category: "locale"
---

Converts the calendar date and time stored in the [std::tm](/cpp/chrono/c/tm/) object pointed to by t into a character string, according to the [format string](#Format_string) [fmtbeg, fmtend). The format string is the same as used by [std::strftime](/cpp/chrono/c/strftime/), but each format specifier is processed by an individual call to do_put(), which can be customized by extending this facet.

## Declarations
```cpp
public:
iter_type put( iter_type out, std::ios_base& str,
char_type fill, const std::tm* t,
const CharT* fmtbeg, const CharT* fmtend ) const;
```

```cpp
public:
iter_type put( iter_type out, std::ios_base& str,
char_type fill, const std::tm* t,
char format, char modifier = 0 ) const;
```

```cpp
protected:
virtual iter_type do_put( iter_type out, std::ios_base& str,
char_type fill, const std::tm* t,
char format, char modifier ) const;
```

## Parameters
- `out`: output iterator where the result of the conversion is written
- `str`: a stream object that this function uses to obtain locale facets when needed, e.g. std::ctype to narrow characters
- `t`: pointer to the std::tm object from which the date/time values are obtained
- `fmtbeg`: pointer to the first character of a sequence of char_type characters specifying the conversion format
- `fmtend`: pointer one past the last character of a sequence of char_type characters specifying the conversion format
- `fill`: fill character (usually space)
- `format`: the character that names a conversion specifier
- `modifier`: the optional modifier that may appear between % and the conversion specifier

## Return value
Iterator pointing one past the last character that was produced.

## Notes
No error handling is provided.

The fill character is provided for those implementation-defined format specifiers and for the user-defined overrides of do_put() that use padding and filling logic. Such implementations typically make use of the formatting flags from str.

## Example
```cpp
#include <iostream>
#include <sstream>
#include <iomanip>
#include <ctime>
 
void try_time_put(const std::tm* t, const std::string& fmt)
{
    std::cout.imbue(std::locale());
    std::cout << "In the locale '" << std::cout.getloc().name() << "' : '";
 
    std::use_facet<std::time_put<char>>(std::cout.getloc()).put(
        {std::cout}, std::cout, ' ', t, &fmt[0], &fmt[0] + fmt.size());
 
    std::cout << "'\n";
}
 
int main()
{
    std::time_t t = std::time(NULL);
    std::tm tm = *std::localtime(&t);
 
    std::string fmt = "%c";
    std::cout << "Using the format string '" << fmt
              << "' to format the time: " << std::ctime(&t) << '\n';
 
    std::locale::global(std::locale("de_DE.utf8"));
    try_time_put(&tm, fmt);
 
    std::locale::global(std::locale("el_GR.utf8"));
    try_time_put(&tm, fmt);
 
    std::locale::global(std::locale("ja_JP.utf8"));
    try_time_put(&tm, fmt);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 164 | C++98 | the purpose of the parameter fill was not clear | made clear |

## See also
- [put_time](/cpp/io/manip/put_time/)
- [do_get](/cpp/locale/time_get/get/)
