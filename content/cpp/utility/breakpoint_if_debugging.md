---
title: "std::breakpoint_if_debugging"
source_path: "cpp/utility/breakpoint_if_debugging"
header: "<debugging>"
category: "utility"
since: "C++26"
---

Conditional breakpoint: attempts to temporarily halt the execution of the program and transfer control to the debugger if it were able to determine that the debugger is present. Acts as a no-op otherwise.

## Declarations
```cpp
void breakpoint_if_debugging() noexcept;
```
_(since C++26)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_debugging
202311L
(C++26)
Debugging support library
202403L
(C++26)
Replaceable std::is_debugger_present

## Example
This section is incompleteReason: no example

## See also
- [is_debugger_present](/cpp/utility/is_debugger_present/)
- [breakpoint](/cpp/utility/breakpoint/)
