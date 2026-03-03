---
title: "constexpr specifier (since C23)"
source_path: "c/language/constexpr"
category: "c"
---

A scalar object declared with the constexpr storage-class specifier is a [constant](/c/language/constant_expression/). It must be fully and explicitly initialized according to the static initialization rules. It still has linkage appropriate to its declaration and it exist at runtime to have its address taken; it simply cannot be modified at runtime in any way, i.e. the compiler can use its knowledge of the object’s fixed value in any other [constant expression](/c/language/constant_expression/).

## Example
```cpp
#include <fenv.h>
#include <stdio.h>
 
int main(void)
{
    constexpr float f = 23.0f;
    constexpr float g = 33.0f;
    fesetround(FE_TOWARDZERO);
    constexpr float h = f / g; // is not affected by fesetround() above
    printf("%f\n", h);
}
```

## See also
- [C++ documentation](/cpp/language/constexpr/)
