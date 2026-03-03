---
title: "_Alignof (since C11)(deprecated in C23), alignof (since C23) operator"
source_path: "c/language/_Alignof"
category: "c"
---

Queries the alignment requirement of its operand type.

## Notes
The use of _Alignof(until C23)alignof(since C23) with expressions is allowed by some C compilers as a non-standard extension.

## Example
```cpp
#include <stdalign.h>
#include <stddef.h>
#include <stdio.h>
 
int main(void)
{
    printf("Alignment of char = %zu\n", alignof(char));
    printf("Alignment of max_align_t = %zu\n", alignof(max_align_t));
    printf("alignof(float[10]) = %zu\n", alignof(float[10]));
    printf("alignof(struct{char c; int n;}) = %zu\n",
            alignof(struct {char c; int n;}));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| DR 494 | C11 | whether the size expression in a VLA is evaluated in _Alignof was unspecified | it is unevaluated |

## See also
- [max_align_t](/c/types/max_align_t/)
- [_Alignas](/c/language/alignas/)
- [alignas](/c/language/alignas/)
- [C++ documentation](/cpp/language/alignof/)
