---
title: "std::gmtime"
source_path: "cpp/chrono/c/gmtime"
header: "<ctime>"
category: "chrono"
---

Converts given time since epoch as [std::time_t](/cpp/chrono/c/time_t/) value into calendar time, expressed in Coordinated Universal Time (UTC).

## Declarations
```cpp
std::tm* gmtime( const std::time_t* time );
```

## Parameters
- `time`: pointer to a time_t object to convert

## Return value
Pointer to a static internal [std::tm](/cpp/chrono/c/tm/) object on success, or null pointer otherwise. The structure may be shared between std::gmtime, [std::localtime](/cpp/chrono/c/localtime/), and [std::ctime](/cpp/chrono/c/ctime/) and may be overwritten on each invocation.

## Notes
This function may not be thread-safe.

POSIX requires that this function sets [errno](/cpp/error/errno/) to [EOVERFLOW](/cpp/error/errno_macros/) if it fails because the argument is too large.

## Example
```cpp
#include <ctime>
#include <iomanip>
#include <iostream>
#include <sstream>
 
int main()
{
    setenv("TZ", "/usr/share/zoneinfo/Europe/London", 1); // POSIX-specific
 
    std::tm tm{}; // get_time does not set all fields hence {}
    tm.tm_year = 2020 - 1900; // 2020
    tm.tm_mon = 7 - 1; // July
    tm.tm_mday = 15; // 15th
    tm.tm_hour = 10;
    tm.tm_min = 15;
    tm.tm_isdst = 1; // Daylight saving in London
    std::time_t t = std::mktime(&tm); 
 
    std::cout << "UTC:   " << std::put_time(std::gmtime(&t), "%c %Z") << '\n';
    std::cout << "local: " << std::put_time(std::localtime(&t), "%c %Z") << '\n';
}
```

## See also
- [localtime](/cpp/chrono/c/localtime/)
- [C documentation](/c/chrono/gmtime/)
