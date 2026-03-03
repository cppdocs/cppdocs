---
title: "std::time_get<CharT,InputIt>::get_monthname, std::time_get<CharT,InputIt>::do_get_monthname"
source_path: "cpp/locale/time_get/get_monthname"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the protected virtual member function do_get_monthname of the most derived class.

## Declarations
```cpp
public:
iter_type get_monthname( iter_type beg, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, std::tm* t ) const;
```

```cpp
protected:
virtual iter_type do_get_monthname( iter_type beg, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, std::tm* t ) const;
```

## Parameters
- `beg`: iterator designating the start of the sequence to parse
- `end`: one past the end iterator for the sequence to parse
- `str`: a stream object that this function uses to obtain locale facets when needed, e.g. std::ctype to skip whitespace or std::collate to compare strings
- `err`: stream error flags object that is modified by this function to indicate errors
- `t`: pointer to the std::tm object that will hold the result of this function call

## Return value
Iterator pointing one past the last character in [beg,end) that was recognized as a part of a valid month name.

## Notes
This function is usually case-insensitive.

If a parsing error is encountered, most implementations of this function leave *t unmodified.

## Example
```cpp
#include <ctime>
#include <iostream>
#include <iterator>
#include <locale>
#include <sstream>
#include <string_view>
 
void try_get_mon(std::string_view locale_name, std::string_view source)
{
    try
    {
        std::locale::global(std::locale(locale_name.data()));
    }
    catch (std::runtime_error const& ex)
    {
        std::cout << "Cannot setup locale: " << locale_name << "\n"
                     "Exception: " << ex.what() << '\n';
        return;
    }
 
    std::cout << "Parsing the month out of '" << source
              << "' in the locale " << std::locale().name() << '\n';
    std::istringstream str{source.data()};
    std::ios_base::iostate err = std::ios_base::goodbit;
 
    std::tm t;
    std::time_get<char> const& facet = std::use_facet<std::time_get<char>>(str.getloc());
    std::istreambuf_iterator<char> ret = facet.get_monthname({str}, {}, str, err, &t);
    str.setstate(err);
    std::istreambuf_iterator<char> last{};
 
    if (str)
    {
        std::cout << "Successfully parsed, month number is " << t.tm_mon;
 
        if (ret != last)
        {
            std::cout << ". Remaining content: ";
            std::copy(ret, last, std::ostreambuf_iterator<char>(std::cout));
        }
        else
            std::cout << ". The input was fully consumed";
    }
    else
    {
        std::cout << "Parse failed. Unparsed string: ";
        std::copy(ret, last, std::ostreambuf_iterator<char>(std::cout));
    }
 
    std::cout << '\n';
}
 
int main()
{
    try_get_mon("ja_JP.utf8", "2月");
    try_get_mon("th_TH.utf8", "กุมภาพันธ์");
    try_get_mon("el_GR.utf8", "Φεβ");
    try_get_mon("el_GR.utf8", "Φεβρουάριος");
    try_get_mon("en_US.utf8", "Febrile");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 248 | C++98 | eofbit was not set upon reaching the end iterator | sets eofbit if a valid month name has not been read |

## See also
- [get_time](/cpp/io/manip/get_time/)
