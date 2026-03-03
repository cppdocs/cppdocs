---
title: "std::unordered_set<Key,Hash,KeyEqual,Allocator>::~unordered_set"
source_path: "cpp/container/unordered_set/~unordered_set"
category: "container"
since: "C++11"
---

A [destructor](/cpp/language/destructor/).
Destructs the unordered_set. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~unordered_set();
```
_(since C++11)_
