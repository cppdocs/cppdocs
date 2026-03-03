---
title: "std::future"
source_path: "cpp/thread/future"
header: "<future>"
category: "thread"
since: "C++11"
---

The class template std::future provides a mechanism to access the result of asynchronous operations:

## Declarations
```cpp
template< class T > class future;
```
_(since C++11)_

```cpp
template< class T > class future<T&>;
```
_(since C++11)_

```cpp
template<> class future<void>;
```
_(since C++11)_

## See also
- [async](/cpp/thread/async/)
- [shared_future](/cpp/thread/shared_future/)
