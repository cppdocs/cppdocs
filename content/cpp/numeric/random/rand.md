---
title: "std::rand"
source_path: "cpp/numeric/random/rand"
header: "<cstdlib>"
category: "numeric"
---

Returns a pseudo-random integral value from the range [0,[RAND_MAX](/cpp/numeric/random/rand_max/)].

## Declarations
```cpp
int rand();
```

## Return value
Pseudo-random integral value between 0 and [RAND_MAX](/cpp/numeric/random/rand_max/).

## Notes
There are no guarantees as to the quality of the random sequence produced.
In the past, some implementations of rand() have had serious shortcomings in the randomness, distribution and period of the sequence produced (in one well-known example, the low-order bit simply alternated between 1 and 0 between calls).

rand() is not recommended for serious random-number generation needs. It is recommended to use C++11's [random number generation](/cpp/numeric/random/) facilities to replace rand().(since C++11)

## Example
```cpp
#include <cstdlib>
#include <ctime>
#include <initializer_list>
#include <iostream>
 
unsigned bounded_rand(unsigned range)
{
    for (unsigned x, r;;)
        if (x = rand(), r = x % range, x - r <= -range)
            return r;
}
 
int main() 
{
    std::srand(std::time({})); // use current time as seed for random generator
    const int random_value = std::rand();
    std::cout << "Random value on [0, " << RAND_MAX << "]: " << random_value << '\n';
 
    for (const unsigned sides : {2, 4, 6, 8})
    {
        std::cout << "Roll " << sides << "-sided die 8 times: ";
        for (int n = 8; n; --n)
            std::cout << 1 + bounded_rand(sides) << ' ';
 
        std::cout << '\n';
    }
}
```

## See also
- [uniform_int_distribution](/cpp/numeric/random/uniform_int_distribution/)
- [srand](/cpp/numeric/random/srand/)
- [RAND_MAX](/cpp/numeric/random/rand_max/)
- [randint](/cpp/experimental/randint/)
- [C documentation](/c/numeric/random/rand/)
