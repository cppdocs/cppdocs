---
title: "std::bad_array_new_length"
source_path: "cpp/memory/new/bad_array_new_length"
header: "<new>"
category: "memory"
since: "C++11"
---

std::bad_array_new_length is the type of the object thrown as exceptions by the [new-expressions](/cpp/language/new/) to report invalid array lengths if

## Declarations
```cpp
class bad_array_new_length;
```
_(since C++11)_

## Parameters
- `other`: another exception object to copy

## Return value
*this

## Notes
Implementations are allowed but not required to override what().

## Example
```cpp
#include <climits>
#include <iostream>
#include <new>
 
int main()
{
    try
    {
        int negative = -1;
        new int[negative];
    }
    catch (const std::bad_array_new_length& e)
    {
        std::cout << "1) " << e.what() << ": negative size\n";
    }
 
    try
    {
        int small = 1;
        new int[small]{1,2,3};
    }
    catch (const std::bad_array_new_length& e)
    {
        std::cout << "2) " << e.what() << ": too many initializers\n";
    }
 
    try
    {
        long large = LONG_MAX;
        new int[large][1000];
    } 
    catch (const std::bad_array_new_length& e)
    {
        std::cout << "3) " << e.what() << ": too large\n";
    }
 
    std::cout << "End\n";
}
```

## See also
- [operator newoperator new[]](/cpp/memory/new/operator_new/)
- [bad_alloc](/cpp/memory/new/bad_alloc/)
