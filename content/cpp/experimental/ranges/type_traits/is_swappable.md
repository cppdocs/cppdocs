---
title: "std::experimental::ranges::is_swappable_with, std::experimental::ranges::is_swappable, std::experimental::ranges::is_nothrow_swappable_with, std::experimental::ranges::is_nothrow_swappable"
source_path: "cpp/experimental/ranges/type_traits/is_swappable"
header: "<experimental/ranges/type_traits>"
category: "experimental"
---

1) If the expressions [ranges::swap](http://en.cppreference.com/w/cpp/ranges-utility-placeholder/swap)([std::declval](/cpp/utility/declval/)<T>(), [std::declval](/cpp/utility/declval/)<U>()) and [ranges::swap](http://en.cppreference.com/w/cpp/ranges-utility-placeholder/swap)([std::declval](/cpp/utility/declval/)<U>(), [std::declval](/cpp/utility/declval/)<T>()) are both well-formed when treated as an unevaluated operand, provides the member constant value equal true. Otherwise, value is false. [Access checks](/cpp/language/access/) are performed as if from a context unrelated to either type.

## Declarations
```cpp
template< class T, class U >
struct is_swappable_with;
```
_(ranges TS)_

```cpp
template< class T >
struct is_swappable;
```
_(ranges TS)_

```cpp
template< class T, class U >
struct is_nothrow_swappable_with;
```
_(ranges TS)_

```cpp
template< class T >
struct is_nothrow_swappable;
```
_(ranges TS)_

## Notes
This trait does not check anything outside the immediate context of the swap expressions: if the use of T or U would trigger template specializations, generation of implicitly-defined special member functions etc, and those have errors, the actual swap may not compile even if ranges::is_swappable_with<T,U>::value compiles and evaluates to true.

## Example
This section is incompleteReason: no example

## See also
- [SwappableSwappableWith](/cpp/experimental/ranges/concepts/swappable/)
- [is_swappable_withis_swappableis_nothrow_swappable_withis_nothrow_swappable](/cpp/types/is_swappable/)
