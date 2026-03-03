---
title: "std::to_string"
source_path: "cpp/utility/stacktrace_entry/to_string"
header: "<stacktrace>"
category: "utility"
since: "C++23"
---

Returns a string with a description of f.

## Declarations
```cpp
std::string to_string( const std::stacktrace_entry& f );
```
_(since C++23)_

## Parameters
- `f`: a stacktrace_entry whose description is to be returned

## Return value
A string with a description of f.

## Notes
Custom allocators support for this function is not provided, because the implementations usually require platform specific allocations, system calls and a lot of CPU intensive work, while a custom allocator does not provide benefits for this function as the platform specific operations take an order of magnitude more time than the allocation.

## Example
```cpp
#include <stacktrace>
#include <string>
#include <iostream>
 
int main()
{
    auto st = std::stacktrace::current();
    std::cout <<
        "Description of an empty stacktrace entry:\n" +
        std::to_string(std::stacktrace_entry{}) << '\n';
    if (st.size() > 0) {
        std::cout <<
            "Description of a non-empty stacktrace entry:\n" +
            std::to_string(st[0]) << '\n';
    }
}
```

## See also
- [to_string](/cpp/utility/basic_stacktrace/to_string/)
