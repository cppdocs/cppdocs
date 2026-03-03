---
title: "std::exit"
source_path: "cpp/utility/program/exit"
header: "<cstdlib>"
category: "utility"
since: "C++11"
---

Causes normal program termination to occur.

## Declarations
```cpp
void exit( int exit_code );
```
_(until C++11)_

```cpp
[[noreturn]] void exit( int exit_code );
```
_(since C++11)_

## Parameters
- `exit_code`: exit status of the program

## Return value
(none)

## Example
```cpp
#include <cstdlib>
#include <iostream>
 
struct Static
{
    ~Static() 
    {
        std::cout << "Static destructor\n";
    }
};
 
struct Local
{
    ~Local() 
    {
        std::cout << "Local destructor\n";
    }
};
 
Static static_variable; // Destructor of this object *will* be called
 
void atexit_handler()
{
    std::cout << "atexit handler\n";
}
 
int main()
{
    Local local_variable; // Destructor of this object will *not* be called
    const int result = std::atexit(atexit_handler); // Handler will be called
 
    if (result != 0)
    {
        std::cerr << "atexit registration failed\n";
        return EXIT_FAILURE;
    }
 
    std::cout << "test\n";
    std::exit(EXIT_FAILURE);
 
    std::cout << "this line will *not* be executed\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3 | C++98 | during cleanup, the behavior was unclear when (1) a function isregistered with std::atexit or (2) a static local object is initialized | made clear |

## See also
- [abort](/cpp/utility/program/abort/)
- [atexit](/cpp/utility/program/atexit/)
- [quick_exit](/cpp/utility/program/quick_exit/)
- [at_quick_exit](/cpp/utility/program/at_quick_exit/)
- [std::quick_exit](/cpp/utility/program/quick_exit/)
- [C documentation](/c/program/exit/)
