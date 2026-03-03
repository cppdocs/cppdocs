---
title: "std::is_reference"
source_path: "cpp/types/is_reference"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_reference is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_reference;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <type_traits>
 
class A {};
 
int main()
{
#   define REF(x) << #x " ?: " << x << '\n'
    std::cout << std::boolalpha
    REF(std::is_reference_v<A>)
    REF(std::is_reference_v<A&>)
    REF(std::is_reference_v<A&&>)
    REF(std::is_reference_v<long>)
    REF(std::is_reference_v<long&>)
    REF(std::is_reference_v<long&&>)
    REF(std::is_reference_v<double*>)
    REF(std::is_reference_v<double*&>)
    REF(std::is_reference_v<double*&&>);
#   undef REF
}
```

## See also
- [is_lvalue_reference](/cpp/types/is_lvalue_reference/)
- [is_rvalue_reference](/cpp/types/is_rvalue_reference/)
