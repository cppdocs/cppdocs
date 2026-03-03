---
title: "scanf, fscanf, sscanf, scanf_s, fscanf_s, sscanf_s"
source_path: "c/io/fscanf"
header: "<stdio.h>"
category: "c"
---

Reads data from a variety of sources, interprets it according to format and stores the results into given locations.

## Declarations
```cpp
int scanf( const char *format, ... );
```
_(until C99)_

```cpp
int scanf( const char *restrict format, ... );
```
_(since C99)_

```cpp
int fscanf( FILE *stream, const char *format, ... );
```
_(until C99)_

```cpp
int fscanf( FILE *restrict stream, const char *restrict format, ... );
```
_(since C99)_

```cpp
int sscanf( const char *buffer, const char *format, ... );
```
_(until C99)_

```cpp
int sscanf( const char *restrict buffer, const char *restrict format, ... );
```
_(since C99)_

```cpp
int scanf_s(const char *restrict format, ...);
```
_(since C11)_

```cpp
int fscanf_s(FILE *restrict stream, const char *restrict format, ...);
```
_(since C11)_

```cpp
int sscanf_s(const char *restrict buffer, const char *restrict format, ...);
```
_(since C11)_

## Parameters
- `stream`: input file stream to read from
- `buffer`: pointer to a null-terminated character string to read from
- `format`: pointer to a null-terminated character string specifying how to read the input
- `...`: receiving arguments.

## Notes
Because most conversion specifiers first consume all consecutive whitespace, code such as

will read two integers that are entered on different lines (second %d will consume the newline left over by the first) or on the same line, separated by spaces or tabs (second %d will consume the spaces or tabs).

## Example
```cpp
#define __STDC_WANT_LIB_EXT1__ 1
#include <stdio.h>
#include <stddef.h>
#include <locale.h>
 
int main(void)
{
    int i, j;
    float x, y;
    char str1[10], str2[4];
    wchar_t warr[2];
    setlocale(LC_ALL, "en_US.utf8");
 
    char input[] = "25 54.32E-1 Thompson 56789 0123 56ß水";
    /* parse as follows:
       %d: an integer
       %f: a floating-point value
       %9s: a string of at most 9 non-whitespace characters
       %2d: two-digit integer (digits 5 and 6)
       %f:  a floating-point value (digits 7, 8, 9)
       %*d: an integer which isn't stored anywhere
       ' ': all consecutive whitespace
       %3[0-9]: a string of at most 3 decimal digits (digits 5 and 6)
       %2lc: two wide characters, using multibyte to wide conversion  */
    int ret = sscanf(input, "%d%f%9s%2d%f%*d %3[0-9]%2lc",
                     &i, &x, str1, &j, &y, str2, warr);
 
    printf("Converted %d fields:\n"
           "i = %d\n"
           "x = %f\n"
           "str1 = %s\n"
           "j = %d\n"
           "y = %f\n"
           "str2 = %s\n"
           "warr[0] = U+%x\n"
           "warr[1] = U+%x\n",
           ret, i, x, str1, j, y, str2, warr[0], warr[1]);
 
#ifdef __STDC_LIB_EXT1__
    int n = sscanf_s(input, "%d%f%s", &i, &x, str1, (rsize_t)sizeof str1);
    // writes 25 to i, 5.432 to x, the 9 bytes "Thompson\0" to str1, and 3 to n.
#endif
}
```

## See also
- [vscanfvfscanfvsscanfvscanf_svfscanf_svsscanf_s](/c/io/vfscanf/)
- [stdin](/c/io/std_streams/)
- [fgets](/c/io/fgets/)
- [printffprintfsprintfsnprintfprintf_sfprintf_ssprintf_ssnprintf_s](/c/io/fprintf/)
- [stdout](/c/io/std_streams/)
- [C++ documentation](/cpp/io/c/scanf/)
