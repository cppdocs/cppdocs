---
title: "std::fputws"
source_path: "cpp/io/c/fputws"
header: "<cwchar>"
category: "io"
---

Writes every wide character from the null-terminated wide string str to the output stream stream, as if by repeatedly executing [std::fputwc](/cpp/io/c/fputwc/).

## Declarations
```cpp
int fputws( const wchar_t* str, std::FILE* stream );
```

## Parameters
- `str`: null-terminated wide string to be written
- `stream`: output stream

## Return value
On success, returns a non-negative value

## Example
```cpp
#include <clocale>
#include <cstdio>
#include <cwchar>
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    int rc = std::fputws(L"御休みなさい", stdout);
 
    if (rc == EOF)
        std::perror("fputws()"); // POSIX requires that errno is set
}
```

## See also
- [fputs](/cpp/io/c/fputs/)
- [wprintffwprintfswprintf](/cpp/io/c/fwprintf/)
- [stdout](/cpp/io/c/std_streams/)
- [fgetws](/cpp/io/c/fgetws/)
- [C documentation](/c/io/fputws/)
