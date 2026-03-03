---
title: "std::strftime"
source_path: "cpp/chrono/c/strftime"
header: "<ctime>"
category: "chrono"
---

Converts the date and time information from a given calendar time tp to a null-terminated multibyte character string str according to [format string](#Format_string) format. Up to count bytes are written.

## Declarations
```cpp
std::size_t strftime( char* str, std::size_t count, const char* format, const std::tm* tp );
```

## Parameters
- `str`: pointer to the first element of the char array for output
- `count`: maximum number of bytes to write
- `format`: pointer to a null-terminated multibyte character string specifying the format of conversion
- `tp`: pointer to the object containing date and time information to be converted

## Return value
The number of bytes written into the character array pointed to by str not including the terminating '\0' on success. If count was reached before the entire string could be stored, 0 is returned and the contents are indeterminate.

## Example
```cpp
#include <ctime>
#include <iostream>
#include <iterator>
#include <locale>
 
void utcExample()
{
    // Example of the very popular RFC 3339 format UTC time
    std::time_t time = std::time({});
    char timeString[std::size("yyyy-mm-ddThh:mm:ssZ")];
    std::strftime(std::data(timeString), std::size(timeString),
                  "%FT%TZ", std::gmtime(&time));
    std::cout << timeString << '\n';
}
 
int main()
{
    std::time_t t = std::time(nullptr);
    char mbstr[100];
 
    if (std::strftime(mbstr, sizeof(mbstr), "%A %c", std::localtime(&t)))
        std::cout << mbstr << '\n';
 
    std::locale::global(std::locale("ja_JP.utf8"));
    if (std::strftime(mbstr, sizeof(mbstr), "%A %c", std::localtime(&t)))
        std::cout << mbstr << '\n';
 
    utcExample();
}
```

## See also
- [asctime](/cpp/chrono/c/asctime/)
- [std::tm](/cpp/chrono/c/tm/)
- [ctime](/cpp/chrono/c/ctime/)
- [std::time_t](/cpp/chrono/c/time_t/)
- [wcsftime](/cpp/chrono/c/wcsftime/)
- [std::tm](/cpp/chrono/c/tm/)
- [put_time](/cpp/io/manip/put_time/)
- [std::formatter<std::chrono::hh_mm_ss>](/cpp/chrono/hh_mm_ss/formatter/)
- [C documentation](/c/chrono/strftime/)
