---
title: "std::put_time"
source_path: "cpp/io/manip/put_time"
header: "<iomanip>"
category: "io"
since: "C++11"
---

When used in an expression out << put_time(tmb, fmt), converts the date and time information from a given calendar time tmb to a character string according to [format string](#Format_string) fmt, as if by calling [std::strftime](/cpp/chrono/c/strftime/), [std::wcsftime](/cpp/chrono/c/wcsftime/), or analog (depending on CharT), according to the [std::time_put](/cpp/locale/time_put/) facet of the locale currently imbued in the output stream out.

## Declarations
```cpp
template< class CharT >
/*unspecified*/ put_time( const std::tm* tmb, const CharT* fmt );
```
_(since C++11)_

## Parameters
- `tmb`: pointer to the calendar time structure as obtained from std::localtime or std::gmtime
- `fmt`: pointer to a null-terminated CharT string specifying the format of conversion

## Return value
An object of unspecified type such that

## Example
```cpp
#include <ctime>
#include <iomanip>
#include <iostream>
 
int main()
{
    std::time_t t = std::time(nullptr);
    std::tm tm = *std::localtime(&t);
 
    std::cout.imbue(std::locale("ru_RU.utf8"));
    std::cout << "ru_RU: " << std::put_time(&tm, "%c %Z") << '\n';
 
    std::cout.imbue(std::locale("ja_JP.utf8"));
    std::cout << "ja_JP: " << std::put_time(&tm, "%c %Z") << '\n';
}
```

## See also
- [time_put](/cpp/locale/time_put/)
- [std::tm](/cpp/chrono/c/tm/)
- [get_time](/cpp/io/manip/get_time/)
- [strftime](/cpp/chrono/c/strftime/)
- [std::tm](/cpp/chrono/c/tm/)
- [wcsftime](/cpp/chrono/c/wcsftime/)
- [std::tm](/cpp/chrono/c/tm/)
