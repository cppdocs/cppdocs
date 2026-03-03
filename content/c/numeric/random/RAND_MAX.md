---
title: "RAND_MAX"
source_path: "c/numeric/random/RAND_MAX"
header: "<stdlib.h>"
category: "c"
aliases: ["/c/numeric/random/RAND_MAX/"]
---

Expands to an integer constant expression equal to the maximum value returned by the function [rand()](/c/numeric/random/rand/). This value is implementation dependent. It's guaranteed that this value is at least 32767.

## Declarations
```cpp
#define RAND_MAX /*implementation defined*/
```

## Example
```cpp
#include <limits.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
 
int main(void)
{
    srand(time(NULL)); // use current time as seed for random generator
    printf("RAND_MAX: %i\n", RAND_MAX);
    printf("INT_MAX: %i\n", INT_MAX);
    printf("Random value on [0,1]: %f\n", (double)rand() / RAND_MAX);
}
```

## See also
- [rand](/c/numeric/random/rand/)
- [srand](/c/numeric/random/srand/)
- [C++ documentation](/cpp/numeric/random/rand_max/)
