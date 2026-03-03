---
title: "std::runtime_format"
source_path: "cpp/utility/format/runtime_format"
header: "<format>"
category: "utility"
since: "C++26"
---

Returns an object that stores a runtime format string directly usable in user-oriented formatting functions and can be implicitly converted to [std::basic_format_string](/cpp/utility/format/basic_format_string/).

## Declarations
```cpp
/*runtime-format-string*/<char> runtime_format( std::string_view fmt ) noexcept;
```
_(since C++26)_

```cpp
/*runtime-format-string*/<wchar_t> runtime_format( std::wstring_view fmt ) noexcept;
```
_(since C++26)_

## Parameters
- `fmt`: a string view

## Return value
An object holding the runtime format string of the exposition-only type:

## Notes
Since the return type of runtime_format is neither copyable nor movable, an attempt of passing runtime_fmt as glvalue inhibits the construction of std::basic_format_string which results in program ill-formed. To construct std::basic_format_string with runtime_format, the returned value of runtime_format is passed directly on std::basic_format_string as prvalue where copy elision is guaranteed.

## Example
```cpp
#include <format>
#include <print>
#include <string>
#include <string_view>
 
int main()
{
    std::print("Hello {}!\n", "world");
 
    std::string fmt;
    for (int i{}; i != 3; ++i)
    {
        fmt += "{} "; // constructs the formatting string
        std::print("{} : ", fmt);
        std::println(std::runtime_format(fmt), "alpha", 'Z', 3.14, "unused");
    }
}
```

## See also
- [format](/cpp/utility/format/format/)
- [vformat](/cpp/utility/format/vformat/)
- [std::format](/cpp/utility/format/format/)
- [basic_format_stringformat_stringwformat_string](/cpp/utility/format/basic_format_string/)
