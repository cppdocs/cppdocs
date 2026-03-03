---
title: "std::source_location::line"
source_path: "cpp/utility/source_location/line"
category: "utility"
since: "C++20"
---

Returns the line number represented by this object.

## Declarations
```cpp
constexpr std::uint_least32_t line() const noexcept;
```
_(since C++20)_

## Return value
The line number represented by this object.

## Example
```cpp
#include <iostream>
#include <string_view>
#include <source_location>
 
inline void cur_line(
    const std::string_view message = "",
    const std::source_location& location = std::source_location::current())
{
    std::cout
        << location.line() // <- the line # of a call site
        << ") "
        << message; 
}
 
int main()
{
    cur_line("++\n");
    cur_line(); std::cout << "Hello,\n";
    cur_line(); std::cout << "C++20!\n";
    cur_line("--\n");
}
```

## See also
- [column](/cpp/utility/source_location/column/)
- [file_name](/cpp/utility/source_location/file_name/)
- [function_name](/cpp/utility/source_location/function_name/)
- [source_line](/cpp/utility/stacktrace_entry/source_line/)
- [Filename and line information](/cpp/preprocessor/line/)
