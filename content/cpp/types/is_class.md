---
title: "std::is_class"
source_path: "cpp/types/is_class"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_class is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_class;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
struct A {};
static_assert(std::is_class<A>::value);
 
class B {};
static_assert(std::is_class_v<B>);
static_assert(not std::is_class_v<B*>);
static_assert(not std::is_class_v<B&>);
static_assert(std::is_class_v<const B>);
 
enum class E {};
static_assert(not std::is_class<E>::value);
 
union U { class UC {}; };
static_assert(not std::is_class_v<U>);
static_assert(std::is_class_v<U::UC>);
 
static_assert(not std::is_class_v<int>);
 
static_assert(std::is_class_v<struct S>, "incomplete class");
static_assert(std::is_class_v<class C>, "incomplete class");
 
int main() {}
```

## See also
- [is_union](/cpp/types/is_union/)
