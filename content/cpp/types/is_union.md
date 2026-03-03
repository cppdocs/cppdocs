---
title: "std::is_union"
source_path: "cpp/types/is_union"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_union is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_union;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
struct A {};
static_assert(!std::is_union_v<A>);
 
typedef union
{
    int a;
    float b;
} B;
static_assert(std::is_union_v<B>);
 
struct C { B d; };
static_assert(!std::is_union_v<C>);
 
static_assert(!std::is_union_v<int>);
 
int main() {}
```

## See also
- [is_class](/cpp/types/is_class/)
