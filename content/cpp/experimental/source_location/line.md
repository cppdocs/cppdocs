---
title: "std::experimental::source_location::line"
source_path: "cpp/experimental/source_location/line"
category: "experimental"
---

Returns the line number represented by this object.

## Declarations
```cpp
constexpr std::uint_least32_t line() const noexcept;
```
_(library fundamentals TS v2)_

## Return value
The line number represented by this object.

## Example
```cpp
#include <experimental/source_location>
#include <iostream>
#include <string_view>
using std::experimental::source_location;
 
inline void cur_line(
    const std::string_view message = "",
    const source_location& location = source_location::current())
{
    std::cout
        << location.line() // <- the call-site line #
        << ") "
        << message; 
}
 
int main()
{
    cur_line("++" "\n");
    cur_line(); std::cout << "Hello," "\n";
    cur_line(); std::cout << "C++20!" "\n";
    cur_line("--" "\n");
}
```

## See also
- [column](/cpp/experimental/source_location/column/)
- [file_name](/cpp/experimental/source_location/file_name/)
- [function_name](/cpp/experimental/source_location/function_name/)
- [C++ documentation](/cpp/preprocessor/line/)
