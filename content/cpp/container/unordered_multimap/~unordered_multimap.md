---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::~unordered_multimap"
source_path: "cpp/container/unordered_multimap/~unordered_multimap"
category: "container"
since: "C++11"
---

A [destructor](/cpp/language/destructor/).
Destructs the unordered_multimap. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~unordered_multimap();
```
_(since C++11)_
