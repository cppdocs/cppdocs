---
title: "fputs"
source_path: "c/io/fputs"
header: "<stdio.h>"
category: "c"
---

Writes every character from the null-terminated string str to the output stream stream, as if by repeatedly executing [fputc](/c/io/putc/).

## Declarations
```cpp
int fputs( const char* str, FILE* stream );
```
_(until C99)_

```cpp
int fputs( const char* restrict str, FILE* restrict stream );
```
_(since C99)_

## Parameters
- `str`: null-terminated character string to be written
- `stream`: output stream

## Return value
On success, returns a non-negative value.

## Notes
The related function [puts](/c/io/puts/) appends a newline character to the output, while fputs writes the string unmodified.

Different implementations return different non-negative numbers: some return the last character written, some return the number of characters written (or [INT_MAX](/c/types/limits/) if the string was longer than that), some simply return a non-negative constant such as zero.

## Example
```cpp
#include <stdio.h>
 
int main(void)
{
    int rc = fputs("Hello World", stdout);
 
    if (rc == EOF)
       perror("fputs()"); // POSIX requires that errno is set
}
```

## See also
- [printffprintfsprintfsnprintfprintf_sfprintf_ssprintf_ssnprintf_s](/c/io/fprintf/)
- [stdout](/c/io/std_streams/)
- [puts](/c/io/puts/)
- [stdout](/c/io/std_streams/)
- [fgets](/c/io/fgets/)
- [C++ documentation](/cpp/io/c/fputs/)
