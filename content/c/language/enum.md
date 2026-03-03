---
title: "Enumerations"
source_path: "c/language/enum"
category: "c"
---

An enumerated type is a distinct [type](/c/language/compatible_type/) whose value is a value of its underlying type (see below), which includes the values of explicitly named constants (enumeration constants).

## Notes
Unlike [struct](/c/language/struct/) or [union](/c/language/union/), there are no forward-declared enums in C:

Enumerations permit the declaration of named constants in a more convenient and structured
fashion than does #define; they are visible in the debugger, obey scope rules, and participate in the type system.

or

Since C23 [constexpr](/c/language/constexpr/) can be used for the same purpose:

Moreover, as a [struct](/c/language/struct/) or [union](/c/language/union/) does not establish its scope in C, an enumeration type and its enumeration constants may be introduced in the member specification of the former, and their scope is the same as of the former, afterwards.

## Example
```cpp
#include <stdio.h>
 
int main(void)
{
    enum TV { FOX = 11, CNN = 25, ESPN = 15, HBO = 22, MAX = 30, NBC = 32 };
 
    printf("List of cable stations:\n");
    printf(" FOX: \t%2d\n", FOX);
    printf(" HBO: \t%2d\n", HBO);
    printf(" MAX: \t%2d\n", MAX);
}
```

## See also
- [C++ documentation](/cpp/language/enum/)
