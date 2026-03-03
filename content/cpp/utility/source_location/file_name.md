---
title: "std::source_location::file_name"
source_path: "cpp/utility/source_location/file_name"
category: "utility"
since: "C++20"
---

Returns the name of the current source file represented by this object, represented as a null-terminated byte string.

## Declarations
```cpp
constexpr const char* file_name() const noexcept;
```
_(since C++20)_

## Return value
The name of the current source file represented by this object, represented as a null-terminated byte string.

## Example
```cpp
#include <iostream>
#include <source_location>
 
void print_this_file_name(
    std::source_location location = std::source_location::current())
{
    // Name of file that contains the call site of this function.
    std::cout << "File: " << location.file_name() << '\n';
}
 
int main()
{
#line 1 "cppreference.cpp"
    print_this_file_name();
}
```

## See also
- [line](/cpp/utility/source_location/line/)
- [column](/cpp/utility/source_location/column/)
- [function_name](/cpp/utility/source_location/function_name/)
- [source_file](/cpp/utility/stacktrace_entry/source_file/)
- [Filename and line information](/cpp/preprocessor/line/)
