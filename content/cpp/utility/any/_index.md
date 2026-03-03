---
title: "std::any"
source_path: "cpp/utility/any"
header: "<any>"
---

The class any describes a type-safe container for single values of any [copy constructible](/cpp/types/is_copy_constructible/) type.

## Declarations
```cpp
class any;
```
_(since C++17)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_any
201606L
(C++17)
std::any

## Example
```cpp
#include <any>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    // any type
    std::any a = 1;
    std::cout << a.type().name() << ": " << std::any_cast<int>(a) << '\n';
    a = 3.14;
    std::cout << a.type().name() << ": " << std::any_cast<double>(a) << '\n';
    a = true;
    std::cout << a.type().name() << ": " << std::any_cast<bool>(a) << '\n';
 
    // bad cast
    try
    {
        a = 1;
        std::cout << std::any_cast<float>(a) << '\n';
    }
    catch (const std::bad_any_cast& e)
    {
        std::cout << e.what() << '\n';
    }
 
    // has value
    a = 2;
    if (a.has_value())
        std::cout << a.type().name() << ": " << std::any_cast<int>(a) << '\n';
 
    // reset
    a.reset();
    if (!a.has_value())
        std::cout << "no value\n";
 
    // pointer to contained data
    a = 3;
    int* i = std::any_cast<int>(&a);
    std::cout << *i << '\n';
}
```

## See also
- [function](/cpp/utility/functional/function/)
- [move_only_function](/cpp/utility/functional/move_only_function/)
- [variant](/cpp/utility/variant/)
- [optional](/cpp/utility/optional/)
