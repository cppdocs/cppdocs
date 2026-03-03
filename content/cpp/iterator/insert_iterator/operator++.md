---
title: "std::insert_iterator<Container>::operator++"
source_path: "cpp/iterator/insert_iterator/operator"
category: "iterator"
since: "C++20"
---

Does nothing. These operator overloads are provided to satisfy the requirements of [LegacyOutputIterator](/cpp/named_req/outputiterator/). They make it possible for the expressions *iter++=value and *++iter=value to be used to output (insert) a value into the underlying container.

## Declarations
```cpp
insert_iterator& operator++();
```
_(until C++20)_

```cpp
constexpr insert_iterator& operator++();
```
_(since C++20)_

```cpp
insert_iterator& operator++( int );
```
_(until C++20)_

```cpp
constexpr insert_iterator& operator++( int );
```
_(since C++20)_

## Return value
*this
