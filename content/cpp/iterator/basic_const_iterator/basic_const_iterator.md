---
title: "std::basic_const_iterator<Iter>::basic_const_iterator"
source_path: "cpp/iterator/basic_const_iterator/basic_const_iterator"
category: "iterator"
since: "C++23"
---

Constructs a new iterator adaptor.

## Declarations
```cpp
basic_const_iterator() requires std::default_initializable<Iter> = default;
```
_(since C++23)_

```cpp
constexpr basic_const_iterator( Iter x );
```
_(since C++23)_

```cpp
template< std::convertible_to<Iter> U >
constexpr basic_const_iterator( basic_const_iterator<U> other );
```
_(since C++23)_

```cpp
template< /*different-from*/<basic_const_iterator> T >
requires std::convertible_to<T, Iter>
constexpr basic_const_iterator( T&& x );
```
_(since C++23)_

## Parameters
- `x`: iterator to adapt
- `other`: iterator adaptor to copy

## Example
This section is incompleteReason: no example
