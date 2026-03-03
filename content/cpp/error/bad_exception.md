---
title: "std::bad_exception"
source_path: "cpp/error/bad_exception"
header: "<exception>"
category: "error"
---

std::bad_exception is the type of the exception thrown by the C++ runtime in the following situations:

## Declarations
```cpp
class bad_exception;
```

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_constexpr_exceptions
202411L
(C++26)
constexpr for exception types

## Example
```cpp
#include <exception>
#include <iostream>
#include <stdexcept>
 
void my_unexp()
{
    throw;
}
 
void test()
    throw(std::bad_exception) // Dynamic exception specifications
                              // are deprecated in C++11
{
    throw std::runtime_error("test");
}
 
int main()
{
    std::set_unexpected(my_unexp); // Deprecated in C++11, removed in C++17
 
    try
    {
        test();
    }
    catch (const std::bad_exception& e)
    {
        std::cerr << "Caught " << e.what() << '\n';
    }
}
```
