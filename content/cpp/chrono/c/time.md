---
title: "std::time"
source_path: "cpp/chrono/c/time"
header: "<ctime>"
category: "chrono"
---

Returns the current calendar time encoded as a [std::time_t](/cpp/chrono/c/time_t/) object, and also stores it in the object pointed to by arg, unless arg is a null pointer.

## Declarations
```cpp
std::time_t time( std::time_t* arg );
```

## Parameters
- `arg`: pointer to a std::time_t object to store the time, or a null pointer

## Return value
Current calendar time encoded as [std::time_t](/cpp/chrono/c/time_t/) object on success, ([std::time_t](/cpp/chrono/c/time_t/))(-1) on error. If arg is not null, the return value is also stored in the object pointed to by arg.

## Notes
The encoding of calendar time in [std::time_t](/cpp/chrono/c/time_t/) is unspecified, but most systems conform to the [POSIX specification](https://pubs.opengroup.org/onlinepubs/9799919799/functions/time.html) and return a value of integral type holding 86400 times the number of calendar days since [the Epoch](https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap04.html#tag_04_16) plus the number of seconds that have passed since the last midnight UTC. Most notably, POSIX time does not (and can not) take leap seconds into account, so that this integral value is not equal to the number of [S.I. seconds](https://en.wikipedia.org/wiki/SI_base_unit#Definitions) that have passed since the epoch, but rather is reduced with the number of leap seconds that have occurred since the epoch. Implementations in which [std::time_t](/cpp/chrono/c/time_t/) is a 32-bit signed integer (many historical implementations) fail in the year [2038](https://en.wikipedia.org/wiki/Year_2038_problem).

## Example
```cpp
#include <ctime>
#include <iostream>
 
int main()
{
    std::time_t result = std::time(nullptr);
    std::cout << std::asctime(std::localtime(&result))
              << result << " seconds since the Epoch\n";
}
```

## See also
- [timespec_get](/cpp/chrono/c/timespec_get/)
- [localtime](/cpp/chrono/c/localtime/)
- [gmtime](/cpp/chrono/c/gmtime/)
- [system_clock](/cpp/chrono/system_clock/)
- [C documentation](/c/chrono/time/)
