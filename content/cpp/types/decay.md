---
title: "std::decay"
source_path: "cpp/types/decay"
header: "<type_traits>"
category: "types"
since: "C++11"
---

Performs the type conversions equivalent to the ones performed when passing [function arguments](/cpp/language/function/#Parameter_list) by value. Formally:

## Declarations
```cpp
template< class T >
struct decay;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
template<typename T, typename U>
constexpr bool is_decay_equ = std::is_same_v<std::decay_t<T>, U>;
 
int main()
{
    static_assert
    (
        is_decay_equ<int, int> &&
        ! is_decay_equ<int, float> &&
        is_decay_equ<int&, int> &&
        is_decay_equ<int&&, int> &&
        is_decay_equ<const int&, int> &&
        is_decay_equ<int[2], int*> &&
        ! is_decay_equ<int[4][2], int*> &&
        ! is_decay_equ<int[4][2], int**> &&
        is_decay_equ<int[4][2], int(*)[2]> &&
        is_decay_equ<int(int), int(*)(int)>
    );
}
```

## See also
- [remove_cvref](/cpp/types/remove_cvref/)
- [std::remove_cv](/cpp/types/remove_cv/)
- [std::remove_reference](/cpp/types/remove_reference/)
- [implicit conversion](/cpp/language/implicit_cast/)
