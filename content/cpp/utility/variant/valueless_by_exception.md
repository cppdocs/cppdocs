---
title: "std::variant<Types...>::valueless_by_exception"
source_path: "cpp/utility/variant/valueless_by_exception"
category: "utility"
since: "C++17"
---

Returns false if and only if the variant holds a value.

## Declarations
```cpp
constexpr bool valueless_by_exception() const noexcept;
```
_(since C++17)_

## Notes
A variant may become valueless when initializing the contained value in the following situations:

Since variant is never permitted to allocate dynamic memory, the previous value cannot be retained and, therefore, restored in these situations. The "optional" cases can avoid throwing an exception if the type provides non-throwing moves and the implementation first constructs the new value on the stack and then moves it into the variant.

This applies even to variants of non-class types:

A variant that is valueless by exception — that is, has no value due to a previous exception from one of the situations listed above — is treated as being in an invalid state:

## Example
```cpp
#include <cassert>
#include <iostream>
#include <stdexcept>
#include <string>
#include <variant>
 
struct Demo
{
    Demo(int) {}
    Demo(const Demo&) { throw std::domain_error("copy ctor"); }
    Demo& operator= (const Demo&) = default;
};
 
int main()
{
    std::variant<std::string, Demo> var{"str"};
    assert(var.index() == 0);
    assert(std::get<0>(var) == "str");
    assert(var.valueless_by_exception() == false);
 
    try
    {
        var = Demo{555};
    }
    catch (const std::domain_error& ex)
    {
        std::cout << "1) Exception: " << ex.what() << '\n';
    }
    assert(var.index() == std::variant_npos);
    assert(var.valueless_by_exception() == true);
 
    // Now the var is "valueless" which is an invalid state caused
    // by an exception raised in the process of type-changing assignment.
 
    try
    {
        std::get<1>(var);
    }
    catch (const std::bad_variant_access& ex)
    {
        std::cout << "2) Exception: " << ex.what() << '\n';
    }
 
    var = "str2";
    assert(var.index() == 0);
    assert(std::get<0>(var) == "str2");
    assert(var.valueless_by_exception() == false);
}
```

## See also
- [get(std::variant)](/cpp/utility/variant/get/)
- [index](/cpp/utility/variant/index/)
- [bad_variant_access](/cpp/utility/variant/bad_variant_access/)
