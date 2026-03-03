---
title: "std::experimental::ranges::difference_type"
source_path: "cpp/experimental/ranges/iterator/difference_type"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

Computes the associated difference type of the type I, if any. Users may specialize difference_type for a program-defined type.

## Declarations
```cpp
template< class I >
struct difference_type {};
```

```cpp
template< class T >
struct difference_type<T*>;
```

```cpp
template< class T >
struct difference_type<const T> : difference_type<std::decay_t<T>> {};
```

```cpp
template< class T >
requires requires { typename T::difference_type; }
struct difference_type<T>;
```

```cpp
template< class T >
requires !requires { typename T::difference_type; } &&
requires(const T& a, const T& b) { {a - b} -> Integral; }
struct difference_type<T>;
```

## Example
This section is incompleteReason: no example

## See also
- [WeaklyIncrementable](/cpp/experimental/ranges/iterator/weaklyincrementable/)
- [Semiregular](/cpp/experimental/ranges/concepts/semiregular/)
