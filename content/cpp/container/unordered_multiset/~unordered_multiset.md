---
title: "std::unordered_multiset<Key,Hash,KeyEqual,Allocator>::~unordered_multiset"
source_path: "cpp/container/unordered_multiset/~unordered_multiset"
category: "container"
since: "C++11"
---

A [destructor](/cpp/language/destructor/).
Destructs the unordered_multiset. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~unordered_multiset();
```
_(since C++11)_
