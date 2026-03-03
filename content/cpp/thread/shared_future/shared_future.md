---
title: "std::shared_future<T>::shared_future"
source_path: "cpp/thread/shared_future/shared_future"
category: "thread"
since: "C++11"
---

Constructs a new shared_future.

## Declarations
```cpp
shared_future() noexcept;
```
_(since C++11)_

```cpp
shared_future( const shared_future& other );
```
_(since C++11) (until C++17)_

```cpp
shared_future( const shared_future& other ) noexcept;
```
_(since C++17)_

```cpp
shared_future( std::future<T>&& other ) noexcept;
```
_(since C++11)_

```cpp
shared_future( shared_future&& other ) noexcept;
```
_(since C++11)_

## Parameters
- `other`: another future object to initialize with
