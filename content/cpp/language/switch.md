---
title: "switch statement"
source_path: "cpp/language/switch"
category: "language"
---

Transfers control to one of several statements, depending on the value of a condition.

## Notes
Because transfer of control is [not permitted to enter the scope](/cpp/language/goto/) of a variable, if a declaration statement is encountered inside the statement, it has to be scoped in its own compound statement:

## Example
```cpp
#include <iostream>
 
int main()
{
    const int i = 2;
    switch (i)
    {
        case 1:
            std::cout << '1';
        case 2:              // execution starts at this case label
            std::cout << '2';
        case 3:
            std::cout << '3';
            [[fallthrough]]; // C++17 attribute to silent the warning on fallthrough
        case 5:
            std::cout << "45";
            break;           // execution of subsequent statements is terminated
        case 6:
            std::cout << '6';
    }
 
    std::cout << '\n';
 
    switch (i)
    {
        case 4:
            std::cout << 'a';
        default:
            std::cout << 'd'; // there are no applicable constant expressions 
                              // therefore default is executed
    }
 
    std::cout << '\n';
 
    switch (i)
    {
        case 4:
            std::cout << 'a'; // nothing is executed
    }
 
    // when enumerations are used in a switch statement, many compilers
    // issue warnings if one of the enumerators is not handled
    enum color { RED, GREEN, BLUE };
    switch (RED)
    {
        case RED:
            std::cout << "red\n";
            break;
        case GREEN:
            std::cout << "green\n";
            break;
        case BLUE:
            std::cout << "blue\n";
            break;
    }
 
    // the C++17 init-statement syntax can be helpful when there is
    // no implicit conversion to integral or enumeration type
    struct Device
    {
        enum State { SLEEP, READY, BAD };
        auto state() const { return m_state; }
 
        /* ... */
 
    private:
        State m_state{};
    };
 
    switch (auto dev = Device{}; dev.state())
    {
        case Device::SLEEP:
            /* ... */
            break;
        case Device::READY:
            /* ... */
            break;
        case Device::BAD:
            /* ... */
            break;
    }
 
    // pathological examples
 
    // the statement does not have to be a compound statement
    switch (0)
        std::cout << "this does nothing\n";
 
    // labels do not require a compound statement either
    switch (int n = 1)
        case 0:
        case 1:
            std::cout << n << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1767 | C++98 | condition ﻿s of types that are not subject tointegral promotion could not be promoted | do not promotecondition ﻿s of these types |
| CWG 2629 | C++98 | condition could be a declaration of a floating-point variable | prohibited |

## See also
- [C documentation](/c/language/switch/)
