---
title: "deduction guides for std::tuple"
source_path: "cpp/utility/tuple/deduction_guides"
header: "<tuple>"
category: "utility"
since: "C++17"
---

These [deduction guides](/cpp/language/ctad/) are provided for [std::tuple](/cpp/utility/tuple/) to account for the edge cases missed by the implicit deduction guides, in particular, non-copyable arguments and array to pointer conversion.

## Declarations
```cpp
template<class... UTypes>
tuple(UTypes...) -> tuple<UTypes...>;
```
_(since C++17)_

```cpp
template<class T1, class T2>
tuple(std::pair<T1, T2>) -> tuple<T1, T2>;
```
_(since C++17)_

```cpp
template<class Alloc, class... UTypes>
tuple(std::allocator_arg_t, Alloc, UTypes...) -> tuple<UTypes...>;
```
_(since C++17)_

```cpp
template<class Alloc, class T1, class T2>
tuple(std::allocator_arg_t, Alloc, std::pair<T1, T2>) -> tuple<T1, T2>;
```
_(since C++17)_

```cpp
template<class Alloc, class... UTypes>
tuple(std::allocator_arg_t, Alloc, tuple<UTypes...>) -> tuple<UTypes...>;
```
_(since C++17)_

## Example
```cpp
#include <tuple>
int main()
{
    int a[2], b[3], c[4];
    std::tuple t1{a, b, c}; // explicit deduction guide is used in this case
}
```
