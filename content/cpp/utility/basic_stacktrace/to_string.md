---
title: "std::to_string"
source_path: "cpp/utility/basic_stacktrace/to_string"
header: "<stacktrace>"
category: "utility"
since: "C++23"
---

Returns a string with a description of st.

## Declarations
```cpp
template< class Allocator >
std::string to_string( const std::basic_stacktrace<Allocator>& st );
```
_(since C++23)_

## Parameters
- `st`: a basic_stacktrace whose description is to be returned

## Return value
A string with a description of st.

## Notes
Custom allocators support for this function is not provided, because the implementations usually require platform specific allocations, system calls and a lot of CPU intensive work, while a custom allocator does not provide benefits for this function as the platform specific operations take an order of magnitude more time than the allocation.

## Example
```cpp
#include <stacktrace>
#include <string>
#include <iostream>
 
int main()
{
    auto trace = std::stacktrace::current();
    std::cout << std::to_string(trace) << '\n';
}
```

## See also
- [to_string](/cpp/utility/stacktrace_entry/to_string/)
