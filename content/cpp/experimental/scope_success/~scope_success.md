---
title: "std::experimental::scope_success<EF>::~scope_success"
source_path: "cpp/experimental/scope_success/~scope_success"
category: "experimental"
---

Calls the exit function if the result of [std::uncaught_exceptions](/cpp/error/exception/uncaught_exception/)() is less than or equal to the counter of uncaught exceptions (typically on normal exit) and the scope_success is active, then destroys the stored EF (if it is a function object) and any other non-static data members.

## Declarations
```cpp
~scope_success() noexcept(noexcept(std::declval<EF&>()()));
```
_(library fundamentals TS v3)_

## Notes
Whether the destructor is called on stack unwinding can be detected by the comparison of the result of [std::uncaught_exceptions](/cpp/error/exception/uncaught_exception/)() and the counter of uncaught exceptions in the scope_success.

Unlike other classes or class template specializations in the C++ standard library and other C++ TR/TS's, scope_success's destructor is permitted to throw an exception.

## See also
- [release](/cpp/experimental/scope_success/release/)
