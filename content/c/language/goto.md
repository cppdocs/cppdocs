---
title: "goto statement"
source_path: "c/language/goto"
category: "c"
---

Transfers control unconditionally to the desired location.

## Notes
Because declarations are not statements, a label before a declaration must use a null statement (a semicolon immediately after the colon). Same applies to a label before the end of a block.

C++ imposes additional limitations on the goto statement, but allows labels before declarations (which are statements in C++).

## Example
```cpp
#include <stdio.h>
 
int main(void)
{
    // goto can be used to leave a multi-level loop easily
    for (int x = 0; x < 3; x++) {
        for (int y = 0; y < 3; y++) {
            printf("(%d;%d)\n",x,y);
            if (x + y >= 3) goto endloop;
        }
    }
endloop:;
}
```

## See also
- [C++ documentation](/cpp/language/goto/)
