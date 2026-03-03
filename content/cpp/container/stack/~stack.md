---
title: "std::stack<T,Container>::~stack"
source_path: "cpp/container/stack/~stack"
category: "container"
---

A [destructor](/cpp/language/destructor/).
Destructs the stack. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~stack();
```
