---
title: "std::asctime"
source_path: "cpp/chrono/c/asctime"
header: "<ctime>"
category: "chrono"
---

Converts given calendar time [std::tm](/cpp/chrono/c/tm/) to a textual representation of the following fixed 25-character form: Www Mmm dd hh:mm:ss yyyy\n.

## Declarations
```cpp
char* asctime( const std::tm* time_ptr );
```

## Parameters
- `time_ptr`: pointer to a std::tm object specifying the time to print

## Return value
Pointer to a static null-terminated character string holding the textual representation of date and time. The string may be shared between std::asctime and [std::ctime](/cpp/chrono/c/ctime/), and may be overwritten on each invocation of any of those functions.

## Notes
This function returns a pointer to static data and is not thread-safe. POSIX marks this function obsolete and recommends locale-dependent [std::strftime](/cpp/chrono/c/strftime/) instead. In [std::locale](/cpp/locale/locale/)("C") the [std::strftime](/cpp/chrono/c/strftime/) format string "%c\n" will be an exact match to std::asctime output, while in other locales the format string "%a %b %e %H:%M:%S %Y\n" will be a potentially closer but not always exact match.

POSIX limits undefined behaviors only to the cases when the output string would be longer than 25 characters, when timeptr->tm_wday or timeptr->tm_mon are not within the expected ranges, or when timeptr->tm_year exceeds INT_MAX-1990.

Some implementations handle timeptr->tm_mday == 0 as meaning the last day of the preceding month.

## Example
```cpp
#include <ctime>
#include <iomanip>
#include <iostream>
 
int main()
{
    const std::time_t now = std::time(nullptr);
 
    for (const char* localeName : {"C", "en_US.utf8", "de_DE.utf8", "ja_JP.utf8"})
    {
        std::cout << "locale " << localeName << ":\n" << std::left;
        std::locale::global(std::locale(localeName));
 
        std::cout << std::setw(40) << "    asctime" << std::asctime(std::localtime(&now));
 
        // strftime output for comparison:
        char buf[64];
        if (strftime(buf, sizeof buf, "%c\n", std::localtime(&now)))
            std::cout << std::setw(40) << "    strftime %c" << buf;
 
        if (strftime(buf, sizeof buf, "%a %b %e %H:%M:%S %Y\n", std::localtime(&now)))
            std::cout << std::setw(40) << "    strftime %a %b %e %H:%M:%S %Y" << buf;
 
        std::cout << '\n';
    }
}
```

## See also
- [ctime](/cpp/chrono/c/ctime/)
- [std::time_t](/cpp/chrono/c/time_t/)
- [strftime](/cpp/chrono/c/strftime/)
- [std::tm](/cpp/chrono/c/tm/)
- [put_time](/cpp/io/manip/put_time/)
- [C documentation](/c/chrono/asctime/)
