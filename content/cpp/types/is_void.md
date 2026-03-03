---
title: "std::is_void"
source_path: "cpp/types/is_void"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_void is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_void;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
void foo();
 
static_assert
(
    std::is_void_v<void> == true and
    std::is_void_v<const void> == true and
    std::is_void_v<volatile void> == true and
    std::is_void_v<void*> == false and
    std::is_void_v<int> == false and
    std::is_void_v<decltype(foo)> == false and
    std::is_void_v<std::is_void<void>> == false
);
 
int main() {}
```

## See also
- [is_array](/cpp/types/is_array/)
- [is_pointer](/cpp/types/is_pointer/)
- [is_enum](/cpp/types/is_enum/)
- [is_union](/cpp/types/is_union/)
- [is_class](/cpp/types/is_class/)
- [is_function](/cpp/types/is_function/)
- [is_object](/cpp/types/is_object/)
