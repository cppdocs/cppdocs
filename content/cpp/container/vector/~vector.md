---
title: "std::vector<T,Allocator>::~vector"
source_path: "cpp/container/vector/~vector"
category: "container"
---

A [destructor](/cpp/language/destructor/).
Destructs the vector. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
~vector();
```
_(constexpr since C++20)_
