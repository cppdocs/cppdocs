---
title: "std::current_exception"
source_path: "cpp/error/current_exception"
header: "<exception>"
category: "error"
---

If called during exception handling (typically, in a catch clause), captures the current exception object and creates an [std::exception_ptr](/cpp/error/exception_ptr/) that holds either a copy or a reference to that exception object (depending on the implementation). The referenced object remains valid at least as long as there is an exception_ptr object that refers to it.

## Declarations
```cpp
std::exception_ptr current_exception() noexcept;
```
_(since C++11) (constexpr since C++26)_

## Return value
An instance of [std::exception_ptr](/cpp/error/exception_ptr/) holding a reference to the exception object, or a copy of the exception object, or to an instance of [std::bad_alloc](/cpp/memory/new/bad_alloc/) or to an instance of [std::bad_exception](/cpp/error/bad_exception/).

## Notes
On the implementations that follow [Itanium C++ ABI](https://itanium-cxx-abi.github.io/cxx-abi/abi.html) (GCC, Clang, etc), exceptions are allocated on the heap when thrown (except for [std::bad_alloc](/cpp/memory/new/bad_alloc/) in some cases), and this function simply creates the smart pointer referencing the previously-allocated object, On MSVC, exceptions are allocated on stack when thrown, and this function performs the heap allocation and copies the exception object.

On Windows in managed CLR environments [[1]](https://learn.microsoft.com/en-us/cpp/dotnet/exceptions-in-cpp-cli), the implementation will store a [std::bad_exception](/cpp/error/bad_exception/) when the current exception is a managed exception ([[2]](https://github.com/microsoft/STL/blob/65aab97a8e75e7ba409002e518ed799006dfb285/stl/src/excptptr.cpp#L367)). Note that catch(...) catches also managed exceptions:

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
- [rethrow_exception](/cpp/error/rethrow_exception/)
- [std::exception_ptr](/cpp/error/exception_ptr/)
- [make_exception_ptr](/cpp/error/make_exception_ptr/)
- [std::exception_ptr](/cpp/error/exception_ptr/)
- [uncaught_exceptionuncaught_exceptions](/cpp/error/exception/uncaught_exception/)
