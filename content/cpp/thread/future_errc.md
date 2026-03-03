---
title: "std::future_errc"
source_path: "cpp/thread/future_errc"
header: "<future>"
category: "thread"
since: "C++11"
---

The scoped enumeration std::future_errc defines the error codes reported by [std::future](/cpp/thread/future/) and related classes in [std::future_error](/cpp/thread/future_error/) exception objects. Only four error codes are required, although the implementation may define additional error codes. Because the appropriate specialization of [std::is_error_code_enum](/cpp/error/error_code/is_error_code_enum/) is provided, values of type std::future_errc are implicitly convertible to [std::error_code](/cpp/error/error_code/).

## Declarations
```cpp
enum class future_errc {
broken_promise = /* implementation-defined */,
future_already_retrieved = /* implementation-defined */,
promise_already_satisfied = /* implementation-defined */,
no_state = /* implementation-defined */
};
```
_(since C++11)_

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2056 | C++11 | broken_promise was specified to be zero which is conventionally used to mean "no error" | specified to be non-zero |

## See also
- [error_code](/cpp/error/error_code/)
- [error_condition](/cpp/error/error_condition/)
