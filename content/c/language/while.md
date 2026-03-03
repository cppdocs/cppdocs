---
title: "while loop"
source_path: "c/language/while"
category: "c"
---

Executes a statement repeatedly, until the value of expression becomes equal to zero. The test takes place before each iteration.

## Notes
Boolean and pointer expressions are often used as loop controlling expressions. The boolean value false and the null pointer value of any pointer type compare equal to zero.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
enum { SIZE = 8 };
int main(void)
{
    // trivial example
    int array[SIZE], n = 0;
    while(n < SIZE) array[n++] = rand() % 2;
    puts("Array filled!");
    n = 0;
    while(n < SIZE) printf("%d ", array[n++]);
    printf("\n");
 
    // classic strcpy() implementation
    // (copies a null-terminated string from src to dst)
    char src[] = "Hello, world", dst[sizeof src], *p = dst, *q = src;
    while((*p++ = *q++)) // double parentheses (that are not strictly necessary)
                         // used to suppress warnings, ensuring that this is an
                         // assignment (as opposed to a comparison) by intention,
                         // whose result is used as a truth value
        ; // null statement
    puts(dst);
}
```

## See also
- [C++ documentation](/cpp/language/while/)
