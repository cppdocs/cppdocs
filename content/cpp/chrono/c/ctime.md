---
title: "std::ctime"
source_path: "cpp/chrono/c/ctime"
header: "<ctime>"
category: "chrono"
---

Converts given time since epoch to a calendar local time and then to a textual representation, as if by calling [std::asctime](/cpp/chrono/c/asctime/)([std::localtime](/cpp/chrono/c/localtime/)(time)). The resulting string has the following format:

## Declarations
```cpp
char* ctime( const std::time_t* time );
```

## Parameters
- `time`: pointer to a std::time_t object specifying the time to print

## Return value
Pointer to a static null-terminated character string holding the textual representation of date and time. The string may be shared between [std::asctime](/cpp/chrono/c/asctime/) and std::ctime, and may be overwritten on each invocation of any of those functions.

## Notes
This function returns a pointer to static data and is not thread-safe. In addition, it modifies the static [std::tm](/cpp/chrono/c/tm/) object which may be shared with [std::gmtime](/cpp/chrono/c/gmtime/) and [std::localtime](/cpp/chrono/c/localtime/). POSIX marks this function obsolete and recommends [std::strftime](/cpp/chrono/c/strftime/) instead.

The behavior may be undefined for the values of [std::time_t](/cpp/chrono/c/time_t/) that result in the string longer than 25 characters (e.g. year 10000).

## Example
```cpp
#include <cassert>
#include <cstring>
#include <ctime>
#include <iostream>
 
int main()
{
    std::time_t result = std::time(nullptr);
    std::cout << std::ctime(&result);
 
    char buffer[32];
    std::strncpy(buffer, std::ctime(&result), 26);
    assert('\n' == buffer[std::strlen(buffer) - 1]);
    std::cout << buffer;
}
```

## See also
- [asctime](/cpp/chrono/c/asctime/)
- [std::tm](/cpp/chrono/c/tm/)
- [strftime](/cpp/chrono/c/strftime/)
- [std::tm](/cpp/chrono/c/tm/)
- [put_time](/cpp/io/manip/put_time/)
- [C documentation](/c/chrono/ctime/)
