---
title: "std::make_format_args, std::make_wformat_args"
source_path: "cpp/utility/format/make_format_args"
header: "<format>"
category: "utility"
since: "C++20"
---

Returns an object that stores an array of formatting arguments and can be implicitly converted to [std::basic_format_args<Context>](/cpp/utility/format/basic_format_args/).

## Declarations
```cpp
template< class Context = std::format_context, class... Args >
/*format-arg-store*/<Context, Args...>
make_format_args( Args&... args );
```
_(since C++20)_

```cpp
template< class... Args >
/*format-arg-store*/<std::wformat_context, Args...>
make_wformat_args( Args&... args );
```
_(since C++20)_

## Parameters
- `args...`: values to be used as formatting arguments

## Notes
A formatting argument has reference semantics for user-defined types and does not extend the lifetime of args. It is the programmer's responsibility to ensure that args outlive the return value. Usually, the result is only used as argument to formatting function.

## Example
```cpp
#include <array>
#include <format>
#include <iostream>
#include <string_view>
 
void raw_write_to_log(std::string_view users_fmt, std::format_args&& args)
{
    static int n{};
    std::clog << std::format("{:04} : ", n++) << std::vformat(users_fmt, args) << '\n';
}
 
template<typename... Args>
constexpr void log(Args&&... args)
{
    // Generate formatting string "{} "...
    std::array<char, sizeof...(Args) * 3 + 1> braces{};
    constexpr const char c[4] = "{} ";
    for (auto i{0uz}; i != braces.size() - 1; ++i)
        braces[i] = c[i % 3];
    braces.back() = '\0';
 
    raw_write_to_log(std::string_view{braces.data()}, std::make_format_args(args...));
}
 
template<typename T>
const T& unmove(T&& x)
{
    return x;
}
 
int main()
{
    log("Number", "of", "arguments", "is", "arbitrary.");
    log("Any type that meets the BasicFormatter requirements", "can be printed.");
    log("For example:", 1, 2.0, '3', "*42*");
 
    raw_write_to_log("{:02} │ {} │ {} │ {}",
                     std::make_format_args(unmove(1), unmove(2.0), unmove('3'), "4"));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2418R2 | C++20 | objects that are neither const-usable nor copyable(such as generator-like objects) are not formattable | allow formatting these objects |
| P2905R2 | C++20 | make_format_args accepted rvalue arguments by forwarding references | only takes lvalue references |
| P2909R4 | C++20 | char or wchar_t might be formatted asout-of-range unsigned integer values | code units are converted to the correspondingunsigned type before such formatting |
| LWG 3631 | C++20 | cv-qualified arguments were incorrectly handled after P2418R2 | handling corrected |

## See also
- [basic_format_argsformat_argswformat_args](/cpp/utility/format/basic_format_args/)
- [vformat](/cpp/utility/format/vformat/)
- [std::format](/cpp/utility/format/format/)
- [vformat_to](/cpp/utility/format/vformat_to/)
- [std::format_to](/cpp/utility/format/format_to/)
