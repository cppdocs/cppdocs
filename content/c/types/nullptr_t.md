---
title: "nullptr_t"
source_path: "c/types/nullptr_t"
header: "<stddef.h>"
category: "c"
---

nullptr_t is the type of the predefined null pointer constant, [nullptr](/c/language/nullptr/). It is a distinct type that is not itself a pointer type. It can be [implicitly converted](/c/language/conversion/) to any pointer type or bool, and the result is the null pointer value of that type or false respectively. No type other than nullptr_t itself can be converted or explicitly cast to nullptr_t.

## Declarations
```cpp
typedef typeof(nullptr) nullptr_t;
```
_(since C23)_

## Example
```cpp
#include <stddef.h>
#include <stdio.h>
 
#define DETECT_NULL_POINTER_CONSTANT(e) \
    _Generic(e,                         \
        void* : puts("void*"),          \
        nullptr_t : puts("nullptr_t"),  \
        default : puts("other")         \
    )
 
int main()
{
    DETECT_NULL_POINTER_CONSTANT(((void*)0));
    DETECT_NULL_POINTER_CONSTANT(0);
    DETECT_NULL_POINTER_CONSTANT(nullptr);
}
```

## See also
- [NULL](/c/types/NULL/)
- [C++ documentation](/cpp/types/nullptr_t/)
