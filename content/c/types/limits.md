---
title: "Numeric limits"
source_path: "c/types/limits"
category: "c"
---

[1 Limits of integer types](#Limits_of_integer_types)
[1.1 Limits of core language integer types](#Limits_of_core_language_integer_types)
[1.2 Limits of library type aliases](#Limits_of_library_type_aliases)
[1.3 Notes](#Notes)
[1.4 Example](#Example)

## Notes
The types of these constants, other than CHAR_BIT and MB_LEN_MAX, are required to match the results of the [integral promotions](/c/language/conversion/#Integer_promotions) as applied to objects of the types they describe: CHAR_MAX may have type int or unsigned int, but never char. Similarly USHRT_MAX may not be of an unsigned type: its type may be int.

A freestanding implementation may lack [sig_atomic_t](/c/program/sig_atomic_t/) and/or wint_t typedef names, in which case the SIG_ATOMIC_* and/or WINT_* macros are correspondingly absent.

Possible output:

## Example
```cpp
#include <limits.h>
#include <stdint.h>
#include <stdio.h>
 
int main(void)
{
    printf("CHAR_BIT       = %d\n", CHAR_BIT);
    printf("MB_LEN_MAX     = %d\n\n", MB_LEN_MAX);
 
    printf("CHAR_MIN       = %+d\n", CHAR_MIN);
    printf("CHAR_MAX       = %+d\n", CHAR_MAX);
    printf("SCHAR_MIN      = %+d\n", SCHAR_MIN);
    printf("SCHAR_MAX      = %+d\n", SCHAR_MAX);
    printf("UCHAR_MAX      = %u\n\n", UCHAR_MAX);
 
    printf("SHRT_MIN       = %+d\n", SHRT_MIN);
    printf("SHRT_MAX       = %+d\n", SHRT_MAX);
    printf("USHRT_MAX      = %u\n\n", USHRT_MAX);
 
    printf("INT_MIN        = %+d\n", INT_MIN);
    printf("INT_MAX        = %+d\n", INT_MAX);
    printf("UINT_MAX       = %u\n\n", UINT_MAX);
 
    printf("LONG_MIN       = %+ld\n", LONG_MIN);
    printf("LONG_MAX       = %+ld\n", LONG_MAX);
    printf("ULONG_MAX      = %lu\n\n", ULONG_MAX);
 
    printf("LLONG_MIN      = %+lld\n", LLONG_MIN);
    printf("LLONG_MAX      = %+lld\n", LLONG_MAX);
    printf("ULLONG_MAX     = %llu\n\n", ULLONG_MAX);
 
    printf("PTRDIFF_MIN    = %td\n", PTRDIFF_MIN);
    printf("PTRDIFF_MAX    = %+td\n", PTRDIFF_MAX);
    printf("SIZE_MAX       = %zu\n", SIZE_MAX);
    printf("SIG_ATOMIC_MIN = %+jd\n",(intmax_t)SIG_ATOMIC_MIN);
    printf("SIG_ATOMIC_MAX = %+jd\n",(intmax_t)SIG_ATOMIC_MAX);
    printf("WCHAR_MIN      = %+jd\n",(intmax_t)WCHAR_MIN);
    printf("WCHAR_MAX      = %+jd\n",(intmax_t)WCHAR_MAX);
    printf("WINT_MIN       = %jd\n", (intmax_t)WINT_MIN);
    printf("WINT_MAX       = %jd\n", (intmax_t)WINT_MAX);
}
```

## See also
- [C++ documentation](/cpp/types/climits/)
