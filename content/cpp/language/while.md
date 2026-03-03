---
title: "while loop"
source_path: "cpp/language/while"
category: "language"
---

Conditionally executes a statement repeatedly.

## Notes
Regardless of whether statement is a compound statement, it always introduces a [block scope](/cpp/language/scope/). Variables declared in it are only visible in the loop body, in other words,

is the same as

As part of the C++ [forward progress guarantee](/cpp/language/multithread/#Progress_guarantee), the behavior is [undefined](/cpp/language/ub/) if a loopthat is not a [trivial infinite loop](/cpp/language/multithread/#Trivial_infinite_loops)(since C++26) without [observable behavior](/cpp/language/as_if/) does not terminate. Compilers are permitted to remove such loops.

## Example
```cpp
#include <iostream>
 
int main()
{
    // while loop with a single statement
    int i = 0;
    while (i < 10)
         i++;
    std::cout << i << '\n';
 
    // while loop with a compound statement
    int j = 2;
    while (j < 9)
    {
        std::cout << j << ' ';
        j += 2;
    }
    std::cout << '\n';
 
    // while loop with a declaration condition
    char cstr[] = "Hello";
    int k = 0;
    while (char c = cstr[k++])
        std::cout << c;
    std::cout << '\n';
}
```

## See also
- [C documentation](/c/language/while/)
