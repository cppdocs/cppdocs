---
title: "std::common_type<std::basic_const_iterator>"
source_path: "cpp/iterator/basic_const_iterator/common_type"
header: "<iterator>"
category: "iterator"
since: "C++23"
---

The common type of two basic_const_iterators or a basic_const_iterator and another iterator type is a basic_const_iterator of the common underlying type.

## Declarations
```cpp
template< class T, std::common_with<T> U >
requires std::input_iterator<std::common_type_t<T, U>>
struct common_type<std::basic_const_iterator<T>, U>;
```
_(since C++23)_

```cpp
template< class T, std::common_with<T> U >
requires std::input_iterator<std::common_type_t<T, U>>
struct common_type<U, std::basic_const_iterator<T>>;
```
_(since C++23)_

```cpp
template< class T, std::common_with<T> U >
requires std::input_iterator<std::common_type_t<T, U>>
struct common_type<std::basic_const_iterator<T>,
std::basic_const_iterator<U>>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## See also
- [common_type](/cpp/types/common_type/)
