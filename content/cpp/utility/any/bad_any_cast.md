---
title: "std::bad_any_cast"
source_path: "cpp/utility/any/bad_any_cast"
header: "<any>"
category: "utility"
since: "C++17"
---

Defines a type of object to be thrown by the value-returning forms of [std::any_cast](/cpp/utility/any/any_cast/) on failure.

## Declarations
```cpp
class bad_any_cast : public std::bad_cast;
```
_(since C++17)_

## Parameters
- `other`: another exception object to copy

## Return value
*this

## Notes
Implementations are allowed but not required to override what().

## Example
```cpp
#include <any>
#include <cassert>
#include <print>
 
int main()
{
    auto x = std::any(42);
    assert(std::any_cast<int>(x) == 42); // OK
 
    try
    {
        [[maybe_unused]] auto s = std::any_cast<std::string>(x); // throws
    }
    catch (const std::bad_any_cast& ex)
    {
        std::println("{}", ex.what());
    }
}
```
