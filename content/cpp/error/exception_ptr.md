---
title: "std::exception_ptr"
source_path: "cpp/error/exception_ptr"
header: "<exception>"
category: "error"
since: "C++11"
---

std::exception_ptr is a nullable pointer-like type that manages an exception object which has been thrown and captured with [std::current_exception](/cpp/error/current_exception/). An instance of std::exception_ptr may be passed to another function, possibly on another thread, where the exception may be rethrown and handled with a catch clause.

## Declarations
```cpp
using exception_ptr = /*unspecified*/
```
_(since C++11)_

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
- [make_exception_ptr](/cpp/error/make_exception_ptr/)
- [current_exception](/cpp/error/current_exception/)
- [rethrow_exception](/cpp/error/rethrow_exception/)
