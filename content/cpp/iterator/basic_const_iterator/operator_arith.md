---
title: "std::basic_const_iterator<Iter>::operator++,--,+=,-="
source_path: "cpp/iterator/basic_const_iterator/operator"
category: "iterator"
since: "C++23"
---

Increments or decrements the iterator, by applying the corresponding operation on the underlying iterator.

## Declarations
```cpp
constexpr basic_const_iterator& operator++();
```
_(since C++23)_

```cpp
constexpr void operator++(int);
```
_(since C++23)_

```cpp
constexpr basic_const_iterator operator++(int)
requires std::forward_iterator<Iter>;
```
_(since C++23)_

```cpp
constexpr basic_const_iterator& operator--()
requires std::bidirectional_iterator<Iter>;
```
_(since C++23)_

```cpp
constexpr basic_const_iterator operator--(int)
requires std::bidirectional_iterator<Iter>;
```
_(since C++23)_

```cpp
constexpr basic_const_iterator& operator+=( difference_type n )
requires std::random_access_iterator<Iter>;
```
_(since C++23)_

```cpp
constexpr basic_const_iterator& operator-=( difference_type n )
requires std::random_access_iterator<Iter>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## See also
- [operator++operator++(int)operator+=operator+operator--operator--(int)operator-=operator-](/cpp/iterator/move_iterator/operator_arith/)
