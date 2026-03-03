---
title: "std::wcsftime"
source_path: "cpp/chrono/c/wcsftime"
header: "<cwchar>"
category: "chrono"
---

Converts the date and time information from a given calendar time time to a null-terminated wide character string str according to [format string](#Format_string) format. Up to count wide characters are written.

## Declarations
```cpp
std::size_t wcsftime( wchar_t* str, std::size_t count, const wchar_t* format, const std::tm* time );
```

## Parameters
- `str`: pointer to the first element of the wchar_t array for output
- `count`: maximum number of wide characters to write
- `format`: pointer to a null-terminated wide character string specifying the format of conversion
- `time`: pointer to the date and time information to be converted

## Return value
Number of wide characters written into the wide character array pointed to by str not including the terminating L'\0' on success. If count was reached before the entire string could be stored, 0 is returned and the contents are undefined.

## Example
```cpp
#include <ctime>
#include <cwchar>
#include <iostream>
#include <locale>
 
int main()
{
    std::locale::global(std::locale("ja_JP.utf8"));
    std::time_t t = std::time(nullptr);
    wchar_t wstr[100];
    if (std::wcsftime(wstr, 100, L"%A %c", std::localtime(&t)))
        std::wcout << wstr << '\n';
}
```

## See also
- [strftime](/cpp/chrono/c/strftime/)
- [std::tm](/cpp/chrono/c/tm/)
- [put_time](/cpp/io/manip/put_time/)
- [C documentation](/c/chrono/wcsftime/)
