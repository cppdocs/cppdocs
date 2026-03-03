---
title: "std::bad_typeid"
source_path: "cpp/types/bad_typeid"
header: "<typeinfo>"
category: "types"
---

An exception of this type is thrown when a [typeid](/cpp/language/typeid/) operator is applied to a dereferenced null pointer value of a polymorphic type.

## Declarations
```cpp
class bad_typeid : public std::exception;
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
#include <typeinfo>
 
struct S // The type has to be polymorphic
{
    virtual void f();
}; 
 
int main()
{
    S* p = nullptr;
    try
    {
        std::cout << typeid(*p).name() << '\n';
    }
    catch (const std::bad_typeid& e)
    {
        std::cout << e.what() << '\n';
    }
}
```
