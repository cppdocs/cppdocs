---
title: "std::jthread"
source_path: "cpp/thread/jthread"
header: "<thread>"
category: "thread"
since: "C++20"
---

The class jthread represents [a single thread of execution](https://en.wikipedia.org/wiki/Thread_(computing)). It has the same general behavior as [std::thread](/cpp/thread/thread/), except that jthread automatically rejoins on destruction, and can be cancelled/stopped in certain situations.

## Declarations
```cpp
class jthread;
```
_(since C++20)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_jthread
201911L
(C++20)
Stop token and joining thread

## See also
- [thread](/cpp/thread/thread/)
