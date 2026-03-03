---
title: "operator+, operator-(std::basic_const_iterator)"
source_path: "cpp/iterator/basic_const_iterator/operator"
category: "iterator"
since: "C++23"
---

Returns the iterator i incremented or decremented by n.

## Declarations
```cpp
friend constexpr basic_const_iterator
operator+( const basic_const_iterator& i, difference_type n )
requires std::random_access_iterator<Iter>;
```
_(since C++23)_

```cpp
friend constexpr basic_const_iterator
operator+( difference_type n, const basic_const_iterator& i )
requires std::random_access_iterator<Iter>;
```
_(since C++23)_

```cpp
friend constexpr basic_const_iterator
operator-( const basic_const_iterator& i, difference_type n )
requires std::random_access_iterator<Iter>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
