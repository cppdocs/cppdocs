---
title: "std::inplace_vector<T,N>::~inplace_vector"
source_path: "cpp/container/inplace_vector/~inplace_vector"
category: "container"
since: "C++26"
---

A [destructor](/cpp/language/destructor/). Also, a [trivial destructor](/cpp/language/destructor/#Trivial_destructor) if [std::is_trivially_destructible_v](/cpp/types/is_destructible/)<T> is true.
Destructs the inplace_vector. The destructors of the elements are called and the used storage is deallocated. Note, that if the elements are pointers, the pointed-to objects are not destroyed.

## Declarations
```cpp
constexpr ~inplace_vector();
```
_(since C++26)_
