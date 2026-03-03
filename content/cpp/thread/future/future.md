---
title: "std::future<T>::future"
source_path: "cpp/thread/future/future"
category: "thread"
since: "C++11"
---

Constructs a std::future object.

## Declarations
```cpp
future() noexcept;
```
_(since C++11)_

```cpp
future( future&& other ) noexcept;
```
_(since C++11)_

```cpp
future( const future& other ) = delete;
```
_(since C++11)_

## Parameters
- `other`: another std::future to acquire shared state from
