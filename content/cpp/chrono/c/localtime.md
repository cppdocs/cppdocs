---
title: "std::localtime"
source_path: "cpp/chrono/c/localtime"
header: "<ctime>"
category: "chrono"
---

Converts given time since epoch as [std::time_t](/cpp/chrono/c/time_t/) value into calendar time, expressed in local time.

## Declarations
```cpp
std::tm* localtime( const std::time_t* time );
```

## Parameters
- `time`: pointer to a std::time_t object to convert

## Return value
Pointer to a static internal [std::tm](/cpp/chrono/c/tm/) object on success, or null pointer otherwise. The structure may be shared between [std::gmtime](/cpp/chrono/c/gmtime/), std::localtime, and [std::ctime](/cpp/chrono/c/ctime/), and may be overwritten on each invocation.

## Notes
This function may not be thread-safe.

POSIX requires that this function sets [errno](/cpp/error/errno/) to [EOVERFLOW](/cpp/error/errno_macros/) if it fails because the argument is too large.

[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/localtime.html) that the timezone information is determined by this function as if by calling [tzset](https://pubs.opengroup.org/onlinepubs/9699919799/functions/tzset.html), which reads the environment variable TZ.

## Example
```cpp
#include <ctime>
#include <iomanip>
#include <iostream>
#include <sstream>
 
int main()
{
    setenv("TZ", "/usr/share/zoneinfo/America/Los_Angeles", 1); // POSIX-specific
 
    std::tm tm{}; // Zero initialise
    tm.tm_year = 2020 - 1900; // 2020
    tm.tm_mon = 2 - 1; // February
    tm.tm_mday = 15; // 15th
    tm.tm_hour = 10;
    tm.tm_min = 15;
    tm.tm_isdst = 0; // Not daylight saving
    std::time_t t = std::mktime(&tm); 
 
    std::cout << "UTC:   " << std::put_time(std::gmtime(&t), "%c %Z") << '\n';
    std::cout << "local: " << std::put_time(std::localtime(&t), "%c %Z") << '\n';
}
```

## See also
- [gmtime](/cpp/chrono/c/gmtime/)
- [localtimelocaltime_rlocaltime_s](/c/chrono/localtime/)
- [C documentation](/c/chrono/localtime/)
