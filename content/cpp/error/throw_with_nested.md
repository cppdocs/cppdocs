---
title: "std::throw_with_nested"
source_path: "cpp/error/throw_with_nested"
header: "<exception>"
category: "error"
---

If [std::decay](/cpp/types/decay/)<T>::type is a non-final non-union class type that is neither [std::nested_exception](/cpp/error/nested_exception/) nor derived from [std::nested_exception](/cpp/error/nested_exception/), throws an exception of an unspecified type that is publicly derived from both [std::nested_exception](/cpp/error/nested_exception/) and from [std::decay](/cpp/types/decay/)<T>::type, and constructed from [std::forward](/cpp/utility/forward/)<T>(t). The default constructor of the nested_exception base class calls [std::current_exception](/cpp/error/current_exception/), capturing the currently handled exception object, if any, in a [std::exception_ptr](/cpp/error/exception_ptr/).

## Declarations
```cpp
template< class T >
[[noreturn]] void throw_with_nested( T&& t );
```
_(since C++11) (constexpr since C++26)_

## Parameters
- `t`: the exception object to throw

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
- [nested_exception](/cpp/error/nested_exception/)
- [rethrow_if_nested](/cpp/error/rethrow_if_nested/)
- [std::nested_exception](/cpp/error/nested_exception/)
