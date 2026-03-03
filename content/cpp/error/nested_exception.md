---
title: "std::nested_exception"
source_path: "cpp/error/nested_exception"
header: "<exception>"
category: "error"
since: "C++11"
---

std::nested_exception is a polymorphic mixin class which can capture and store the current exception, making it possible to nest exceptions of arbitrary types within each other.

## Declarations
```cpp
class nested_exception;
```
_(since C++11)_

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
#include <fstream>
#include <iostream>
#include <stdexcept>
#include <string>
 
// prints the explanatory string of an exception. If the exception is nested,
// recurses to print the explanatory string of the exception it holds
void print_exception(const std::exception& e, int level =  0)
{
    std::cerr << std::string(level, ' ') << "exception: " << e.what() << '\n';
    try
    {
        std::rethrow_if_nested(e);
    }
    catch (const std::exception& nestedException)
    {
        print_exception(nestedException, level + 1);
    }
    catch (...) {}
}
 
// sample function that catches an exception and wraps it in a nested exception
void open_file(const std::string& s)
{
    try
    {
        std::ifstream file(s);
        file.exceptions(std::ios_base::failbit);
    }
    catch (...)
    {
        std::throw_with_nested(std::runtime_error("Couldn't open " + s));
    }
}
 
// sample function that catches an exception and wraps it in a nested exception
void run()
{
    try
    {
        open_file("nonexistent.file");
    }
    catch (...)
    {
        std::throw_with_nested(std::runtime_error("run() failed"));
    }
}
 
// runs the sample function above and prints the caught exception
int main()
{
    try
    {
        run();
    }
    catch (const std::exception& e)
    {
        print_exception(e);
    }
}
```

## See also
- [exception_ptr](/cpp/error/exception_ptr/)
- [throw_with_nested](/cpp/error/throw_with_nested/)
- [rethrow_if_nested](/cpp/error/rethrow_if_nested/)
