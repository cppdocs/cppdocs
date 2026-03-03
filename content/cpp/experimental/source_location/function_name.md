---
title: "std::experimental::source_location::function_name"
source_path: "cpp/experimental/source_location/function_name"
category: "experimental"
---

Returns the name of the function associated with the position represented by this object, if any.

## Declarations
```cpp
constexpr const char* function_name() const noexcept;
```
_(library fundamentals TS v2)_

## Return value
If this object represents a position in a body of a function, returns an implementation-defined null-terminated byte string corresponding to the name of the function.

## Example
```cpp
#include <experimental/source_location>
#include <iostream>
#include <string_view>
 
inline void function_name(
    const std::string_view signature = "()",
    const std::experimental::source_location& location
        = std::experimental::source_location::current())
{
    std::cout
        << location.function_name() // <- name of the caller!
        << signature
        << '\n';
}
 
void foo() { function_name(); }
 
struct S {
    S() { function_name(); }
    S(int) { function_name("(int)"); }
    S& operator=(S const&) { function_name("(const S&)"); return *this; }
    S& operator=(S&&) { function_name("(S&&)"); return *this; }
    ~S() { function_name(); }
};
 
int main()
{
    foo();
    S p;
    S q{42};
    p = q;
    p = std::move(q);
}
```

## See also
- [line](/cpp/experimental/source_location/line/)
- [column](/cpp/experimental/source_location/column/)
- [file_name](/cpp/experimental/source_location/file_name/)
- [C++ documentation](/cpp/preprocessor/line/)
