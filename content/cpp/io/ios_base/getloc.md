---
title: "std::ios_base::getloc"
source_path: "cpp/io/ios_base/getloc"
category: "io"
---

Returns the current locale associated with the stream.

## Declarations
```cpp
std::locale getloc() const;
```

## Return value
The locale object associated with the stream.

## Example
```cpp
#include <codecvt>
#include <ctime>
#include <iomanip>
#include <iostream>
 
int main()
{
    std::wbuffer_convert<std::codecvt_utf8<wchar_t>> conv(std::cout.rdbuf());
    std::wostream out(&conv);
 
    out.imbue(std::locale(out.getloc(),
                          new std::time_put_byname<wchar_t>("ja_JP.utf8")));
 
    std::time_t t = std::time(nullptr);
    out << std::put_time(std::localtime(&t), L"%A %c") << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 47 | C++98 | the return value was misspecified as the return value of imbue() | corrected |

## See also
- [imbue](/cpp/io/ios_base/imbue/)
