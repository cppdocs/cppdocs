---
title: "std::rethrow_exception"
source_path: "cpp/error/rethrow_exception"
header: "<exception>"
category: "error"
---

Throws the previously captured exception object referred-to by the exception pointer p, or a copy of that object.

## Declarations
```cpp
[[noreturn]] void rethrow_exception( std::exception_ptr p );
```
_(since C++11) (constexpr since C++26)_

## Parameters
- `p`: non-null std::exception_ptr

## Notes
Before [P1675R2](https://wg21.link/P1675R2), rethrow_exception was not allowed to copy the exception object, which is unimplementable on some platforms where exception objects are allocated on the stack.

## Example
```cpp
#include <exception>
#include <iostream>
#include <stdexcept>
#include <string>
 
void handle_eptr(std::exception_ptr eptr) // passing by value is OK
{
    try
    {
        if (eptr)
            std::rethrow_exception(eptr);
    }
    catch(const std::exception& e)
    {
        std::cout << "Caught exception: '" << e.what() << "'\n";
    }
}
 
int main()
{
    std::exception_ptr eptr;
 
    try
    {
        [[maybe_unused]]
        char ch = std::string().at(1); // this generates a std::out_of_range
    }
    catch(...)
    {
        eptr = std::current_exception(); // capture
    }
 
    handle_eptr(eptr);
 
} // destructor for std::out_of_range called here, when the eptr is destructed
```

## See also
- [exception_ptr](/cpp/error/exception_ptr/)
- [current_exception](/cpp/error/current_exception/)
- [std::exception_ptr](/cpp/error/exception_ptr/)
