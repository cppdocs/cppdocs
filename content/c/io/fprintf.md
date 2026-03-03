---
title: "printf, fprintf, sprintf, snprintf, printf_s, fprintf_s, sprintf_s, snprintf_s"
source_path: "c/io/fprintf"
header: "<stdio.h>"
category: "c"
---

Loads the data from the given locations, converts them to character string equivalents and writes the results to a variety of sinks/streams:

## Declarations
```cpp
int printf( const char* format, ... );
```
_(until C99)_

```cpp
int printf( const char* restrict format, ... );
```
_(since C99)_

```cpp
int fprintf( FILE* stream, const char* format, ... );
```
_(until C99)_

```cpp
int fprintf( FILE* restrict stream, const char* restrict format, ... );
```
_(since C99)_

```cpp
int sprintf( char* buffer, const char* format, ... );
```
_(until C99)_

```cpp
int sprintf( char* restrict buffer, const char* restrict format, ... );
```
_(since C99)_

```cpp
int snprintf( char* restrict buffer, size_t bufsz,
const char* restrict format, ... );
```
_(since C99)_

```cpp
int printf_s( const char* restrict format, ... );
```
_(since C11)_

```cpp
int fprintf_s( FILE* restrict stream, const char* restrict format, ... );
```
_(since C11)_

```cpp
int sprintf_s( char* restrict buffer, rsize_t bufsz,
const char* restrict format, ... );
```
_(since C11)_

```cpp
int snprintf_s( char* restrict buffer, rsize_t bufsz,
const char* restrict format, ... );
```
_(since C11)_

## Parameters
- `stream`: output file stream to write to
- `buffer`: pointer to a character string to write to
- `bufsz`: up to bufsz - 1 characters may be written, plus the null terminator
- `format`: pointer to a null-terminated byte string specifying how to interpret the data
- `...`: arguments specifying data to print. If any argument after default argument promotions is not the type expected by the corresponding conversion specification (the expected type is the promoted type or a compatible type of the promoted type), or if there are fewer arguments than required by format, the behavior is undefined. If there are more arguments than required by format, the extraneous arguments are evaluated and ignored.

## Notes
The C standard and [POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fprintf.html) specify that the behavior of sprintf and its variants is undefined when an argument overlaps with the destination buffer. Example:

[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fprintf.html) that [errno](/c/error/errno/) is set on error. It also specifies additional conversion specifications, most notably support for argument reordering (n$ immediately after % indicates nth argument).

Calling snprintf with zero bufsz and null pointer for buffer is useful to determine the necessary buffer size to contain the output:

snprintf_s, just like snprintf, but unlike sprintf_s, will truncate the output to fit in bufsz - 1.

## Example
```cpp
#include <inttypes.h>
#include <stdint.h>
#include <stdio.h>
 
int main(void)
{
    const char* s = "Hello";
    printf("Strings:\n"); // same as puts("Strings");
    printf(" padding:\n");
    printf("\t[%10s]\n", s);
    printf("\t[%-10s]\n", s);
    printf("\t[%*s]\n", 10, s);
    printf(" truncating:\n");
    printf("\t%.4s\n", s);
    printf("\t%.*s\n", 3, s);
 
    printf("Characters:\t%c %%\n", 'A');
 
    printf("Integers:\n");
    printf("\tDecimal:\t%i %d %.6i %i %.0i %+i %i\n",
                         1, 2,   3, 0,   0,  4,-4);
    printf("\tHexadecimal:\t%x %x %X %#x\n", 5, 10, 10, 6);
    printf("\tOctal:\t\t%o %#o %#o\n", 10, 10, 4);
 
    printf("Floating-point:\n");
    printf("\tRounding:\t%f %.0f %.32f\n", 1.5, 1.5, 1.3);
    printf("\tPadding:\t%05.2f %.2f %5.2f\n", 1.5, 1.5, 1.5);
    printf("\tScientific:\t%E %e\n", 1.5, 1.5);
    printf("\tHexadecimal:\t%a %A\n", 1.5, 1.5);
    printf("\tSpecial values:\t0/0=%g 1/0=%g\n", 0.0 / 0.0, 1.0 / 0.0);
 
    printf("Fixed-width types:\n");
    printf("\tLargest 32-bit value is %" PRIu32 " or %#" PRIx32 "\n",
                                     UINT32_MAX,     UINT32_MAX );
}
```

## See also
- [wprintffwprintfswprintfwprintf_sfwprintf_sswprintf_ssnwprintf_s](/c/io/fwprintf/)
- [stdout](/c/io/std_streams/)
- [vprintfvfprintfvsprintfvsnprintfvprintf_svfprintf_svsprintf_svsnprintf_s](/c/io/vfprintf/)
- [stdout](/c/io/std_streams/)
- [fputs](/c/io/fputs/)
- [scanffscanfsscanfscanf_sfscanf_ssscanf_s](/c/io/fscanf/)
- [stdin](/c/io/std_streams/)
- [C++ documentation](/cpp/io/c/printf/)
