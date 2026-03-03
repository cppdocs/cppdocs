---
title: "RAND_MAX"
source_path: "cpp/numeric/random/RAND_MAX"
header: "<cstdlib>"
category: "numeric"
---

Expands to an integer constant expression equal to the maximum value returned by the function [std::rand](/cpp/numeric/random/rand/). This value is implementation dependent. It's guaranteed that this value is at least 32767.

## Declarations
```cpp
#define RAND_MAX /*implementation defined*/
```

## Example
```cpp
#include <climits>
#include <cstdlib>
#include <ctime>
#include <iostream>
 
int main()
{
    // use current time as seed for random generator
    std::srand(std::time(NULL));
 
    std::cout << "RAND_MAX: " << RAND_MAX << '\n'
              << "INT_MAX: " << INT_MAX << '\n'
              << "Random value on [0,1]: "
              << static_cast<double>(std::rand()) / RAND_MAX << '\n';
}
```

## See also
- [rand](/cpp/numeric/random/rand/)
- [srand](/cpp/numeric/random/srand/)
- [C documentation](/c/numeric/random/RAND_MAX/)
