---
title: "std::get_pointer_safety"
source_path: "cpp/memory/gc/get_pointer_safety"
header: "<memory>"
category: "memory"
---

Obtains the implementation-defined pointer safety model, which is a value of type [std::pointer_safety](/cpp/memory/gc/pointer_safety/).

## Declarations
```cpp
std::pointer_safety get_pointer_safety() noexcept;
```
_(since C++11) (removed in C++23)_

## Return value
The pointer safety used by this implementation.

## Example
```cpp
#include <iostream>
#include <memory>
 
int main()
{
    std::cout << "Pointer safety: ";
    switch (std::get_pointer_safety())
    {
        case std::pointer_safety::strict:
            std::cout << "strict\n";
            break;
        case std::pointer_safety::preferred:
            std::cout << "preferred\n";
            break;
        case std::pointer_safety::relaxed:
            std::cout << "relaxed\n";
            break;
    }
}
```

## See also
- [pointer_safety](/cpp/memory/gc/pointer_safety/)
