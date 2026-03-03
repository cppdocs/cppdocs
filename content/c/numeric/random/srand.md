---
title: "srand"
source_path: "c/numeric/random/srand"
header: "<stdlib.h>"
category: "c"
---

Seeds the pseudo-random number generator used by [rand()](/c/numeric/random/rand/) with the value seed.

## Declarations
```cpp
void srand( unsigned seed );
```

## Parameters
- `seed`: the seed value

## Return value
(none)

## Notes
Generally speaking, the pseudo-random number generator should only be seeded once, before any calls to rand(), and the start of the program.
It should not be repeatedly seeded, or reseeded every time you wish to generate a new batch of pseudo-random numbers.

Standard practice is to use the result of a call to [time](/c/chrono/time/)(0) as the seed.
However, time() returns a [time_t](/c/chrono/time_t/) value, and time_t is not guaranteed to be an integral type.
In practice, though, every major implementation defines time_t to be an integral type, and this is also what POSIX requires.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
 
int main(void)
{
    srand(time(NULL)); //use current time as seed for random generator
    int random_variable = rand();
    printf("Random value on [0,%d]: %d\n", RAND_MAX, random_variable);
}
```

## See also
- [rand](/c/numeric/random/rand/)
- [RAND_MAX](/c/numeric/random/RAND_MAX/)
- [rand](/c/numeric/random/rand/)
- [C++ documentation](/cpp/numeric/random/srand/)
