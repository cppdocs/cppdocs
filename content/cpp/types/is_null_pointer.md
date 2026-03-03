---
title: "std::is_null_pointer"
source_path: "cpp/types/is_null_pointer"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_null_pointer is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_null_pointer;
```
_(since C++11)_

## Notes
[std::is_pointer](/cpp/types/is_pointer/) is false for [std::nullptr_t](/cpp/types/nullptr_t/) because it is not a built-in pointer type.

In libc++, std::is_null_pointer is not available in C++11 mode.

## Example
```cpp
#include <type_traits>
 
static_assert(std::is_null_pointer_v<decltype(nullptr)>);
static_assert(!std::is_null_pointer_v<int*>);
static_assert(!std::is_pointer_v<decltype(nullptr)>);
static_assert(std::is_pointer_v<int*>);
 
int main()
{
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2247 | C++11 | the type trait for detecting std::nullptr_t was missing | added |

## See also
- [is_void](/cpp/types/is_void/)
- [is_array](/cpp/types/is_array/)
- [is_pointer](/cpp/types/is_pointer/)
- [is_enum](/cpp/types/is_enum/)
- [is_union](/cpp/types/is_union/)
- [is_class](/cpp/types/is_class/)
- [is_function](/cpp/types/is_function/)
- [is_object](/cpp/types/is_object/)
