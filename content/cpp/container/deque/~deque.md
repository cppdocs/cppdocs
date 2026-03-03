---
title: "std::deque<T,Allocator>::~deque"
source_path: "cpp/container/deque/~deque"
category: "container"
---

A [destructor](/cpp/language/destructor/).
Destructs the deque. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~deque();
```
