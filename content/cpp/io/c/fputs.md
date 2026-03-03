---
title: "std::fputs"
source_path: "cpp/io/c/fputs"
header: "<cstdio>"
category: "io"
---

Writes every character from the null-terminated string str to the output stream stream, as if by repeatedly executing [std::fputc](/cpp/io/c/fputc/).

## Declarations
```cpp
int fputs( const char* str, std::FILE* stream );
```

## Parameters
- `str`: null-terminated character string to be written
- `stream`: output stream

## Return value
On success, returns a non-negative value

## Notes
The related function [std::puts](/cpp/io/c/puts/) appends a newline character to the output, while std::fputs writes the string unmodified.

Different implementations return different non-negative numbers: some return the last character written, some return the number of characters written (or [INT_MAX](/cpp/types/climits/) if the string was longer than that), some simply return a non-negative constant such as zero.

## Example
```cpp
#include <cstdio>
 
int main(void)
{
    int rc = std::fputs("Hello World", stdout);
 
    if (rc == EOF)
        std::perror("fputs()"); // POSIX requires that errno is set
}
```

## See also
- [printffprintfsprintfsnprintf](/cpp/io/c/printf/)
- [stdout](/cpp/io/c/std_streams/)
- [puts](/cpp/io/c/puts/)
- [stdout](/cpp/io/c/std_streams/)
- [fputws](/cpp/io/c/fputws/)
- [fgets](/cpp/io/c/fgets/)
- [C documentation](/c/io/fputs/)
