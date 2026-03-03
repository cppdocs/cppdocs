---
title: "std::set<Key,Compare,Allocator>::~set"
source_path: "cpp/container/set/~set"
category: "container"
---

A [destructor](/cpp/language/destructor/).
Destructs the set. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~set();
```
