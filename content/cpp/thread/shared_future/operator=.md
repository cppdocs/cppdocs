---
title: "std::shared_future<T>::operator="
source_path: "cpp/thread/shared_future/operator"
category: "thread"
since: "C++17"
---

Assigns the contents of another shared_future.

## Declarations
```cpp
shared_future& operator=( const shared_future& other );
```
_(since C++11) (until C++17)_

```cpp
shared_future& operator=( const shared_future& other ) noexcept;
```
_(since C++17)_

```cpp
shared_future& operator=( shared_future&& other ) noexcept;
```
_(since C++11)_

## Parameters
- `other`: a std::shared_future that will transfer state to *this

## Return value
*this
