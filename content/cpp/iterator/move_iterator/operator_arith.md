---
title: "std::move_iterator<Iter>::operator++,+,+=,--,-,-="
source_path: "cpp/iterator/move_iterator/operator"
category: "iterator"
since: "C++20"
---

Increments or decrements the underlying iterator.

## Declarations
```cpp
move_iterator& operator++();
```
_(constexpr since C++17)_

```cpp
move_iterator& operator--();
```
_(constexpr since C++17)_

```cpp
move_iterator operator++( int );
```
_(constexpr since C++17) (until C++20)_

```cpp
constexpr auto operator++( int );
```
_(since C++20)_

```cpp
move_iterator operator--( int );
```
_(constexpr since C++17)_

```cpp
move_iterator operator+( difference_type n ) const;
```
_(constexpr since C++17)_

```cpp
move_iterator operator-( difference_type n ) const;
```
_(constexpr since C++17)_

```cpp
move_iterator& operator+=( difference_type n );
```
_(constexpr since C++17)_

```cpp
move_iterator& operator-=( difference_type n );
```
_(constexpr since C++17)_

## Parameters
- `n`: position relative to current location

## Return value
As described above.

## Example
This section is incompleteReason: no example

## See also
- [operator+]()
- [operator-]()
