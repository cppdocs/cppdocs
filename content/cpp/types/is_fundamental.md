---
title: "std::is_fundamental"
source_path: "cpp/types/is_fundamental"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_fundamental is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_fundamental;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
static_assert(std::is_fundamental_v<int> == true);
static_assert(std::is_fundamental_v<int&> == false);
static_assert(std::is_fundamental_v<int*> == false);
static_assert(std::is_fundamental_v<void> == true);
static_assert(std::is_fundamental_v<void*> == false);
static_assert(std::is_fundamental_v<float> == true);
static_assert(std::is_fundamental_v<float&> == false);
static_assert(std::is_fundamental_v<float*> == false);
static_assert(std::is_fundamental_v<std::nullptr_t> == true);
static_assert(std::is_fundamental_v<std::is_fundamental<int>> == false);
 
class A {};
static_assert(std::is_fundamental_v<A> == false);
static_assert(std::is_fundamental_v<std::is_fundamental<A>::value_type>);
 
int main() {}
```

## See also
- [is_compound](/cpp/types/is_compound/)
- [is_arithmetic](/cpp/types/is_arithmetic/)
- [is_void](/cpp/types/is_void/)
- [is_null_pointer](/cpp/types/is_null_pointer/)
- [std::nullptr_t](/cpp/types/nullptr_t/)
