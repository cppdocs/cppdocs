---
title: "operator-(std::basic_const_iterator)"
source_path: "cpp/iterator/basic_const_iterator/operator"
category: "iterator"
since: "C++23"
---

Returns the distance between basic_const_iterator and its sentinel.

## Declarations
```cpp
template< std::sized_sentinel_for<Iter> S >
constexpr difference_type operator-( const S& s ) const;
```
_(since C++23)_

```cpp
template< /*not-a-const-iterator*/ S >
requires std::sized_sentinel_for<S, Iter>
friend constexpr difference_type
operator-( const S& s, const basic_const_iterator& i );
```
_(since C++23)_

## Parameters
- `i, s`: iterator and sentinel to compute the difference of

## Example
This section is incompleteReason: no example
