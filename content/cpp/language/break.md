---
title: "break statement"
source_path: "cpp/language/break"
category: "language"
---

Causes the enclosing [for](/cpp/language/for/), [range-for](/cpp/language/range-for/), [while](/cpp/language/while/) or [do-while](/cpp/language/do/) loop or [switch statement](/cpp/language/switch/) to terminate.

## Notes
A break statement cannot be used to break out of multiple nested loops. The [goto statement](/cpp/language/goto/) may be used for this purpose.

## Example
```cpp
#include <iostream>
 
int main()
{
    int i = 2;
    switch (i)
    {
        case 1: std::cout << "1";   // <---- maybe warning: fall through
        case 2: std::cout << "2";   // execution starts at this case label (+warning)
        case 3: std::cout << "3";   // <---- maybe warning: fall through
        case 4:                     // <---- maybe warning: fall through
        case 5: std::cout << "45";  //
                break;              // execution of subsequent statements is terminated
        case 6: std::cout << "6";
    }
    std::cout << '\n';
 
    for (char c = 'a'; c < 'c'; c++)
    {
        for (int i = 0; i < 5; i++)      // only this loop is affected by break
        {                                //
            if (i == 2)                  //
                break;                   //
            std::cout << c << i << ' ';  //
        }
    }
    std::cout << '\n';
}
```

## See also
- [fallthrough](/cpp/language/attributes/fallthrough/)
- [C documentation](/c/language/break/)
