---
title: "std::indirectly_readable_traits"
source_path: "cpp/iterator/indirectly_readable_traits"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Computes the associated value type of the template argument. If the associated value type exists, it is represented by the nested type value_type, otherwise value_type is not defined. A program may specialize indirectly_readable_traits for a [program-defined type](/cpp/language/type-id/#Program-defined_type).

## Declarations
```cpp
template< class I >
struct indirectly_readable_traits {};
```
_(since C++20)_

```cpp
template< class T >
struct indirectly_readable_traits<T*> :
/* cond-value-type */<T> {};
```
_(since C++20)_

```cpp
template< class I >
requires std::is_array_v<I>
struct indirectly_readable_traits<I>;
{ using value_type = std::remove_cv_t<std::remove_extent_t<I>>; }
```
_(since C++20)_

```cpp
template< class T >
struct indirectly_readable_traits<const T> :
indirectly_readable_traits<T> {};
```
_(since C++20)_

```cpp
template< /* has-member-value-type */ T >
struct indirectly_readable_traits<T> :
/* cond-value-type */<typename T::value_type> {};
```
_(since C++20)_

```cpp
template< /* has-member-element-type */ T >
struct indirectly_readable_traits<T> :
/* cond-value-type */<typename T::element_type> {};
```
_(since C++20)_

```cpp
template< /* has-member-value-type */ T >
requires /* has-member-element-type */<T>
struct indirectly_readable_traits<T> {};
```
_(since C++20)_

```cpp
template< /* has-member-value-type */ T >
requires /* has-member-element-type */<T> &&
std::same_as<std::remove_cv_t<typename T::element_type>,
std::remove_cv_t<typename T::value_type>>
struct indirectly_readable_traits<T> :
/* cond-value-type */<typename T::value_type> {};
```
_(since C++20)_

```cpp
Helper classes and concepts
```

```cpp
template< class >
struct /* cond-value-type */ {};
```
_(exposition only*)_

```cpp
template< class T >
requires std::is_object_v<T>
struct /* cond-value-type */ <T>
{ using value_type = std::remove_cv_t<T>; };
```
_(exposition only*)_

```cpp
template< class T >
concept /* has-member-value-type */ =
requires { typename T::value_type; };
```
_(exposition only*)_

```cpp
template< class T >
concept /* has-member-element-type */ =
requires { typename T::element_type; };
```
_(exposition only*)_

## Notes
value_type is intended for use with [indirectly_readable](/cpp/iterator/indirectly_readable/) types such as iterators. It is not intended for use with ranges.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3446 | C++20 | specializations (5,6) were ambiguous for types havingboth value_type and element_type nested types | added specialization (8) |
| LWG 3541 | C++20 | LWG 3446 introduced hard error for ambiguous casesthat value_type and element_type are different | added specialization (7) |

## See also
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
- [iter_value_titer_reference_titer_const_reference_titer_difference_titer_rvalue_reference_titer_common_reference_t](/cpp/iterator/iter_t/)
- [iterator_traits](/cpp/iterator/iterator_traits/)
