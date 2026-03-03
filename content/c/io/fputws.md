---
title: "fputws"
source_path: "c/io/fputws"
header: "<wchar.h>"
category: "c"
---

Writes every character from the null-terminated wide string str to the output stream stream, as if by repeatedly executing [fputwc](/c/io/fputwc/).

## Declarations
```cpp
int fputws( const wchar_t *str, FILE *stream );
```
_(since C95) (until C99)_

```cpp
int fputws( const wchar_t * restrict str, FILE * restrict stream );
```
_(since C99)_

## Parameters
- `str`: null-terminated wide string to be written
- `stream`: output stream

## Return value
On success, returns a non-negative value

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    int rc = fputws(L"御休みなさい", stdout);
 
    if (rc == EOF)
       perror("fputws()"); // POSIX requires that errno is set
}
```

## See also
- [fputs](/c/io/fputs/)
- [wprintffwprintfswprintfwprintf_sfwprintf_sswprintf_ssnwprintf_s](/c/io/fwprintf/)
- [stdout](/c/io/std_streams/)
- [fgetws](/c/io/fgetws/)
- [C++ documentation](/cpp/io/c/fputws/)
