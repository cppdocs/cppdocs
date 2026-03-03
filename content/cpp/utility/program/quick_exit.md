---
title: "std::quick_exit"
source_path: "cpp/utility/program/quick_exit"
header: "<cstdlib>"
category: "utility"
since: "C++11"
---

Causes normal program termination to occur without completely cleaning the resources.

## Declarations
```cpp
[[noreturn]] void quick_exit( int exit_code ) noexcept;
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
 
template<int N>
void quick_exit_handler()
{
    std::cout << "quick_exit handler #" << N << std::endl; // flush is intended
}
 
void at_exit_handler()
{
    std::cout << "at_exit handler\n";
}
 
int main()
{
    if (std::at_quick_exit(quick_exit_handler<1>) ||
        std::at_quick_exit(quick_exit_handler<2>))
    {
        std::cerr << "Registration failed\n";
        return EXIT_FAILURE;
    }
 
    std::atexit(at_exit_handler); // the handler will not be called
 
    struct R { ~R() { std::cout << "destructor\n"; } } resource;
 
    /*...*/
 
    std::quick_exit(EXIT_SUCCESS);
 
    std::cout << "This statement is unreachable...\n";
}
```

## See also
- [abort](/cpp/utility/program/abort/)
- [exit](/cpp/utility/program/exit/)
- [atexit](/cpp/utility/program/atexit/)
- [std::exit()](/cpp/utility/program/exit/)
- [at_quick_exit](/cpp/utility/program/at_quick_exit/)
- [C documentation](/c/program/quick_exit/)
