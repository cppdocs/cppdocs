---
title: "std::experimental::promise (concurrency TS)"
source_path: "cpp/experimental/concurrency/promise"
header: "<experimental/future>"
category: "experimental"
---

This page is about the modified version of [std::promise](/cpp/thread/promise/) provided by the concurrency TS supporting the std::future improvements made by that TS. For the version of promise with type-erased allocator support provided by the Library Fundamentals TSes, see [std::experimental::fundamentals_v2::promise](/cpp/experimental/lib_extensions/promise/).

## Declarations
```cpp
template< class R > class promise;
```
_(concurrency TS)_

```cpp
template< class R > class promise<R&>;
```
_(concurrency TS)_

```cpp
template<> class promise<void>;
```
_(concurrency TS)_
