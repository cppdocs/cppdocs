---
title: "std::time_get<CharT,InputIt>::get_year, std::time_get<CharT,InputIt>::do_get_year"
source_path: "cpp/locale/time_get/get_year"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the protected virtual member function do_get_year of the most derived class.

## Declarations
```cpp
public:
iter_type get_year( iter_type s, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, std::tm* t ) const;
```

```cpp
protected:
virtual iter_type do_get_year( iter_type s, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, std::tm* t ) const;
```

## Parameters
- `beg`: iterator designating the start of the sequence to parse
- `end`: one past the end iterator for the sequence to parse
- `str`: a stream object that this function uses to obtain locale facets when needed, e.g. std::ctype to skip whitespace or std::collate to compare strings
- `err`: stream error flags object that is modified by this function to indicate errors
- `t`: pointer to the std::tm object that will hold the result of this function call

## Return value
Iterator pointing one past the last character in [beg,end) that was recognized as a part of a valid year.

## Notes
For two-digit input values, many implementations use the same parsing rules as the conversion specifier '%y' as used by [std::get_time](/cpp/io/manip/get_time/), [std::time_get::get()](/cpp/locale/time_get/get/), and the POSIX function strptime(): two-digit integer is expected, the values in the range [69,99] results in values 1969 to 1999, range [00,68] results in 2000 to 2068. Four-digit inputs are typically accepted as-is.

If a parsing error is encountered, most implementations of this function leave *t unmodified.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <locale>
#include <sstream>
 
void try_get_year(const std::string& s)
{
    std::cout << "Parsing the year out of '" << s
              << "' in the locale " << std::locale().name() << '\n';
    std::istringstream str(s);
    std::ios_base::iostate err = std::ios_base::goodbit;
 
    std::tm t;
    std::time_get<char> const& facet = std::use_facet<std::time_get<char>>(str.getloc());
    std::istreambuf_iterator<char> ret = facet.get_year({str}, {}, str, err, &t);
    str.setstate(err);
    std::istreambuf_iterator<char> last{};
 
    if (str)
    {
        std::cout << "Successfully parsed, year is " << 1900 + t.tm_year;
 
        if (ret != last)
        {
            std::cout << " Remaining content: ";
            std::copy(ret, last, std::ostreambuf_iterator<char>(std::cout));
        }
        else
            std::cout << " the input was fully consumed";
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
    std::locale::global(std::locale("en_US.utf8"));
    try_get_year("13");
    try_get_year("2013");
 
    std::locale::global(std::locale("ja_JP.utf8"));
    try_get_year("2013年");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 248 | C++98 | eofbit was not set upon reaching the end iterator | sets eofbit if a valid year has not been read |

## See also
- [get_time](/cpp/io/manip/get_time/)
