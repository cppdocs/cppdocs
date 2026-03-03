---
title: "std::source_location"
source_path: "cpp/utility/source_location"
header: "<source_location>"
---

The std::source_location class represents certain information about the source code, such as file names, line numbers, and function names. Previously, functions that desire to obtain this information about the call site (for logging, testing, or debugging purposes) must use macros so that [predefined macros](/cpp/preprocessor/replace/#Predefined_macros) like __LINE__ and __FILE__ are expanded in the context of the caller. The std::source_location class provides a better alternative.

## Declarations
```cpp
struct source_location;
```
_(since C++20)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_source_location
201907L
(C++20)
Source-code information capture (std::source_location)

## Example
```cpp
#include <iostream>
#include <source_location>
#include <string_view>
 
void log(const std::string_view message,
         const std::source_location location =
               std::source_location::current())
{
    std::clog << "file: "
              << location.file_name() << '('
              << location.line() << ':'
              << location.column() << ") `"
              << location.function_name() << "`: "
              << message << '\n';
}
 
template<typename T>
void fun(T x)
{
    log(x); // line 20
}
 
int main(int, char*[])
{
    log("Hello world!"); // line 25
    fun("Hello C++20!");
}
```

## See also
- [#line](/cpp/preprocessor/line/)
- [stacktrace_entry](/cpp/utility/stacktrace_entry/)
