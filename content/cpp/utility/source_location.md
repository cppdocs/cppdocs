---
title: "std::source_location"
source_path: "cpp/utility/source_location"
header: "<source_location>"
category: "utility"
since: "C++20"
---

The std::source_location class represents certain information about the source code, such as file names, line numbers, and function names. Previously, functions that desire to obtain this information about the call site (for logging, testing, or debugging purposes) must use macros so that [predefined macros](/cpp/preprocessor/replace/#Predefined_macros) like __LINE__ and __FILE__ are expanded in the context of the caller. The std::source_location class provides a better alternative.

## Declarations
```cpp
struct source_location;
```
_(since C++20)_

## Semantics
- `std::source_location` is a small value type that carries a snapshot of source-coordinate information.
- A value obtained from [`current()`](/cpp/utility/source_location/current/) represents the call site that triggered the capture, not necessarily the body of the helper that receives it.
- The stored file name, function name, line, and column are implementation-defined observations of that source position.
- The type is intended for diagnostics, logging, assertions, tracing, and test helpers where the call site matters.
- `std::source_location` meets the [DefaultConstructible](/cpp/named_req/DefaultConstructible/), [CopyConstructible](/cpp/named_req/CopyConstructible/), [CopyAssignable](/cpp/named_req/CopyAssignable/), [Destructible](/cpp/named_req/Destructible/), and [Swappable](/cpp/named_req/Swappable/) named requirements.
- `std::is_nothrow_move_constructible_v<std::source_location>`, `std::is_nothrow_move_assignable_v<std::source_location>`, and `std::is_nothrow_swappable_v<std::source_location>` are required to be `true`.
- It is intended that `std::source_location` remains small and cheap to copy.
- It is unspecified whether its copy/move constructors and copy/move assignment operators are trivial or `constexpr`.

### Capture model
- The usual way to create a meaningful `source_location` is to use `std::source_location::current()`, often as the default argument of a function parameter.
- This lets a wrapper function observe the caller's location without relying on preprocessor macros at the wrapper's call sites.
- A default-constructed object has unspecified values and is mainly useful as a placeholder or for later assignment.

### Representation notes
- [`file_name()`](/cpp/utility/source_location/file_name/) and [`function_name()`](/cpp/utility/source_location/function_name/) return null-terminated byte strings whose exact spelling is implementation-defined.
- [`line()`](/cpp/utility/source_location/line/) returns the represented line number.
- [`column()`](/cpp/utility/source_location/column/) returns an implementation-defined offset from the start of the line; it is typically treated as 1-based when provided.
- Values reported by `current()` are affected by the [#line](/cpp/preprocessor/line/) directive in the same way as the predefined macros.

## Member functions
### Creation
- [source_location::source_location](/cpp/utility/source_location/source_location/): constructs a new object with implementation-defined values
- [source_location::current](/cpp/utility/source_location/current/): creates a `source_location` that represents the current call site

### Field access
- [line](/cpp/utility/source_location/line/): returns the represented line number
- [column](/cpp/utility/source_location/column/): returns the represented column number
- [file_name](/cpp/utility/source_location/file_name/): returns the represented file name
- [function_name](/cpp/utility/source_location/function_name/): returns the represented function name, if any

## Notes
`std::source_location` is a vocabulary type for source-coordinate capture. It avoids plumbing `__FILE__`, `__LINE__`, and implementation-specific function-name macros through user code while still preserving caller context.

The standard leaves several details implementation-defined, especially the spelling of function names and the meaning of the reported column number. Code should treat these values as diagnostic metadata rather than as a stable interchange format.

### Feature-test macro
| Macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_source_location` | `201907L` | C++20 | source-code information capture (`std::source_location`) |

## Example
```cpp
#include <iostream>
#include <source_location>
#include <string_view>
 
void log(const std::string_view message,
         const std::source_location location =
               std::source_location::current())
{
    std::clog << "file: "
              << location.file_name() << '('
              << location.line() << ':'
              << location.column() << ") `"
              << location.function_name() << "`: "
              << message << '\n';
}
 
template<typename T>
void fun(T x)
{
    log(x); // line 20
}
 
int main(int, char*[])
{
    log("Hello world!"); // line 25
    fun("Hello C++20!");
}
```

## Reference map
| Area | Primary references |
| --- | --- |
| Construction | [source_location::source_location](/cpp/utility/source_location/source_location/), [source_location::current](/cpp/utility/source_location/current/) |
| Observers | [line](/cpp/utility/source_location/line/), [column](/cpp/utility/source_location/column/), [file_name](/cpp/utility/source_location/file_name/), [function_name](/cpp/utility/source_location/function_name/) |

## References
- C++20 standard (ISO/IEC 14882:2020): 17.8.2 Source location `[support.srcloc]`
- C++23 standard (ISO/IEC 14882:2024): 17.8.2 Source location `[support.srcloc]`

## See also
- [#line](/cpp/preprocessor/line/): preprocessor control over reported file and line information
- [stacktrace_entry](/cpp/utility/stacktrace_entry/): runtime stack frame metadata for collected stacktraces
