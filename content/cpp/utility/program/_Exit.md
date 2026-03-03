---
title: "std::_Exit"
source_path: "cpp/utility/program/_Exit"
header: "<cstdlib>"
category: "utility"
since: "C++11"
---

Causes normal program termination to occur without completely cleaning the resources.

## Declarations
```cpp
[[noreturn]] void _Exit( int exit_code ) noexcept;
```
_(since C++11)_

## Parameters
- `exit_code`: exit status of the program

## Return value
(none)

## Notes
Although _Exit is required to be freestanding since C++23, it is not required to be available in a freestanding C implementation.

## Example
```cpp
#include <iostream>
 
class Static
{
public:
    ~Static() 
    {
        std::cout << "Static dtor\n";
    }
};
 
class Local
{
public:
    ~Local() 
    {
        std::cout << "Local dtor\n";
    }
};
 
Static static_variable; // dtor of this object will *not* be called
 
void atexit_handler()
{
    std::cout << "atexit handler\n";
}
 
int main()
{
    Local local_variable; // dtor of this object will *not* be called
 
    // handler will *not* be called
    const int result = std::atexit(atexit_handler);
 
    if (result != 0)
    {
        std::cerr << "atexit registration failed\n";
        return EXIT_FAILURE;
    }
 
    std::cout << "test" << std::endl; // flush from std::endl
        // needs to be here, otherwise nothing will be printed
    std::_Exit(EXIT_FAILURE);
}
```

## See also
- [abort](/cpp/utility/program/abort/)
- [exit](/cpp/utility/program/exit/)
- [C documentation](/c/program/_Exit/)
