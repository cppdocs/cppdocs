---
title: "std::bad_alloc"
source_path: "cpp/memory/new/bad_alloc"
header: "<new>"
category: "memory"
---

std::bad_alloc is the type of the object thrown as exceptions by the [allocation functions](/cpp/memory/new/operator_new/) to report failure to allocate storage.

## Declarations
```cpp
class bad_alloc;
```

## Parameters
- `other`: another exception object to copy

## Return value
*this

## Notes
Implementations are allowed but not required to override what().

## Example
```cpp
#include <iostream>
#include <new>
 
int main()
{
    try
    {
        while (true)
        {
            new int[100000000ul];
        }
    }
    catch (const std::bad_alloc& e)
    {
        std::cout << "Allocation failed: " << e.what() << '\n';
    }
}
```

## See also
- [operator newoperator new[]](/cpp/memory/new/operator_new/)
