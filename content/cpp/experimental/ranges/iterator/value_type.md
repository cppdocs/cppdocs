---
title: "std::experimental::ranges::value_type"
source_path: "cpp/experimental/ranges/iterator/value_type"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

Computes the associated value type of the type I, if any. Users may specialize value_type for a program-defined type.

## Declarations
```cpp
template< class I >
struct value_type {};
```

```cpp
template< class T >
struct value_type<T*>;
```

```cpp
template< class I >
requires std::is_array<I>::value
struct value_type<I> : value_type<std::decay_t<I>> {};
```

```cpp
template< class T >
struct value_type<const T> : value_type<std::decay_t<T>> {};
```

```cpp
template< class T >
requires requires { typename T::value_type; }
struct value_type<T>;
```

```cpp
template< class T >
requires requires { typename T::element_type; }
struct value_type<T>;
```

## Notes
If a type contains both a value_type member and a element_type member, then the specializations (5) and (6) are ambiguous.

value_type is intended for use with [Readable](/cpp/experimental/ranges/iterator/readable/) types such as iterators. It is not intended for use with ranges.

## Example
This section is incompleteReason: no example

## See also
- [Readable](/cpp/experimental/ranges/iterator/readable/)
