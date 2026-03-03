---
title: "puts"
source_path: "c/io/puts"
header: "<stdio.h>"
category: "c"
---

Writes every character from the null-terminated string str and one additional newline character '\n' to the output stream [stdout](/c/io/std_streams/), as if by repeatedly executing [fputc](/c/io/putc/).

## Declarations
```cpp
int puts( const char* str );
```

## Parameters
- `str`: character string to be written

## Return value
On success, returns a non-negative value.

## Notes
The puts function appends the newline character to the output, while [fputs](/c/io/fputs/) function does not.

Different implementations return different non-negative numbers: some return the last character written, some return the number of characters written (or [INT_MAX](/c/types/limits/) if the string was longer than that), some simply return a non-negative constant.

A typical cause of failure for puts is running out of space on the file system, when [stdout](/c/io/std_streams/) is redirected to a file.

## Example
```cpp
#include <stdio.h>
 
int main(void)
{
    int rc = puts("Hello World");
 
    if (rc == EOF)
        perror("puts()"); // POSIX requires that errno is set
}
```

## See also
- [fputs](/c/io/fputs/)
- [printffprintfsprintfsnprintfprintf_sfprintf_ssprintf_ssnprintf_s](/c/io/fprintf/)
- [stdout](/c/io/std_streams/)
- [C++ documentation](/cpp/io/c/puts/)
