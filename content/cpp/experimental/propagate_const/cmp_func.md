---
title: "std::equal_to, not_equal_to, less, greater, less_equal, greater_equal(std::experimental::propagate_const)"
source_path: "cpp/experimental/propagate_const/cmp_func"
header: "<experimental/propagate_const>"
category: "experimental"
---

The standard comparison function objects are partially specialized for [std::experimental::propagate_const](/cpp/experimental/propagate_const/)<T>.

## Declarations
```cpp
template< class T > struct equal_to<std::experimental::propagate_const<T>>;
```
_(library fundamentals TS v2)_

```cpp
template< class T > struct not_equal_to<std::experimental::propagate_const<T>>;
```
_(library fundamentals TS v2)_

```cpp
template< class T > struct less<std::experimental::propagate_const<T>>;
```
_(library fundamentals TS v2)_

```cpp
template< class T > struct greater<std::experimental::propagate_const<T>>;
```
_(library fundamentals TS v2)_

```cpp
template< class T > struct less_equal<std::experimental::propagate_const<T>>;
```
_(library fundamentals TS v2)_

```cpp
template< class T > struct greater_equal<std::experimental::propagate_const<T>>;
```
_(library fundamentals TS v2)_

## Notes
These specializations ensure that when T is a pointer type, specializations of these class templates for [std::experimental::propagate_const](/cpp/experimental/propagate_const/)<T> yield a total order, even if the corresponding built-in operators do not.

## Example
This section is incompleteReason: no example

## See also
- [equal_to](/cpp/utility/functional/equal_to/)
- [not_equal_to](/cpp/utility/functional/not_equal_to/)
- [less](/cpp/utility/functional/less/)
- [greater](/cpp/utility/functional/greater/)
- [less_equal](/cpp/utility/functional/less_equal/)
- [greater_equal](/cpp/utility/functional/greater_equal/)
