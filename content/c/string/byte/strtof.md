---
title: "strtof, strtod, strtold"
source_path: "c/string/byte/strtof"
header: "<stdlib.h>"
category: "c"
---

Interprets a floating-point value in a byte string pointed to by str.

## Declarations
```cpp
float strtof ( const char* restrict str, char** restrict str_end );
```
_(since C99)_

```cpp
double strtod ( const char* str, char** str_end );
```
_(until C99)_

```cpp
double strtod ( const char* restrict str, char** restrict str_end );
```
_(since C99)_

```cpp
long double strtold( const char* restrict str, char** restrict str_end );
```
_(since C99)_

## Parameters
- `str`: pointer to the null-terminated byte string to be interpreted
- `str_end`: pointer to a pointer to character

## Return value
Floating-point value corresponding to the contents of str on success. If the converted value falls out of range of corresponding return type, range error occurs ([errno](/c/error/errno/) is set to [ERANGE](/c/error/errno_macros/)) and [HUGE_VAL](/c/numeric/math/HUGE_VAL/), [HUGE_VALF](/c/numeric/math/HUGE_VAL/) or [HUGE_VALL](/c/numeric/math/HUGE_VAL/) is returned. If no conversion can be performed, 0 is returned.

## Example
```cpp
#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    // parsing with error handling
    const char* p = "111.11 -2.22 Nan nan(2) inF 0X1.BC70A3D70A3D7P+6  1.18973e+4932zzz";
    printf("Parsing '%s':\n", p);
    char* end = NULL;
    for (double f = strtod(p, &end); p != end; f = strtod(p, &end))
    {
        printf("'%.*s' -> ", (int)(end - p), p);
        p = end;
        if (errno == ERANGE)
        {
            printf("range error, got ");
            errno = 0;
        }
        printf("%f\n", f);
    }
 
    // parsing without error handling
    printf("\"  -0.0000000123junk\"  -->  %g\n", strtod("  -0.0000000123junk", NULL));
    printf("\"junk\"                 -->  %g\n", strtod("junk", NULL));
}
```

## See also
- [atof](/c/string/byte/atof/)
- [wcstofwcstodwcstold](/c/string/wide/wcstof/)
- [C++ documentation](/cpp/string/byte/strtof/)
