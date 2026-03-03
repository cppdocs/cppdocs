---
title: "std::tm"
source_path: "cpp/chrono/c/tm"
header: "<ctime>"
category: "chrono"
---

Structure holding a calendar date and time broken down into its components.

## Declarations
```cpp
struct tm;
```

## Notes
BSD, GNU and musl C library support two additional members, which are standardized in [POSIX.1-2024](https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/time.h.html).

## Example
```cpp
#include <ctime>
#include <iostream>
 
int main()
{
    std::tm tm{};
    tm.tm_year = 2022 - 1900;
    tm.tm_mday = 1;
    std::mktime(&tm);
 
    std::cout << std::asctime(&tm); // note implicit trailing '\n'
}
```

## See also
- [localtime](/cpp/chrono/c/localtime/)
- [gmtime](/cpp/chrono/c/gmtime/)
- [C documentation](/c/chrono/tm/)
