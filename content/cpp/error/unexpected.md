---
title: "std::unexpected"
source_path: "cpp/error/unexpected"
header: "<exception>"
category: "error"
---

std::unexpected() is called by the C++ runtime when a [dynamic exception specification](/cpp/language/except_spec/) is violated: an exception is thrown from a function whose exception specification forbids exceptions of this type.

## Declarations
```cpp
void unexpected();
```
_(until C++11)_

```cpp
[[noreturn]] void unexpected();
```
_(deprecated in C++11) (removed in C++17)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2111 | C++11 | effect of calling std::set_unexpected during stackunwinding differs from C++98 and breaks some ABIs | made unspecified |

## See also
- [unexpected](/cpp/utility/expected/unexpected/)
- [unexpected_handler](/cpp/error/exception/unexpected_handler/)
