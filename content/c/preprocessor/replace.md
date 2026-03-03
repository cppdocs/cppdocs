---
title: "Replacing text macros"
source_path: "c/preprocessor/replace"
category: "c"
---

The preprocessor supports text macro replacement and function-like text macro replacement.

## Example
```cpp
#include <stdio.h>
 
// make function factory and use it
#define FUNCTION(name, a) int fun_##name(int x) { return (a) * x; }
 
FUNCTION(quadruple, 4)
FUNCTION(double, 2)
 
#undef FUNCTION
#define FUNCTION 34
#define OUTPUT(a) puts( #a )
 
int main(void)
{
    printf("quadruple(13): %d\n", fun_quadruple(13) );
    printf("double(21): %d\n", fun_double(21) );
    printf("%d\n", FUNCTION);
    OUTPUT(billion);               // note the lack of quotes
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| DR 321 | C99 | it was unclear if L'x' == 'x' always holdsamong the basic character set | __STDC_MB_MIGHT_NEQ_WC__ added for the purpose |

## See also
- [C++ documentation](/cpp/preprocessor/replace/)
