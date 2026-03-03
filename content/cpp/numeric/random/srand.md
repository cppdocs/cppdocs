---
title: "std::srand"
source_path: "cpp/numeric/random/srand"
header: "<cstdlib>"
category: "numeric"
---

Seeds the pseudo-random number generator used by [std::rand()](/cpp/numeric/random/rand/) with the value seed.

## Declarations
```cpp
void srand( unsigned seed );
```

## Parameters
- `seed`: the seed value

## Return value
(none)

## Notes
Generally speaking, the pseudo-random number generator should only be seeded once, before any calls to rand(), at the start of the program.
It should not be repeatedly seeded, or reseeded every time you wish to generate a new batch of pseudo-random numbers.

Standard practice is to use the result of a call to [std::time](/cpp/chrono/c/time/)(0) as the seed.
However, [std::time](/cpp/chrono/c/time/) returns a [std::time_t](/cpp/chrono/c/time_t/) value, and [std::time_t](/cpp/chrono/c/time_t/) is not guaranteed to be an integral type.
In practice, though, every major implementation defines [std::time_t](/cpp/chrono/c/time_t/) to be an integral type, and this is also what POSIX requires.

## Example
```cpp
#include <cstdlib>
#include <ctime>
#include <iostream>
 
int main() 
{
    std::srand(std::time(0)); // use current time as seed for random generator
    std::cout << "Random value on [0, " << RAND_MAX << "]: " << std::rand() << '\n';
}
```

## See also
- [rand](/cpp/numeric/random/rand/)
- [RAND_MAX](/cpp/numeric/random/rand_max/)
- [std::rand](/cpp/numeric/random/rand/)
- [reseed](/cpp/experimental/reseed/)
- [C documentation](/c/numeric/random/srand/)
