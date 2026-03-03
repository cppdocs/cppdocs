---
title: "std::remove_cv, std::remove_const, std::remove_volatile"
source_path: "cpp/types/remove_cv"
header: "<type_traits>"
category: "types"
since: "C++11"
---

Provides the member typedef type which is the same as T, except that its topmost cv-qualifiers are removed.

## Declarations
```cpp
template< class T >
struct remove_cv;
```
_(since C++11)_

```cpp
template< class T >
struct remove_const;
```
_(since C++11)_

```cpp
template< class T >
struct remove_volatile;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
template<typename U, typename V>
constexpr bool same = std::is_same_v<U, V>;
 
static_assert
(
    same<std::remove_cv_t<int>, int> &&
    same<std::remove_cv_t<const int>, int> &&
    same<std::remove_cv_t<volatile int>, int> &&
    same<std::remove_cv_t<const volatile int>, int> &&
    // remove_cv only works on types, not on pointers
    not same<std::remove_cv_t<const volatile int*>, int*> &&
    same<std::remove_cv_t<const volatile int*>, const volatile int*> &&
    same<std::remove_cv_t<const int* volatile>, const int*> &&
    same<std::remove_cv_t<int* const volatile>, int*>
);
 
int main() {}
```

## See also
- [is_const](/cpp/types/is_const/)
- [is_volatile](/cpp/types/is_volatile/)
- [add_cvadd_constadd_volatile](/cpp/types/add_cv/)
- [remove_cvref](/cpp/types/remove_cvref/)
- [std::remove_reference](/cpp/types/remove_reference/)
