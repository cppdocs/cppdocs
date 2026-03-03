---
title: "std::multiset<Key,Compare,Allocator>::~multiset"
source_path: "cpp/container/multiset/~multiset"
category: "container"
---

A [destructor](/cpp/language/destructor/).
Destructs the multiset. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~multiset();
```
