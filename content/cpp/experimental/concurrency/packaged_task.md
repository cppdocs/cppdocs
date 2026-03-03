---
title: "std::experimental::packaged_task (concurrency TS)"
source_path: "cpp/experimental/concurrency/packaged_task"
header: "<experimental/future>"
category: "experimental"
---

This page is about the modified version of [std::packaged_task](/cpp/thread/packaged_task/) provided by the concurrency TS supporting the std::future improvements made by that TS. For the version of packaged_task with type-erased allocator support provided by the Library Fundamentals TSes, see [std::experimental::fundamentals_v2::packaged_task](/cpp/experimental/lib_extensions/packaged_task/).

## Declarations
```cpp
template< class > class packaged_task; //not defined
```
_(concurrency TS)_

```cpp
template< class R, class ...Args >
class packaged_task<R(Args...)>;
```
_(concurrency TS)_
