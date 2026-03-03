---
title: "continue statement"
source_path: "c/language/continue"
category: "c"
---

Causes the remaining portion of the enclosing [for](/c/language/for/), [while](/c/language/while/) or [do-while](/c/language/do/) loop body to be skipped.

## Example
```cpp
#include <stdio.h>
 
int main(void) 
{
    for (int i = 0; i < 10; i++) {
        if (i != 5) continue;
        printf("%d ", i);             // this statement is skipped each time i != 5
    }
 
    printf("\n");
 
    for (int j = 0; j < 2; j++) {
        for (int k = 0; k < 5; k++) { // only this loop is affected by continue
            if (k == 3) continue;
            printf("%d%d ", j, k);    // this statement is skipped each time k == 3
        }
    }
}
```

## See also
- [C++ documentation](/cpp/language/continue/)
