---
title: "std::remove_pointer"
source_path: "cpp/types/remove_pointer"
header: "<type_traits>"
category: "types"
since: "C++11"
---

Provides the member typedef type which is the type pointed to by T, or, if T is not a pointer, then type is the same as T.

## Declarations
```cpp
template< class T >
struct remove_pointer;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
static_assert
(
    std::is_same_v<int, int> == true &&
    std::is_same_v<int, int*> == false &&
    std::is_same_v<int, int**> == false &&
    std::is_same_v<int, std::remove_pointer_t<int>> == true &&
    std::is_same_v<int, std::remove_pointer_t<int*>> == true &&
    std::is_same_v<int, std::remove_pointer_t<int**>> == false &&
    std::is_same_v<int, std::remove_pointer_t<int* const>> == true &&
    std::is_same_v<int, std::remove_pointer_t<int* volatile>> == true &&
    std::is_same_v<int, std::remove_pointer_t<int* const volatile>> == true
);
 
int main() {}
```

## See also
- [is_pointer](/cpp/types/is_pointer/)
- [add_pointer](/cpp/types/add_pointer/)
