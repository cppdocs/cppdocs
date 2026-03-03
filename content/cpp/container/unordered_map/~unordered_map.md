---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::~unordered_map"
source_path: "cpp/container/unordered_map/~unordered_map"
category: "container"
since: "C++11"
---

A [destructor](/cpp/language/destructor/).
Destructs the unordered_map. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~unordered_map();
```
_(since C++11)_
