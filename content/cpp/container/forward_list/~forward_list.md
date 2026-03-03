---
title: "std::forward_list<T,Allocator>::~forward_list"
source_path: "cpp/container/forward_list/~forward_list"
category: "container"
since: "C++11"
---

A [destructor](/cpp/language/destructor/).
Destructs the forward_list. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~forward_list();
```
_(since C++11)_
