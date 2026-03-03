---
title: "std::format_error"
source_path: "cpp/utility/format/format_error"
header: "<format>"
category: "utility"
since: "C++20"
---

Defines the type of exception object thrown to report errors in the formatting library.

## Declarations
```cpp
class format_error;
```
_(since C++20)_

## Parameters
- `what_arg`: explanatory string
- `other`: another exception object to copy

## Return value
*this

## Notes
Because copying std::format_error is not permitted to throw exceptions, this message is typically stored internally as a separately-allocated reference-counted string. This is also why there is no constructor taking std::string&&: it would have to copy the content anyway.

A derived standard exception class must have a publicly accessible copy constructor. It can be implicitly defined as long as the explanatory strings obtained by what() are the same for the original object and the copied object.

## Example
```cpp
#include <format>
#include <print>
#include <string_view>
#include <utility>
 
int main()
{
    try
    {
        auto x13{37};
        auto args{std::make_format_args(x13)};
        std::ignore = std::vformat("{:()}", args); // throws
    }
    catch(const std::format_error& ex)
    {
        std::println("{}", ex.what());
    }
}
```
