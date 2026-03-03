---
title: "std::time_get<CharT,InputIt>::get, std::time_get<CharT,InputIt>::do_get"
source_path: "cpp/locale/time_get/get"
header: "<locale>"
category: "locale"
since: "C++11"
---

1) Parses the date and time from the input character sequence [beg, end) according to the format provided in the character sequence [fmtbeg, fmtend). The format is expected to follow the format described below, although actual processing of each format specifier can be customized by overriding do_get. The get function performs the following:
First, clears the error bits in err by executing err = [std::ios_base::goodbit](/cpp/io/ios_base/iostate/). Then enters a loop, which terminates whenever any of the following conditions becomes true (checked in this order):

## Declarations
```cpp
public:
iter_type get( iter_type beg, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, std::tm* t,
const char_type* fmtbeg, const char_type* fmtend ) const;
```
_(since C++11)_

```cpp
protected:
virtual iter_type do_get( iter_type beg, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, std::tm *t,
char format, char modifier ) const;
```
_(since C++11)_

## Parameters
- `beg`: iterator designating the start of the sequence to parse
- `end`: one past the end iterator for the sequence to parse
- `str`: a stream object that this function uses to obtain locale facets when needed, e.g. std::ctype to skip whitespace or std::collate to compare strings
- `err`: stream error flags object that is modified by this function to indicate errors
- `t`: pointer to the std::tm object that will hold the result of this function call
- `fmtbeg`: pointer to the first character of a sequence of char_type characters specifying the conversion format (see below)
- `fmtend`: pointer one past the last character of a sequence of char_type characters specifying the conversion format
- `format`: the character that names a conversion specifier
- `modifier`: the optional modifier that may appear between % and the conversion specifier

## Return value
Iterator pointing one past the last character in [beg, end) that was parsed successfully.

## Notes
The case-insensitive comparison for the non-whitespace non-'%' characters in the format string, the [std::collate](/cpp/locale/collate/) facet of the locale provided by str is typically, but not necessarily, used.

If a parsing error is encountered, many implementations of this function leave *t completely untouched.

It's unspecified if these functions zero out the fields in *t that they do not set directly: portable programs should initialize every field to zero before calling get().

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <locale>
#include <sstream>
 
int main()
{
    std::istringstream ss("2026-März-12 23:45:56");
    ss.imbue(std::locale("de_DE.utf8"));
 
    auto& f = std::use_facet<std::time_get<char>>(ss.getloc());
    std::tm t{};
    std::string s = "%Y-%b-%d %H:%M:%S";
    std::ios_base::iostate err = std::ios_base::goodbit;
    auto ret = f.get({ss}, {}, ss, err, &t, &s[0], &s[0] + s.size());
    ss.setstate(err);
    std::istreambuf_iterator<char> last{};
 
    if (ss)
    {
        std::cout << "Successfully parsed as " << std::put_time(&t, "%c") << '\n';
        if (ret != last)
        {
            std::cout << "Remaining content: ";
            std::copy(ret, last, std::ostreambuf_iterator<char>(std::cout));
        }
        else
            std::cout << "The input was fully consumed.";
    }
    else
    {
        std::cout << "Parse failed.\nUnparsed string: ";
        std::copy(ret, last, std::ostreambuf_iterator<char>(std::cout));
    }
    std::cout << '\n';
}
```

## See also
- [get_time](/cpp/io/manip/get_time/)
