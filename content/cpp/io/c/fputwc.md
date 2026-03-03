---
title: "std::fputwc"
source_path: "cpp/io/c/fputwc"
header: "<cwchar>"
category: "io"
---

Writes a wide character ch to the given output stream stream.

## Declarations
```cpp
std::wint_t fputwc( wchar_t ch, std::FILE* stream );
```

```cpp
std::wint_t putwc( wchar_t ch, std::FILE* stream );
```

## Parameters
- `ch`: wide character to be written
- `stream`: the output stream

## Return value
ch on success, WEOF on failure. If an encoding error occurs, [errno](/cpp/error/errno/) is set to [EILSEQ](/cpp/error/errno_macros/).

## Example
```cpp
#include <cerrno>
#include <clocale>
#include <cstdio>
#include <cstdlib>
#include <cwchar>
#include <initializer_list>
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
 
    for (const wchar_t ch :
    {
        L'\u2200', // Unicode name: "FOR ALL"
        L'\n',
        L'∀',
    })
    {
        if (errno = 0; std::fputwc(ch, stdout) == WEOF)
        {
            std::puts(errno == EILSEQ
                ? "Encoding error in fputwc"
                : "I/O error in fputwc"
            );
            return EXIT_FAILURE;
        }
    }
    return EXIT_SUCCESS;
}
```

## See also
- [fputcputc](/cpp/io/c/fputc/)
- [fputws](/cpp/io/c/fputws/)
- [fgetwcgetwc](/cpp/io/c/fgetwc/)
- [C documentation](/c/io/fputwc/)
