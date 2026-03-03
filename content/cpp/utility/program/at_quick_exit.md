---
title: "std::at_quick_exit"
source_path: "cpp/utility/program/at_quick_exit"
header: "<cstdlib>"
category: "utility"
since: "C++11"
---

Registers the function pointed to by func to be called on quick program termination (via [std::quick_exit](/cpp/utility/program/quick_exit/)).

## Declarations
```cpp
int at_quick_exit( /*atexit-handler*/* func ) noexcept;
int at_quick_exit( /*c-atexit-handler*/* func ) noexcept;
```
_(since C++11)_

```cpp
extern "C++" using /*atexit-handler*/ = void();
extern "C" using /*c-atexit-handler*/ = void();
```
_(exposition only*)_

## Parameters
- `func`: pointer to a function to be called on quick program termination

## Return value
0 if the registration succeeds, nonzero value otherwise.

## Notes
The two overloads are distinct because the types of the parameter func are distinct ([language linkage](/cpp/language/language_linkage/) is part of its type).

## Example
```cpp
#include <cstdlib>
#include <iostream>
 
void f1()
{
    std::cout << "pushed first" << std::endl; // flush is intentional
}
 
extern "C" void f2()
{
    std::cout << "pushed second\n";
}
 
int main()
{
    auto f3 = []
    {
        std::cout << "pushed third\n";
    };
 
    std::at_quick_exit(f1);
    std::at_quick_exit(f2);
    std::at_quick_exit(f3);
    std::quick_exit(0);
}
```

## See also
- [abort](/cpp/utility/program/abort/)
- [exit](/cpp/utility/program/exit/)
- [atexit](/cpp/utility/program/atexit/)
- [std::exit()](/cpp/utility/program/exit/)
- [quick_exit](/cpp/utility/program/quick_exit/)
- [C documentation](/c/program/at_quick_exit/)
