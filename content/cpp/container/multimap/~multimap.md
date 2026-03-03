---
title: "std::multimap<Key,T,Compare,Allocator>::~multimap"
source_path: "cpp/container/multimap/~multimap"
category: "container"
---

A [destructor](/cpp/language/destructor/).
Destructs the multimap. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~multimap();
```
