---
title: "std::any::has_value"
source_path: "cpp/utility/any/has_value"
category: "utility"
since: "C++17"
---

Checks whether the object contains a value.

## Declarations
```cpp
bool has_value() const noexcept;
```
_(since C++17)_

## Return value
true if and only if the instance contains a value.

## Example
```cpp
#include <any>
#include <cassert>
#include <string>
 
int main()
{
    std::any a0;
    assert(a0.has_value() == false);
 
    std::any a1 = 42;
    assert(a1.has_value() == true);
    assert(std::any_cast<int>(a1) == 42);
    a1.reset();
    assert(a1.has_value() == false);
 
    auto a2 = std::make_any<std::string>("Andromeda");
    assert(a2.has_value() == true);
    assert(std::any_cast<std::string&>(a2) == "Andromeda");
    a2.reset();
    assert(a2.has_value() == false);
}
```

## See also
- [reset](/cpp/utility/any/reset/)
