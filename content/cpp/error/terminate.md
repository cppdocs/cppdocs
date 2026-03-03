---
title: "std::terminate"
source_path: "cpp/error/terminate"
header: "<exception>"
category: "error"
since: "C++11"
---

std::terminate() is called by the C++ runtime when the program cannot continue for any of the following reasons:

## Declarations
```cpp
void terminate();
```
_(until C++11)_

```cpp
[[noreturn]] void terminate() noexcept;
```
_(since C++11)_

## Notes
If the handler mechanism is not wanted, e.g. because it requires atomic operations which may bloat binary size, a direct call to [std::abort](/cpp/utility/program/abort/) is preferred when terminating the program abnormally.

Some compiler intrinsics, e.g. [__builtin_trap](https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html) (gcc, clang, and icc) or [__debugbreak](https://docs.microsoft.com/en-us/cpp/intrinsics/debugbreak?view=msvc-160) (msvc), can be used to terminate the program as fast as possible.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2111 | C++11 | effect of calling std::set_terminate during stackunwinding differs from C++98 and breaks some ABIs | made unspecified |

## See also
- [terminate_handler](/cpp/error/terminate_handler/)
- [abort](/cpp/utility/program/abort/)
- [breakpoint](/cpp/utility/breakpoint/)
