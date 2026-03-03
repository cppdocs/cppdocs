---
title: "do-while loop"
source_path: "c/language/do"
category: "c"
---

Executes a statement repeatedly until the value of the condition expression becomes false. The test takes place after each iteration.

## Notes
Boolean and pointer expressions are often used as loop controlling expressions. The boolean value false and the null pointer value of any pointer type compare equal to zero.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
enum { SIZE = 8 };
int main(void)
{
    // trivial example
    int array[SIZE], n = 0;
    do array[n++] = rand() % 2; // the loop body is a single expression statement
    while(n < SIZE);
    puts("Array filled!");
    n = 0;
    do { // the loop body is a compound statement
        printf("%d ", array[n]);
        ++n;
    } while (n < SIZE);
    printf("\n");
 
    // the loop from K&R itoa(). The do-while loop is used
    // because there is always at least one digit to generate
    int num = 1234, i=0;
    char s[10];
    do s[i++] = num % 10 + '0'; // get next digit in reverse order
    while ((num /= 10) > 0);
    s[i] = '\0';
    puts(s);
}
```

## See also
- [C++ documentation](/cpp/language/do/)
