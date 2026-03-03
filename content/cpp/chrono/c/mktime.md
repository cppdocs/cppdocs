---
title: "std::mktime"
source_path: "cpp/chrono/c/mktime"
header: "<ctime>"
category: "chrono"
---

Converts local calendar time to a time since epoch as a [std::time_t](/cpp/chrono/c/time_t/) object. time->tm_wday and time->tm_yday are ignored. The values in time are permitted to be outside their normal ranges.

## Declarations
```cpp
std::time_t mktime( std::tm* time );
```

## Parameters
- `time`: pointer to a std::tm object specifying local calendar time to convert

## Return value
Time since epoch as a [std::time_t](/cpp/chrono/c/time_t/) object on success or -1 if time cannot be represented as a [std::time_t](/cpp/chrono/c/time_t/) object.

## Notes
If the [std::tm](/cpp/chrono/c/tm/) object was obtained from [std::get_time](/cpp/io/manip/get_time/) or the POSIX [strptime](https://pubs.opengroup.org/onlinepubs/009695399/functions/strptime.html), the value of tm_isdst is indeterminate, and needs to be set explicitly before calling mktime.

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
    std::tm local = *std::localtime(&t);
 
    std::cout << "local: " << std::put_time(&local, "%c %Z") << '\n';
}
```

## See also
- [localtime](/cpp/chrono/c/localtime/)
- [C documentation](/c/chrono/mktime/)
