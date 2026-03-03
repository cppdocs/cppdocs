---
title: "std::experimental::source_location::file_name"
source_path: "cpp/experimental/source_location/file_name"
category: "experimental"
---

Returns the name of the current source file represented by this object, represented as a null-terminated byte string.

## Declarations
```cpp
constexpr const char* file_name() const noexcept;
```
_(library fundamentals TS v2)_

## Return value
The name of the current source file represented by this object, represented as a null-terminated byte string.

## Example
```cpp
#include <experimental/source_location>
#include <iostream>
 
inline void print_this_file_name(
    const std::experimental::source_location& location
        = std::experimental::source_location::current())
{
    // Name of file that contains the call-site of this function.
    std::cout << "File: " << location.file_name() << '\n';
}
 
int main()
{
    print_this_file_name();
}
```

## See also
- [line](/cpp/experimental/source_location/line/)
- [column](/cpp/experimental/source_location/column/)
- [function_name](/cpp/experimental/source_location/function_name/)
- [C++ documentation](/cpp/preprocessor/line/)
