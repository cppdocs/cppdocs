---
title: "std::experimental::future"
source_path: "cpp/experimental/future"
header: "<experimental/future>"
category: "experimental"
---

The class template std::experimental::future extends [std::future](/cpp/thread/future/) with the following operations:

## Declarations
```cpp
template< class T > class future;
```
_(concurrency TS)_

```cpp
template< class T > class future<T&>;
```
_(concurrency TS)_

```cpp
template<> class future<void>;
```
_(concurrency TS)_

## Example
This section is incompleteReason: no example

## See also
- [shared_future](/cpp/experimental/shared_future/)
- [std::shared_future](/cpp/thread/shared_future/)
