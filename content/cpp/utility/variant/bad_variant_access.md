---
title: "std::bad_variant_access"
source_path: "cpp/utility/variant/bad_variant_access"
header: "<variant>"
category: "utility"
since: "C++17"
---

std::bad_variant_access is the type of the exception thrown in the following situations:

## Declarations
```cpp
class bad_variant_access : public std::exception
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
#include <iostream>
#include <variant>
 
int main()
{
    std::variant<int, float> v;
    v = 12;
    try
    {
        std::get<float>(v);
    }
    catch (const std::bad_variant_access& e)
    {
        std::cout << e.what() << '\n';
    }
}
```

## See also
- [get(std::variant)](/cpp/utility/variant/get/)
- [visit](/cpp/utility/variant/visit2/)
- [visit](/cpp/utility/variant/visit/)
