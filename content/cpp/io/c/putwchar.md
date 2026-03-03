---
title: "std::putwchar"
source_path: "cpp/io/c/putwchar"
header: "<cwchar>"
category: "io"
---

Writes a wide character ch to [stdout](/cpp/io/c/std_streams/).

## Declarations
```cpp
std::wint_t putwchar( wchar_t ch );
```

## Parameters
- `ch`: wide character to be written

## Return value
ch on success, WEOF on failure.

## Example
```cpp
#include <clocale>
#include <cstdio>
#include <cstdlib>
#include <cwchar>
#include <initializer_list>
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
 
    for (const wchar_t ch : {
        L'\u2200', // Unicode name: "FOR ALL"
        L'∀',
        L'\n'
        })
        if (std::putwchar(ch) == WEOF)
        {
            std::puts("I/O error in std::putwchar");
            return EXIT_FAILURE;
        }
 
    return EXIT_SUCCESS;
}
```

## See also
- [putchar](/cpp/io/c/putchar/)
- [stdout](/cpp/io/c/std_streams/)
- [fputwcputwc](/cpp/io/c/fputwc/)
- [C documentation](/c/io/putwchar/)
