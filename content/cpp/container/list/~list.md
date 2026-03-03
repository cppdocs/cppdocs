---
title: "std::list<T,Allocator>::~list"
source_path: "cpp/container/list/~list"
category: "container"
---

A [destructor](/cpp/language/destructor/).
Destructs the list. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~list();
```
