---
title: "std::time_put_byname"
source_path: "cpp/locale/time_put_byname"
header: "<locale>"
category: "locale"
---

std::time_put_byname is a [std::time_put](/cpp/locale/time_put/) facet which encapsulates time and date formatting rules of the locale specified at its construction.

## Declarations
```cpp
template<
class CharT,
class OutputIt = std::ostreambuf_iterator<CharT>
> class time_put_byname : public std::time_put<CharT, OutputIt>
```

## Parameters
- `name`: the name of the locale
- `refs`: the number of references that link to the facet

## Example
```cpp
#include <codecvt>
#include <ctime>
#include <iomanip>
#include <iostream>
 
int main()
{
    std::time_t t = std::time(nullptr);
    std::wbuffer_convert<std::codecvt_utf8<wchar_t>> conv(std::cout.rdbuf());
    std::wostream out(&conv);
 
    out.imbue(std::locale(out.getloc(),
                          new std::time_put_byname<wchar_t>("ja_JP.utf8")));
    out << std::put_time(std::localtime(&t), L"%A %c") << '\n';
 
    out.imbue(std::locale(out.getloc(),
                          new std::time_put_byname<wchar_t>("ru_RU.utf8")));
    out << std::put_time(std::localtime(&t), L"%A %c") << '\n';
 
    out.imbue(std::locale(out.getloc(),
                          new std::time_put_byname<wchar_t>("sv_SE.utf8")));
    out << std::put_time(std::localtime(&t), L"%A %c") << '\n';
}
```

## See also
- [time_put](/cpp/locale/time_put/)
- [std::tm](/cpp/chrono/c/tm/)
