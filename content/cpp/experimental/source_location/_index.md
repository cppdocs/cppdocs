---
title: "std::experimental::source_location"
source_path: "cpp/experimental/source_location"
header: "<experimental/source_location>"
category: "experimental"
---

The source_location class represents certain information about the source code, such as file names, line numbers, and function names. Previously, functions that desire to obtain this information about the call site (for logging, testing, or debugging purposes) must use macros so that predefined macros like __LINE__ and __FILE__ are expanded in the context of the caller. The source_location class provides a better alternative.

## Declarations
```cpp
struct source_location;
```
_(library fundamentals TS v2)_

## Example
```cpp
#include <experimental/source_location>
#include <iostream>
#include <string_view>
 
void log(const std::string_view message,
         const std::experimental::source_location location =
               std::experimental::source_location::current())
{
    std::cout << "info:"
              << location.file_name() << ':'
              << location.line() << ' '
              << message << '\n';
}
 
int main()
{
    log("Hello world!");
}
```
