---
title: "std::timespec_get"
source_path: "cpp/chrono/c/timespec_get"
header: "<ctime>"
category: "chrono"
since: "C++17"
---

1) Modifies the [std::timespec](/cpp/chrono/c/timespec/) object pointed to by ts to hold the current calendar time in the time base base.

## Declarations
```cpp
int timespec_get( std::timespec* ts, int base );
```
_(since C++17)_

```cpp
#define TIME_UTC /* implementation-defined */
```
_(since C++17)_

## Parameters
- `ts`: pointer to an object of type std::timespec
- `base`: TIME_UTC or another nonzero integer value indicating the time base

## Return value
The value of base if successful, zero otherwise.

## Notes
The POSIX function [clock_gettime(CLOCK_REALTIME, ts)](https://pubs.opengroup.org/onlinepubs/9699919799/functions/clock_getres.html) may also be used to populate a std::timespec with the time since the Epoch.

## Example
```cpp
#include <ctime>
#include <iostream>
 
int main()
{
    std::timespec ts;
    std::timespec_get(&ts, TIME_UTC);
    char buf[100];
    std::strftime(buf, sizeof buf, "%D %T", std::gmtime(&ts.tv_sec));
    std::cout << "Current time: " << buf << '.' << ts.tv_nsec << " UTC\n";
}
```

## See also
- [timespec](/cpp/chrono/c/timespec/)
- [time](/cpp/chrono/c/time/)
- [C documentation](/c/chrono/timespec_get/)
