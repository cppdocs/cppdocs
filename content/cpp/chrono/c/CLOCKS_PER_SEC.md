---
title: "CLOCKS_PER_SEC"
source_path: "cpp/chrono/c/CLOCKS_PER_SEC"
header: "<ctime>"
category: "chrono"
---

Expands to an expression (not necessarily a compile-time constant) of type [std::clock_t](/cpp/chrono/c/clock_t/) equal to the number of clock ticks per second, as returned by [std::clock()](/cpp/chrono/c/clock/).

## Declarations
```cpp
#define CLOCKS_PER_SEC /* implementation-defined */
```

## Notes
POSIX defines [CLOCKS_PER_SEC](https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/time.h.html) as 1'000'000, regardless of the actual precision of [std::clock()](/cpp/chrono/c/clock/).

## Example
```cpp
#include <ctime>
#include <iostream>
#include <locale>
 
int main()
{
    const std::clock_t cps{CLOCKS_PER_SEC};
    std::cout.imbue(std::locale("en_US.utf8"));
    std::cout << cps << '\n';
}
```

## See also
- [clock](/cpp/chrono/c/clock/)
- [clock_t](/cpp/chrono/c/clock_t/)
- [C documentation](/c/chrono/CLOCKS_PER_SEC/)
