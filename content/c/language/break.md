---
title: "break statement"
source_path: "c/language/break"
category: "c"
---

Causes the enclosing [for](/c/language/for/), [while](/c/language/while/) or [do-while](/c/language/do/) loop or [switch statement](/c/language/switch/) to terminate.

## Notes
A break statement cannot be used to break out of multiple nested loops. The [goto statement](/c/language/goto/) may be used for this purpose.

## Example
```cpp
#include <stdio.h>
 
int main(void)
{
    int i = 2;
    switch (i)
    {
        case 1: printf("1");
        case 2: printf("2");   // i==2, so execution starts at this case label
        case 3: printf("3");
        case 4:
        case 5: printf("45");
                break;         // execution of subsequent cases is terminated
        case 6: printf("6");
    }
    printf("\n");
 
    // Compare outputs from these two nested for loops.
    for (int j = 0; j < 2; j++)
        for (int k = 0; k < 5; k++)
            printf("%d%d ", j,k);
    printf("\n");
 
    for (int j = 0; j < 2; j++)
    {
        for (int k = 0; k < 5; k++) // only this loop is exited by break
        {
            if (k == 2)
                break;
            printf("%d%d ", j,k);
        }
    }
}
```

## See also
- [fallthrough](/c/language/attributes/fallthrough/)
- [C++ documentation](/cpp/language/break/)
