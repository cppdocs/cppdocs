---
title: "std::is_swappable_with, std::is_swappable, std::is_nothrow_swappable_with, std::is_nothrow_swappable"
source_path: "cpp/types/is_swappable"
header: "<type_traits>"
category: "types"
since: "C++17"
---

1) If the expressions swap([std::declval](/cpp/utility/declval/)<T>(), [std::declval](/cpp/utility/declval/)<U>()) and
swap([std::declval](/cpp/utility/declval/)<U>(), [std::declval](/cpp/utility/declval/)<T>()) are both well-formed in unevaluated context after using [std::swap](/cpp/algorithm/swap/); (see [Swappable](/cpp/named_req/swappable/)), provides the member constant value equal true. Otherwise, value is false.

## Declarations
```cpp
template< class T, class U >
struct is_swappable_with;
```
_(since C++17)_

```cpp
template< class T >
struct is_swappable;
```
_(since C++17)_

```cpp
template< class T, class U >
struct is_nothrow_swappable_with;
```
_(since C++17)_

```cpp
template< class T >
struct is_nothrow_swappable;
```
_(since C++17)_

## Notes
This trait does not check anything outside the immediate context of the swap expressions: if the use of T or U would trigger template specializations, generation of implicitly-defined special member functions etc, and those have errors, the actual swap may not compile even if std::is_swappable_with<T, U>::value compiles and evaluates to true.

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/utility/swap/)
- [is_move_assignableis_trivially_move_assignableis_nothrow_move_assignable](/cpp/types/is_move_assignable/)
- [swappableswappable_with](/cpp/concepts/swappable/)
