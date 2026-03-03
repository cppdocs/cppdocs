---
title: "std::time_get"
source_path: "cpp/locale/time_get"
header: "<locale>"
category: "locale"
---

Class template std::time_get encapsulates date and time parsing rules. The I/O manipulator [std::get_time](/cpp/io/manip/get_time/) uses the std::time_get facet of the I/O stream's locale to convert text input to a [std::tm](/cpp/chrono/c/tm/) object.

## Declarations
```cpp
template<
class CharT,
class InputIt = std::istreambuf_iterator<CharT>
> class time_get;
```

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <locale>
#include <sstream>
 
int main()
{
    std::tm t = {};
    std::istringstream ss("2011-Februar-18 23:12:34");
    ss.imbue(std::locale("de_DE.utf-8"));
 
    ss >> std::get_time(&t, "%Y-%b-%d %H:%M:%S");
    if (ss.fail())
        std::cout << "Parse failed\n";
    else
        std::cout << std::put_time(&t, "%c") << '\n';
}
```

## See also
- [time_put](/cpp/locale/time_put/)
- [std::tm](/cpp/chrono/c/tm/)
- [get_time](/cpp/io/manip/get_time/)
