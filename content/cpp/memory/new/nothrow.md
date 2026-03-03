---
title: "std::nothrow"
source_path: "cpp/memory/new/nothrow"
header: "<new>"
category: "memory"
since: "C++11"
---

std::nothrow_t is an empty class type used to disambiguate the overloads of throwing and non-throwing [allocation functions](/cpp/memory/new/operator_new/). std::nothrow is a constant of it.

## Declarations
```cpp
struct nothrow_t {};
```
_(until C++11)_

```cpp
struct nothrow_t { explicit nothrow_t() = default; };
```
_(since C++11)_

```cpp
extern const std::nothrow_t nothrow;
```

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
            new int[100000000ul];   // throwing overload
        }
    }
    catch (const std::bad_alloc& e)
    {
        std::cout << e.what() << '\n';
    }
 
    while (true)
    {
        int* p = new(std::nothrow) int[100000000ul]; // non-throwing overload
        if (p == nullptr)
        {
            std::cout << "Allocation returned nullptr\n";
            break;
        }
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2510 | C++11 | the default constructor was non-explicit, which could lead to ambiguity | made explicit |

## See also
- [operator newoperator new[]](/cpp/memory/new/operator_new/)
