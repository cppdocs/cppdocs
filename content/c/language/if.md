---
title: "if statement"
source_path: "c/language/if"
category: "c"
---

Conditionally executes code.

## Notes
The else is always associated with the closest preceding if (in other words, if statement-true is also an if statement, then that inner if statement must contain an else part as well):

If statement-true is entered through a [goto](/c/language/goto/), statement-false is not executed.

## Example
```cpp
#include <stdio.h>
 
int main(void)
{
    int i = 2;
    if (i > 2) {
        printf("first is true\n");
    } else {
        printf("first is false\n");
    }
 
    i = 3;
    if (i == 3) printf("i == 3\n");
 
    if (i != 3) printf("i != 3 is true\n");
    else        printf("i != 3 is false\n");
}
```

## See also
- [C++ documentation](/cpp/language/if/)
