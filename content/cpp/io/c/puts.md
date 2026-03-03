---
title: "std::puts"
source_path: "cpp/io/c/puts"
header: "<cstdio>"
category: "io"
---

Writes every character from the null-terminated string str and one additional newline character '\n' to the output stream [stdout](/cpp/io/c/std_streams/), as if by repeatedly executing [std::fputc](/cpp/io/c/fputc/).

## Declarations
```cpp
int puts( const char *str );
```

## Parameters
- `str`: character string to be written

## Return value
On success, returns a non-negative value

## Notes
The std::puts function appends the newline character to the output, while [std::fputs](/cpp/io/c/fputs/) function does not.

Different implementations return different non-negative numbers: some return the last character written, some return the number of characters written (or [INT_MAX](/cpp/types/climits/) if the string was longer than that), some simply return a non-negative constant.

A typical cause of failure for std::puts is running out of space on the file system, when stdout is redirected to a file.

## Example
```cpp
#include <cstdio>
 
int main()
{
    int rc = std::puts("Hello World");
 
    if (rc == EOF)
        std::perror("puts()"); // POSIX requires that errno is set
}
```

## See also
- [fputs](/cpp/io/c/fputs/)
- [printffprintfsprintfsnprintf](/cpp/io/c/printf/)
- [stdout](/cpp/io/c/std_streams/)
- [C documentation](/c/io/puts/)
