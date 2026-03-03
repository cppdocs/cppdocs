---
title: "std::timespec"
source_path: "cpp/chrono/c/timespec"
header: "<ctime>"
category: "chrono"
since: "C++17"
---

Structure holding an interval broken down into seconds and nanoseconds.

## Declarations
```cpp
struct timespec;
```
_(since C++17)_

## Notes
The type of tv_nsec is long long on some platforms, which is currently non-conforming in C++, but is allowed in C since C23.

## Example
```cpp
#include <ctime>
#include <iostream>
 
int main()
{
    std::timespec ts;
    std::timespec_get(&ts, TIME_UTC);
    char buff[0x80];
    std::strftime(buff, sizeof buff, "%D %T", std::gmtime(&ts.tv_sec));
 
//  auto [sec, nsec] = ts; // UB: structured bindings should not be used because the
                           // declaration order and data member list are unspecified
 
    std::cout << "Current time: " << buff << " (UTC)\n"
              << "Raw timespec.tv_sec: " << ts.tv_sec << '\n'
              << "Raw timespec.tv_nsec: " << ts.tv_nsec << '\n';
}
```

## See also
- [timespec_get](/cpp/chrono/c/timespec_get/)
- [tm](/cpp/chrono/c/tm/)
- [C documentation](/c/chrono/timespec/)
