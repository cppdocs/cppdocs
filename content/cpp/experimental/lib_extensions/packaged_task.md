---
title: "std::experimental::packaged_task (library fundamentals TS)"
source_path: "cpp/experimental/lib_extensions/packaged_task"
header: "<experimental/future>"
category: "experimental"
---

This page is about the modified version of [std::packaged_task](/cpp/thread/packaged_task/) with type-erased allocator support provided by the Library Fundamentals TSes. For the version of packaged_task provided by the concurrency TS supporting the std::future improvements made by that TS, see [std::experimental::concurrency_v1::packaged_task](/cpp/experimental/concurrency/packaged_task/).

## Declarations
```cpp
template< class > class packaged_task; //not defined
```
_(library fundamentals TS)_

```cpp
template< class R, class ...Args >
class packaged_task<R(Args...)>;
```
_(library fundamentals TS)_
