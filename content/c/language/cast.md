---
title: "cast operator"
source_path: "c/language/cast"
category: "c"
---

Performs explicit type conversion

## Notes
Because [const](/c/language/const/), [volatile](/c/language/volatile/), [restrict](/c/language/restrict/), and [_Atomic](/c/language/atomic/) qualifiers have effect on [lvalues](/c/language/value_category/) only, a cast to a cvr-qualified or atomic type is exactly equivalent to the cast to the corresponding unqualified type.

The cast to void is sometimes useful to silence compiler warnings about unused results.

The conversions not listed here are not allowed. In particular,

If the implementation provides [intptr_t](/c/types/integer/) and/or [uintptr_t](/c/types/integer/), then a cast from a pointer to an object type (including cv void) to these types is always well-defined. However, this is not guaranteed for a function pointer.

Note that conversions between function pointers and object pointers are accepted as extensions by many compilers, and expected by some usages of [POSIX dlsym() function](https://pubs.opengroup.org/onlinepubs/9699919799/functions/dlsym.html).

## Example
```cpp
#include <stdio.h>
 
int main(void)
{
    // examining object representation is a legitimate use of cast
    double d = 3.14;
    printf("The double %.2f (%a) is: ", d, d);
    for (size_t n = 0; n < sizeof d; ++n)
        printf("0x%02x ", ((unsigned char*)&d)[n]);
 
    // edge cases
    struct S { int x; } s;
//    (struct S)s; // error; not a scalar type
                   // even though casting to the same type does nothing
    (void)s; // okay to cast any type to void
}
```

## See also
- [C++ documentation](/cpp/language/explicit_cast/)
