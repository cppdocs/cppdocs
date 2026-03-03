---
title: "std::auto_ptr"
source_path: "cpp/memory/auto_ptr"
header: "<memory>"
category: "memory"
---

auto_ptr is a smart pointer that manages an object obtained via [new expression](/cpp/language/new/) and deletes that object when auto_ptr itself is destroyed. It may be used to provide exception safety for dynamically allocated objects, for passing ownership of dynamically allocated objects into functions and for returning dynamically allocated objects from functions.

## Declarations
```cpp
template< class T > class auto_ptr;
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template<> class auto_ptr<void>;
```
_(deprecated in C++11) (removed in C++17)_
