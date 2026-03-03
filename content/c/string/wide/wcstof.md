---
title: "wcstof, wcstod, wcstold"
source_path: "c/string/wide/wcstof"
header: "<wchar.h>"
category: "c"
---

Interprets a floating-point value in a wide string pointed to by str.

## Declarations
```cpp
float wcstof( const wchar_t* restrict str, wchar_t** restrict str_end );
```
_(since C99)_

```cpp
double wcstod( const wchar_t* str, wchar_t** str_end );
```
_(since C95) (until C99)_

```cpp
double wcstod( const wchar_t* restrict str, wchar_t** restrict str_end );
```
_(since C99)_

```cpp
long double wcstold( const wchar_t* restrict str, wchar_t** restrict str_end );
```
_(since C99)_

## Parameters
- `str`: pointer to the null-terminated wide string to be interpreted
- `str_end`: pointer to a pointer to a wide character.

## Return value
Floating-point value corresponding to the contents of str on success. If the converted value falls out of range of corresponding return type, range error occurs and [HUGE_VAL](/c/numeric/math/HUGE_VAL/), [HUGE_VALF](/c/numeric/math/HUGE_VAL/) or [HUGE_VALL](/c/numeric/math/HUGE_VAL/) is returned. If no conversion can be performed, 0 is returned.

## Example
```cpp
#include <errno.h>
#include <stdio.h>
#include <wchar.h>
 
int main(void)
{
    const wchar_t* p = L"111.11 -2.22 0X1.BC70A3D70A3D7P+6  1.18973e+4932zzz";
    printf("Parsing L\"%ls\":\n", p);
    wchar_t* end;
    for (double f = wcstod(p, &end); p != end; f = wcstod(p, &end))
    {
        printf("'%.*ls' -> ", (int)(end-p), p);
        p = end;
        if (errno == ERANGE){
            printf("range error, got ");
            errno = 0;
        }
        printf("%f\n", f);
    }
}
```

## See also
- [strtofstrtodstrtold](/c/string/byte/strtof/)
- [C++ documentation](/cpp/string/wide/wcstof/)
