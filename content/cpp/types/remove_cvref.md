---
title: "std::remove_cvref"
source_path: "cpp/types/remove_cvref"
header: "<type_traits>"
category: "types"
since: "C++20"
---

If the type T is a reference type, provides the member typedef type which is the type referred to by T with its topmost cv-qualifiers removed. Otherwise type is T with its topmost cv-qualifiers removed.

## Declarations
```cpp
template< class T >
struct remove_cvref;
```
_(since C++20)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_remove_cvref
201711L
(C++20)
std::remove_cvref

## Example
```cpp
#include <type_traits>
 
int main()
{
    static_assert(std::is_same_v<std::remove_cvref_t<int>, int>);
    static_assert(std::is_same_v<std::remove_cvref_t<int&>, int>);
    static_assert(std::is_same_v<std::remove_cvref_t<int&&>, int>);
    static_assert(std::is_same_v<std::remove_cvref_t<const int&>, int>);
    static_assert(std::is_same_v<std::remove_cvref_t<const int[2]>, int[2]>);
    static_assert(std::is_same_v<std::remove_cvref_t<const int(&)[2]>, int[2]>);
    static_assert(std::is_same_v<std::remove_cvref_t<int(int)>, int(int)>);
}
```

## See also
- [remove_cvremove_constremove_volatile](/cpp/types/remove_cv/)
- [remove_reference](/cpp/types/remove_reference/)
- [decay](/cpp/types/decay/)
