---
title: "rand"
source_path: "c/numeric/random/rand"
header: "<stdlib.h>"
category: "c"
---

Returns a pseudo-random integer value between 0 and [RAND_MAX](/c/numeric/random/RAND_MAX/) (0 and RAND_MAX included).

## Declarations
```cpp
int rand();
```

## Return value
Pseudo-random integer value between 0 and [RAND_MAX](/c/numeric/random/RAND_MAX/), inclusive.

## Notes
There are no guarantees as to the quality of the random sequence produced.
In the past, some implementations of rand() have had serious shortcomings in the randomness, distribution and period of the sequence produced (in one well-known example, the low-order bit simply alternated between 1 and 0 between calls).
rand() is not recommended for serious random-number generation needs, like cryptography.

POSIX requires that the period of the pseudo-random number generator used by rand be at least 232.

POSIX offered a thread-safe version of rand called rand_r, which is obsolete in favor of the [drand48](http://pubs.opengroup.org/onlinepubs/9699919799/functions/drand48.html) family of functions.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
 
int main(void)
{
    srand(time(NULL)); // use current time as seed for random generator
    int random_variable = rand();
    printf("Random value on [0,%d]: %d\n", RAND_MAX, random_variable);
 
    // roll a 6-sided die 20 times
    for (int n=0; n != 20; ++n) {
        int x = 7;
        while(x > 6) 
            x = 1 + rand()/((RAND_MAX + 1u)/6); // Note: 1+rand()%6 is biased
        printf("%d ",  x); 
    }
}
```

## See also
- [srand](/c/numeric/random/srand/)
- [RAND_MAX](/c/numeric/random/RAND_MAX/)
- [C++ documentation](/cpp/numeric/random/rand/)
