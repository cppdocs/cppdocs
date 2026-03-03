---
title: "strfromf, strfromd, strfroml"
source_path: "c/string/byte/strfromf"
header: "<stdlib.h>"
category: "c"
---

Converts a floating-point value to a byte string.

## Declarations
```cpp
int strfromf( char* restrict s, size_t n, const char* restrict format, float fp );
```
_(since C23)_

```cpp
int strfromd( char* restrict s, size_t n, const char* restrict format, double fp );
```
_(since C23)_

```cpp
int strfroml( char* restrict s, size_t n, const char* restrict format, long double fp );
```
_(since C23)_

## Parameters
- `s`: pointer to a character string to write to
- `n`: up to n - 1 characters may be written, plus the null terminator
- `format`: pointer to a null-terminated byte string specifying how to interpret the data
- `fp`: floating-point value to convert

## Return value
The number of characters that would have been written had n been sufficiently large, not counting the terminating null character. Thus, the null-terminated output has been completely written if and only if the returned value is both nonnegative and less than n.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
int main()
{
    char buffer[32];
    int written;
    const char* format[] = {"%a", "%A", "%e", "%E", "%f", "%F", "%g", "%G"};
 
    for (size_t fmt = 0; fmt != sizeof format / sizeof format[0]; ++fmt)
    {
        written = strfromf(buffer, sizeof buffer, format[fmt], 3.1415f);
        printf("strfromf(... %s ...) = %2i, buffer: \"%s\"\n",
               format[fmt], written, buffer);
    }
    puts("");
 
    for (size_t fmt = 0; fmt != sizeof format / sizeof format[0]; ++fmt)
    {
        written = strfromd(buffer, sizeof buffer, format[fmt], 3.1415);
        printf("strfromd(... %s ...) = %2i, buffer: \"%s\"\n",
               format[fmt], written, buffer);
    }
    puts("");
 
    for (size_t fmt = 0; fmt != sizeof format / sizeof format[0]; ++fmt)
    {
        written = strfroml(buffer, sizeof buffer, format[fmt], 3.1415);
        printf("strfroml(... %s ...) = %2i, buffer: \"%s\"\n",
               format[fmt], written, buffer);
    }
}
```

## See also
- [printffprintfsprintfsnprintfprintf_sfprintf_ssprintf_ssnprintf_s](/c/io/fprintf/)
- [stdout](/c/io/std_streams/)
- [strtofstrtodstrtold](/c/string/byte/strtof/)
