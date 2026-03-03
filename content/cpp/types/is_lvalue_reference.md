---
title: "std::is_lvalue_reference"
source_path: "cpp/types/is_lvalue_reference"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_lvalue_reference is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_lvalue_reference;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
class A {};
static_assert(std::is_lvalue_reference_v<A> == false);
static_assert(std::is_lvalue_reference_v<A&> == true);
static_assert(std::is_lvalue_reference_v<A&&> == false);
 
static_assert(std::is_lvalue_reference_v<int> == false);
static_assert(std::is_lvalue_reference_v<int&> == true);
static_assert(std::is_lvalue_reference_v<int&&> == false);
 
int main() {}
```

## See also
- [is_reference](/cpp/types/is_reference/)
- [is_rvalue_reference](/cpp/types/is_rvalue_reference/)
