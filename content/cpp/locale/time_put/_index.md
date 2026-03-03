---
title: "std::time_put"
source_path: "cpp/locale/time_put"
header: "<locale>"
category: "locale"
---

Class template std::time_put encapsulates date and time formatting rules. The I/O manipulator [std::put_time](/cpp/io/manip/put_time/) uses the std::time_put facet of the I/O stream's locale to generate text representation of an [std::tm](/cpp/chrono/c/tm/) object.

## Declarations
```cpp
template<
class CharT,
class OutputIt = std::ostreambuf_iterator<CharT>
> class time_put;
```

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
    out.imbue(std::locale("ja_JP.utf8"));
 
    // this I/O manipulator std::put_time uses std::time_put<wchar_t>
    out << std::put_time(std::localtime(&t), L"%A %c") << '\n';
}
```

## See also
- [time_put_byname](/cpp/locale/time_put_byname/)
- [time_get](/cpp/locale/time_get/)
- [std::tm](/cpp/chrono/c/tm/)
- [put_time](/cpp/io/manip/put_time/)
