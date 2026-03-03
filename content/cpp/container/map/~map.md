---
title: "std::map<Key,T,Compare,Allocator>::~map"
source_path: "cpp/container/map/~map"
category: "container"
---

A [destructor](/cpp/language/destructor/).
Destructs the map. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~map();
```
