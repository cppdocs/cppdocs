---
title: "std::back_insert_iterator<Container>::operator*"
source_path: "cpp/iterator/back_insert_iterator/operator"
category: "iterator"
since: "C++20"
---

Does nothing, this member function is provided to satisfy the requirements of [LegacyOutputIterator](/cpp/named_req/outputiterator/).

## Declarations
```cpp
back_insert_iterator& operator*();
```
_(until C++20)_

```cpp
constexpr back_insert_iterator& operator*();
```
_(since C++20)_

## Return value
*this
