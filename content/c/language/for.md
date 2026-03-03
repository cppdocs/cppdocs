---
title: "for loop"
source_path: "c/language/for"
category: "c"
---

Executes a loop.

## Notes
The expression statement used as loop-statement establishes its own block scope, distinct from the scope of init-clause, unlike in C++:

It is possible to enter the body of a loop using [goto](/c/language/goto/). When entering a loop in this manner, init-clause and cond-expression are not executed. (If control then reaches the end of the loop body, repetition may occur including execution of cond-expression.)

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
enum { SIZE = 8 };
int main(void)
{
    int array[SIZE];
    for(size_t i = 0 ; i < SIZE; ++i)
        array [i] = rand() % 2;
    printf("Array filled!\n");
    for (size_t i = 0; i < SIZE; ++i)
        printf("%d ", array[i]);
    putchar('\n');
}
```

## See also
- [C++ documentation](/cpp/language/for/)
