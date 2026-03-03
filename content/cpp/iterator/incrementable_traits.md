---
title: "std::incrementable_traits"
source_path: "cpp/iterator/incrementable_traits"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Computes the associated difference type of the type I, if any. A program may specialize incrementable_traits for a [program-defined type](/cpp/language/type-id/#Program-defined_type).

## Declarations
```cpp
template< class I >
struct incrementable_traits {};
```
_(since C++20)_

```cpp
template< class T >
requires std::is_object_v<T>
struct incrementable_traits<T*>;
```
_(since C++20)_

```cpp
template< class T >
struct incrementable_traits<const T>
: incrementable_traits<T> {};
```
_(since C++20)_

```cpp
template< class T >
requires requires { typename T::difference_type; }
struct incrementable_traits<T>;
```
_(since C++20)_

```cpp
template< class T >
requires (!requires { typename T::difference_type; }) &&
requires(const T& a, const T& b) { { a - b } -> std::integral; }
struct incrementable_traits<T>;
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## See also
- [weakly_incrementable](/cpp/iterator/weakly_incrementable/)
- [semiregular](/cpp/concepts/semiregular/)
- [iter_value_titer_reference_titer_const_reference_titer_difference_titer_rvalue_reference_titer_common_reference_t](/cpp/iterator/iter_t/)
- [iterator_traits](/cpp/iterator/iterator_traits/)
