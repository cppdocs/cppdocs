---
title: "std::monostate"
source_path: "cpp/utility/variant/monostate"
header: "<variant>"
category: "utility"
since: "C++17"
---

Unit type intended for use as a well-behaved empty alternative in [std::variant](/cpp/utility/variant/). In particular, a variant of non-default-constructible types may list std::monostate as its first alternative: this makes the variant itself default-constructible.

## Declarations
```cpp
struct monostate { };
```
_(since C++17)_

## Example
```cpp
#include <cassert>
#include <iostream>
#include <variant>
 
struct S
{
    S(int i) : i(i) {}
    int i;
};
 
int main()
{
    // Without the monostate type this declaration will fail.
    // This is because S is not default-constructible.
    std::variant<std::monostate, S> var;
    assert(var.index() == 0);
 
    try
    {
        std::get<S>(var); // throws! We need to assign a value
    }
    catch(const std::bad_variant_access& e)
    {
        std::cout << e.what() << '\n';
    }
 
    var = 42;
    std::cout << "std::get: " << std::get<S>(var).i << '\n'
              << "std::hash: " << std::hex << std::showbase
              << std::hash<std::monostate>{}(std::monostate{}) << '\n';
}
```

## See also
- [(constructor)](/cpp/utility/variant/variant/)
