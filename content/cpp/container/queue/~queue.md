---
title: "std::queue<T,Container>::~queue"
source_path: "cpp/container/queue/~queue"
category: "container"
---

A [destructor](/cpp/language/destructor/).
Destructs the queue. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~queue();
```
