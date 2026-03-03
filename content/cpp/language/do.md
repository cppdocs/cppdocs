---
title: "do-while loop"
source_path: "cpp/language/do"
category: "language"
---

Conditionally executes a statement repeatedly (at least once).

## Notes
As part of the C++ [forward progress guarantee](/cpp/language/multithread/#Progress_guarantee), the behavior is [undefined](/cpp/language/ub/) if a loopthat is not a [trivial infinite loop](/cpp/language/multithread/#Trivial_infinite_loops)(since C++26) without [observable behavior](/cpp/language/as_if/) does not terminate. Compilers are permitted to remove such loops.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string>
 
int main()
{
    int j = 2;
    do // compound statement is the loop body
    {
        j += 2;
        std::cout << j << ' ';
    }
    while (j < 9);
    std::cout << '\n';
 
    // common situation where do-while loop is used
    std::string s = "aba";
    std::sort(s.begin(), s.end());
 
    do std::cout << s << '\n'; // expression statement is the loop body
    while (std::next_permutation(s.begin(), s.end()));
}
```

## See also
- [C documentation](/c/language/do/)
