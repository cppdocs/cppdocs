---
title: "std::promise<R>::operator="
source_path: "cpp/thread/promise/operator"
category: "thread"
since: "C++11"
---

Assigns the contents.

## Declarations
```cpp
promise& operator=( promise&& other ) noexcept;
```
_(since C++11)_

```cpp
promise& operator=( const promise& rhs ) = delete;
```
_(since C++11)_

## Parameters
- `other`: another promise to acquire the state from

## Return value
*this
