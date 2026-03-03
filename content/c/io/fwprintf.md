---
title: "wprintf, fwprintf, swprintf, wprintf_s, fwprintf_s, swprintf_s, snwprintf_s"
source_path: "c/io/fwprintf"
header: "<wchar.h>"
category: "c"
---

Loads the data from the given locations, converts them to wide string equivalents and writes the results to a variety of sinks.

## Declarations
```cpp
int wprintf( const wchar_t* format, ... );
```
_(since C95) (until C99)_

```cpp
int wprintf( const wchar_t* restrict format, ... );
```
_(since C99)_

```cpp
int fwprintf( FILE* stream, const wchar_t* format, ... );
```
_(since C95) (until C99)_

```cpp
int fwprintf( FILE* restrict stream,
const wchar_t* restrict format, ... );
```
_(since C99)_

```cpp
int swprintf( wchar_t* buffer, size_t bufsz,
const wchar_t* format, ... );
```
_(since C95) (until C99)_

```cpp
int swprintf( wchar_t* restrict buffer, size_t bufsz,
const wchar_t* restrict format, ... );
```
_(since C99)_

```cpp
int wprintf_s( const wchar_t* restrict format, ... );
```
_(since C11)_

```cpp
int fwprintf_s( FILE* restrict stream,
const wchar_t* restrict format, ... );
```
_(since C11)_

```cpp
int swprintf_s( wchar_t* restrict buffer, rsize_t bufsz,
const wchar_t* restrict format, ... );
```
_(since C11)_

```cpp
int snwprintf_s( wchar_t* restrict s, rsize_t n,
const wchar_t* restrict format, ... );
```
_(since C11)_

## Parameters
- `stream`: output file stream to write to
- `buffer`: pointer to a wide character string to write to
- `bufsz`: up to bufsz - 1 wide characters may be written, plus the null terminator
- `format`: pointer to a null-terminated wide string specifying how to interpret the data
- `...`: arguments specifying data to print. If any argument after default argument promotions is not the type expected by the corresponding conversion specifier, or if there are fewer arguments than required by format, the behavior is undefined. If there are more arguments than required by format, the extraneous arguments are evaluated and ignored.

## Notes
While narrow strings provide [snprintf](/c/io/fprintf/), which makes it possible to determine the required output buffer size, there is no equivalent for wide strings(until snwprintf_s)(since C11), and in order to determine the buffer size, the program may need to call swprintf, check the result value, and reallocate a larger buffer, trying again until successful.

snwprintf_s, unlike swprintf_s, will truncate the result to fit within the array pointed to by buffer, even though truncation is treated as an error by most bounds-checked functions.

## Example
```cpp
#include <locale.h>
#include <wchar.h>
 
int main(void)
{
    char narrow_str[] = "z\u00df\u6c34\U0001f34c";
                  // or "zß水🍌"
                  // or "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9f\x8d\x8c";
    wchar_t warr[29]; // the expected string is 28 characters plus 1 null terminator
    setlocale(LC_ALL, "en_US.utf8");
    swprintf(warr, sizeof warr / sizeof* warr,
             L"Converted from UTF-8: '%s'", narrow_str);
    wprintf(L"%ls\n", warr);
}
```

## See also
- [printffprintfsprintfsnprintfprintf_sfprintf_ssprintf_ssnprintf_s](/c/io/fprintf/)
- [stdout](/c/io/std_streams/)
- [vwprintfvfwprintfvswprintfvwprintf_svfwprintf_svswprintf_svsnwprintf_s](/c/io/vfwprintf/)
- [stdout](/c/io/std_streams/)
- [fputws](/c/io/fputws/)
- [C++ documentation](/cpp/io/c/fwprintf/)
