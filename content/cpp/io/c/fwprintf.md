---
title: "std::wprintf, std::fwprintf, std::swprintf"
source_path: "cpp/io/c/fwprintf"
header: "<cwchar>"
category: "io"
---

Loads the data from the given locations, converts them to wide string equivalents and writes the results to a variety of sinks.

## Declarations
```cpp
int wprintf( const wchar_t* format, ... );
```

```cpp
int fwprintf( std::FILE* stream, const wchar_t* format, ... );
```

```cpp
int swprintf( wchar_t* buffer, std::size_t size, const wchar_t* format, ... );
```

## Parameters
- `stream`: output file stream to write to
- `buffer`: pointer to a wide character string to write to
- `size`: up to size - 1 characters may be written, plus the null terminator
- `format`: pointer to a null-terminated wide string specifying how to interpret the data
- `...`: arguments specifying data to print. If any argument after default conversions is not the type expected by the corresponding conversion specifier, or if there are fewer arguments than required by format, the behavior is undefined. If there are more arguments than required by format, the extraneous arguments are evaluated and ignored

## Notes
While narrow strings provide [std::snprintf](/cpp/io/c/printf/), which makes it possible to determine the required output buffer size, there is no equivalent for wide strings, and in order to determine the buffer size, the program may need to call std::swprintf, check the result value, and reallocate a larger buffer, trying again until successful.

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
#include <locale>
 
int main()
{
    char narrow_str[] = "z\u00df\u6c34\U0001f34c";
                  // or "zß水🍌";
                  // or "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9f\x8d\x8c";
    wchar_t warr[29]; // the expected string is 28 characters plus 1 null terminator
    std::setlocale(LC_ALL, "en_US.utf8");
 
    std::swprintf(warr, sizeof warr/sizeof *warr,
                  L"Converted from UTF-8: '%s'", narrow_str);
 
    std::wcout.imbue(std::locale("en_US.utf8"));
    std::wcout << warr << '\n';
}
```

## See also
- [printffprintfsprintfsnprintf](/cpp/io/c/printf/)
- [stdout](/cpp/io/c/std_streams/)
- [vwprintfvfwprintfvswprintf](/cpp/io/c/vfwprintf/)
- [stdout](/cpp/io/c/std_streams/)
- [fputws](/cpp/io/c/fputws/)
- [C documentation](/c/io/fwprintf/)
