---
title: "std::basic_stacktrace<Allocator>::~basic_stacktrace"
source_path: "cpp/utility/basic_stacktrace/~basic_stacktrace"
category: "utility"
since: "C++23"
---

Destructs the basic_stacktrace. The destructors of the std::stacktrace_entry objects it holds are called and the used storage is deallocated.

## Declarations
```cpp
~basic_stacktrace();
```
_(since C++23)_
