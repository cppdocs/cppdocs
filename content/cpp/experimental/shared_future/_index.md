---
title: "std::experimental::shared_future"
source_path: "cpp/experimental/shared_future"
header: "<experimental/shared_future>"
category: "experimental"
---

The class template std::experimental::shared_future extends [std::shared_future](/cpp/thread/shared_future/) with the following operations:

## Declarations
```cpp
template< class T > class shared_future;
```
_(concurrency TS)_

```cpp
template< class T > class shared_future<T&>;
```
_(concurrency TS)_

```cpp
template<> class shared_future<void>;
```
_(concurrency TS)_

## Example
This section is incompleteReason: no example

## See also
- [future](/cpp/experimental/future/)
- [std::future](/cpp/thread/future/)
