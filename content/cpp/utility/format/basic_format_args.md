---
title: "std::basic_format_args"
source_path: "cpp/utility/format/basic_format_args"
header: "<format>"
category: "utility"
since: "C++20"
---

Provides access to formatting arguments.

## Declarations
```cpp
template< class Context >
class basic_format_args;
```
_(since C++20)_

```cpp
using format_args = basic_format_args<std::format_context>;
```
_(since C++20)_

```cpp
using wformat_args = basic_format_args<std::wformat_context>;
```
_(since C++20)_

## Notes
std::basic_format_args has reference semantics. It is the programmer's responsibility to ensure that *this does not outlive store (which, in turn, should not outlive the arguments to [std::make_format_args](/cpp/utility/format/make_format_args/) or [std::make_wformat_args](/cpp/utility/format/make_format_args/)).

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2216R3 | C++20 | format_args_t was provided due to overparameterization of vformat_to | removed |
| LWG 3810 | C++20 | basic_format_args has no deduction guide | added |
| LWG 4106 | C++20 | basic_format_args was default-constructible | default constructor removed |

## See also
- [basic_format_arg](/cpp/utility/format/basic_format_arg/)
