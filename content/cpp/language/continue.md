---
title: "continue statement"
source_path: "cpp/language/continue"
category: "language"
---

Causes the remaining portion of the enclosing [for](/cpp/language/for/), [range-for](/cpp/language/range-for/), [while](/cpp/language/while/) or [do-while](/cpp/language/do/) loop body to be skipped.

## Example
```cpp
#include <iostream>
 
int main()
{
    for (int i = 0; i < 10; ++i)
    {
        if (i != 5)
            continue;
        std::cout << i << ' ';      // this statement is skipped each time i != 5
    }
    std::cout << '\n';
 
    for (int j = 0; 2 != j; ++j)
        for (int k = 0; k < 5; ++k) // only this loop is affected by continue
        {
            if (k == 3)
                continue;
            // this statement is skipped each time k == 3:
            std::cout << '(' << j << ',' << k << ") ";
        }
    std::cout << '\n';
}
```

## See also
- [C documentation](/c/language/continue/)
