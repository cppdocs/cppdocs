---
title: "C numeric limits interface"
source_path: "cpp/types/climits"
category: "types"
---

See also [std::numeric_limits](/cpp/types/numeric_limits/) interface.

## Notes
The types of these constants, other than CHAR_BIT and MB_LEN_MAX, are required to match the results of the [integral promotions](/cpp/language/implicit_cast/#Integral_promotion) as applied to objects of the types they describe: CHAR_MAX may have type int or unsigned int, but never char. Similarly USHRT_MAX may not be of an unsigned type: its type may be int.

A [freestanding](/cpp/freestanding/) implementation may lack [std::sig_atomic_t](/cpp/utility/program/sig_atomic_t/) and/or [std::wint_t](/cpp/string/wide/#Types) typedef names, in which case the SIG_ATOMIC_* and/or WINT_* macros are correspondingly absent.

Possible output:

## Example
```cpp
#include <climits>
#include <cstdint>
#include <iomanip>
#include <iostream>
 
int main()
{
    constexpr int w = 14;
    std::cout << std::left;
#   define COUT(x) std::cout << std::setw(w) << #x << " = " << x << '\n'
 
    COUT( CHAR_BIT       );
    COUT( MB_LEN_MAX     );
    COUT( CHAR_MIN       );
    COUT( CHAR_MAX       );
    COUT( SCHAR_MIN      );
    COUT( SHRT_MIN       );
    COUT( INT_MIN        );
    COUT( LONG_MIN       );
    COUT( LLONG_MIN      );
    COUT( SCHAR_MAX      );
    COUT( SHRT_MAX       );
    COUT( INT_MAX        );
    COUT( LONG_MAX       );
    COUT( LLONG_MAX      );
    COUT( UCHAR_MAX      );
    COUT( USHRT_MAX      );
    COUT( UINT_MAX       );
    COUT( ULONG_MAX      );
    COUT( ULLONG_MAX     );
    COUT( PTRDIFF_MIN    );
    COUT( PTRDIFF_MAX    );
    COUT( SIZE_MAX       );
    COUT( SIG_ATOMIC_MIN );
    COUT( SIG_ATOMIC_MAX );
    COUT( WCHAR_MIN      );
    COUT( WCHAR_MAX      );
    COUT( WINT_MIN       );
    COUT( WINT_MAX       );
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 416 | C++98 | it was unclear whether the types of the macros in <climits> are guaranteedto match the type to which they refer (C++ refers to C, and C says no) | clarified as notguaranteed |

## See also
- [Fixed width integer types](/cpp/types/integer/)
- [Arithmetic types](/cpp/language/types/)
- [C++ type system overview](/cpp/language/type-id/)
- [Type support (basic types, RTTI, type traits)](/cpp/types/)
- [C documentation](/c/types/limits/)
