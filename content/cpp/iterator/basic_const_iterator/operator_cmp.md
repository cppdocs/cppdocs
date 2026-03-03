---
title: "std::basic_const_iterator<Iter>::operator==,<,<=,>,>=,<=>"
source_path: "cpp/iterator/basic_const_iterator/operator_cmp"
category: "iterator"
since: "C++23"
---

Compares a basic_const_iterator with another value.

## Declarations
```cpp
Equality comparison
```

```cpp
template< std::sentinel_for<Iter> S >
constexpr bool operator==( const S& s ) const;
```
_(since C++23)_

```cpp
Relational comparisons between two basic_const_iterators
```

```cpp
constexpr bool operator<( const basic_const_iterator& y ) const
requires std::random_access_iterator<Iter>;
```
_(since C++23)_

```cpp
constexpr bool operator>( const basic_const_iterator& y ) const
requires std::random_access_iterator<Iter>;
```
_(since C++23)_

```cpp
constexpr bool operator<=( const basic_const_iterator& y ) const
requires std::random_access_iterator<Iter>;
```
_(since C++23)_

```cpp
constexpr bool operator>=( const basic_const_iterator& y ) const
requires std::random_access_iterator<Iter>;
```
_(since C++23)_

```cpp
constexpr auto operator<=>( const basic_const_iterator& y ) const
requires std::random_access_iterator<Iter> && std::three_way_comparable<Iter>;
```
_(since C++23)_

```cpp
Relational comparisons between basic_const_iterator and another type
```

```cpp
template< /*different-from*/<basic_const_iterator> I >
constexpr bool operator<( const I& y ) const
requires std::random_access_iterator<Iter> && std::totally_ordered_with<Iter, I>;
```
_(since C++23)_

```cpp
template< /*different-from*/<basic_const_iterator> I >
constexpr bool operator>( const I& y ) const
requires std::random_access_iterator<Iter> && std::totally_ordered_with<Iter, I>;
```
_(since C++23)_

```cpp
template< /*different-from*/<basic_const_iterator> I >
constexpr bool operator<=( const I& y ) const
requires std::random_access_iterator<Iter> && std::totally_ordered_with<Iter, I>;
```
_(since C++23)_

```cpp
template< /*different-from*/<basic_const_iterator> I >
constexpr bool operator>=( const I& y ) const
requires std::random_access_iterator<Iter> && std::totally_ordered_with<Iter, I>;
```
_(since C++23)_

```cpp
template< /*different-from*/<basic_const_iterator> I >
constexpr auto operator<=>( const I& y ) const
requires std::random_access_iterator<Iter> &&
std::totally_ordered_with<Iter, I> &&
std::three_way_comparable_with<Iter, I>;
```
_(since C++23)_

## Parameters
- `s`: a sentinel for Iter
- `y`: a value to compare with

## Notes
Overload ([1](#Version_1)) can be used to compare two basic_const_iterator<Iter> values if Iter models sentinel_for<Iter>.

## Example
This section is incompleteReason: no example
