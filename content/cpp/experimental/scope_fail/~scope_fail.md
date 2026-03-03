---
title: "std::experimental::scope_fail<EF>::~scope_fail"
source_path: "cpp/experimental/scope_fail/~scope_fail"
category: "experimental"
---

Calls the exit function if the result of [std::uncaught_exceptions](/cpp/error/exception/uncaught_exception/)() is greater than the counter of uncaught exceptions (typically on stack unwinding) and the scope_fail is active, then destroys the stored EF (if it is a function object) and any other non-static data members.

## Declarations
```cpp
~scope_fail() noexcept;
```
_(library fundamentals TS v3)_

## Notes
Whether the destructor is called on stack unwinding can be detected by the comparison of the result of [std::uncaught_exceptions](/cpp/error/exception/uncaught_exception/)() and the counter of uncaught exceptions in the scope_fail.

## See also
- [release](/cpp/experimental/scope_fail/release/)
