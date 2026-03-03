---
title: "std::breakpoint"
source_path: "cpp/utility/breakpoint"
header: "<debugging>"
category: "utility"
since: "C++26"
---

Unconditional breakpoint: Attempts to temporarily stop program execution and pass control to the debugger, regardless of whether the presence of a debugger can be detected. The behavior of this function is implementation-defined.

## Declarations
```cpp
void breakpoint() noexcept;
```
_(since C++26)_

## Notes
The intent of this function is allowing for runtime control of breakpoints beyond what might be available from a debugger while not causing the program to exit. For example, breaking when an infrequent non-critical condition is detected, allowing programmatic control with complex runtime sensitive conditions, breaking on user input to inspect context in interactive programs without needing to switch to the debugger application, etc.

This function standardizes many similar existing facilities: [__builtin_debugtrap](https://clang.llvm.org/docs/LanguageExtensions.html#builtin-debugtrap) from LLVM, [__debugbreak](https://learn.microsoft.com/en-us/cpp/intrinsics/debugbreak) from Win32 API, [debugger_break](https://github.com/boostorg/test/blob/develop/include/boost/test/impl/debug.ipp#L716) from [boost.test](https://www.boost.org/doc/libs/release/libs/test/doc/html/index.html), [assert](/cpp/error/assert/)(false), _asm { int 3 } (MSVC) and asm("int3") (GCC/clang) for x86 targets, [etc](#External_links).

## Example
This section is incompleteReason: no example

## See also
- [is_debugger_present](/cpp/utility/is_debugger_present/)
- [breakpoint_if_debugging](/cpp/utility/breakpoint_if_debugging/)
