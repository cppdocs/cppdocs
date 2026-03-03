---
title: "std::priority_queue<T,Container,Compare>::~priority_queue"
source_path: "cpp/container/priority_queue/~priority_queue"
category: "container"
---

A [destructor](/cpp/language/destructor/).
Destructs the priority_queue. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~priority_queue();
```
