---
title: "std::type_info::before"
source_path: "cpp/types/type_info/before"
category: "types"
---

Returns true if the type of this type_info precedes the type of rhs in the implementation's collation order. No guarantees are given; in particular, the collation order can change between the invocations of the same program.

## Declarations
```cpp
bool before( const type_info& rhs ) const;
```
_(noexcept since C++11)_

## Parameters
- `rhs`: another type information object to compare to

## Return value
true if the type of this type_info precedes the type of rhs in the implementation's collation order.

## Example
```cpp
#include <iostream>
#include <typeinfo>
 
int main()
{
    if (typeid(int).before(typeid(char)))
        std::cout << "int goes before char in this implementation.\n";
    else
        std::cout << "char goes before int in this implementation.\n";
}
```

## See also
- [operator==operator!=](/cpp/types/type_info/operator_cmp/)
