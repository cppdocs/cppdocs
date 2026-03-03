---
title: "std::is_compound"
source_path: "cpp/types/is_compound"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_compound is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_compound;
```
_(since C++11)_

## Notes
Compound types are the types that are constructed from fundamental types. Any C++ type is either fundamental or compound.

## Example
```cpp
#include <type_traits>
#include <iostream>
 
static_assert(not std::is_compound_v<int>);
static_assert(std::is_compound_v<int*>);
static_assert(std::is_compound_v<int&>);
 
void f();
static_assert(std::is_compound_v<decltype(f)>);
static_assert(std::is_compound_v<decltype(&f)>);
 
static_assert(std::is_compound_v<char[100]>);
 
class C {};
static_assert(std::is_compound_v<C>);
 
union U {};
static_assert(std::is_compound_v<U>);
 
enum struct E { e };
static_assert(std::is_compound_v<E>);
static_assert(std::is_compound_v<decltype(E::e)>);
 
struct S
{
    int i : 8;
    int j;
    void foo();
};
static_assert(not std::is_compound_v<decltype(S::i)>);
static_assert(not std::is_compound_v<decltype(S::j)>);
static_assert(std::is_compound_v<decltype(&S::j)>);
static_assert(std::is_compound_v<decltype(&S::foo)>);
 
int main()
{
    std::cout << "All checks have passed\n";
}
```

## See also
- [is_fundamental](/cpp/types/is_fundamental/)
- [is_scalar](/cpp/types/is_scalar/)
- [is_object](/cpp/types/is_object/)
- [is_array](/cpp/types/is_array/)
