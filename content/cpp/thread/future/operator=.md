---
title: "std::future<T>::operator="
source_path: "cpp/thread/future/operator"
category: "thread"
since: "C++11"
---

Assigns the contents of another future object.

## Declarations
```cpp
future& operator=( future&& other ) noexcept;
```
_(since C++11)_

```cpp
future& operator=( const future& other ) = delete;
```
_(since C++11)_

## Parameters
- `other`: a std::future that will transfer state to *this

## Return value
*this
