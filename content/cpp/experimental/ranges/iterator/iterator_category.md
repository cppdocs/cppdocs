---
title: "std::experimental::ranges::iterator_category"
source_path: "cpp/experimental/ranges/iterator/iterator_category"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

Computes the iterator category of the class I, if any. Users may specialize iterator_category for a program-defined type.

## Declarations
```cpp
template< class I >
struct iterator_category {};
```

```cpp
template< class T >
struct iterator_category<T*>;
```

```cpp
template< class T >
struct iterator_category<const T> : iterator_category<T> {};
```

```cpp
template< class T >
requires requires { typename T::iterator_category; }
struct iterator_category<T>;
```

## Example
This section is incompleteReason: no example

## See also
- [input_iterator_tagoutput_iterator_tagforward_iterator_tagbidirectional_iterator_tagrandom_access_iterator_tagcontiguous_iterator_tag](/cpp/iterator/iterator_tags/)
- [input_iterator_tagoutput_iterator_tagforward_iterator_tagbidirectional_iterator_tagrandom_access_iterator_tag](/cpp/experimental/ranges/iterator/iterator_tags/)
