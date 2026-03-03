---
title: "std::experimental::promise (library fundamentals TS)"
source_path: "cpp/experimental/lib_extensions/promise"
header: "<experimental/future>"
category: "experimental"
---

This page is about the modified version of [std::promise](/cpp/thread/promise/) with type-erased allocator support provided by the Library Fundamentals TSes. For the version of promise provided by the concurrency TS supporting the std::future improvements made by that TS, see [std::experimental::concurrency_v1::promise](/cpp/experimental/concurrency/promise/).

## Declarations
```cpp
template< class R > class promise;
```
_(library fundamentals TS)_

```cpp
template< class R > class promise<R&>;
```
_(library fundamentals TS)_

```cpp
template<> class promise<void>;
```
_(library fundamentals TS)_
