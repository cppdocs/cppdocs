---
title: "Conditional inclusion"
source_path: "c/preprocessor/conditional"
category: "c"
---

The preprocessor supports conditional compilation of parts of source file. This behavior is controlled by #if, #else, #elif, #ifdef, #ifndef, #elifdef, #elifndef(since C23), and #endif directives.

## Notes
While #elifdef and #elifndef directives target C23, implementations may backport them to the older language modes as conforming extensions.

## Example
```cpp
#define ABCD 2
#include <stdio.h>
 
int main(void)
{
 
#ifdef ABCD
    printf("1: yes\n");
#else
    printf("1: no\n");
#endif
 
#ifndef ABCD
    printf("2: no1\n");
#elif ABCD == 2
    printf("2: yes\n");
#else
    printf("2: no2\n");
#endif
 
#if !defined(DCBA) && (ABCD < 2 * 4 - 3)
    printf("3: yes\n");
#endif
 
// C23 directives #elifdef/#elifndef
#ifdef CPU
    printf("4: no1\n");
#elifdef GPU
    printf("4: no2\n");
#elifndef RAM
    printf("4: yes\n"); // selected in C23 mode, may be selected in pre-C23 mode
#else
    printf("4: no3\n"); // may be selected in pre-C23 mode
#endif
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| DR 412 | C89 | failed #elif's expression was required to be valid | failed #elif is skipped |

## See also
- [C++ documentation](/cpp/preprocessor/conditional/)
