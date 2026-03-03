---
title: "std::is_debugger_present"
source_path: "cpp/utility/is_debugger_present"
header: "<debugging>"
category: "utility"
since: "C++26"
---

Attempts to determine if the program is being executed with debugger present.

## Declarations
```cpp
bool is_debugger_present() noexcept;
```
_(since C++26)_

## Return value
The default version returns true if, to the best of its knowledge, the program is executed under a debugger.

## Notes
The intent of this function is allowing printing out extra output to help diagnose problems, executing extra test code, displaying an extra user interface to help in debugging, etc.

This function standardizes many similar existing facilities: [under_debugger](https://github.com/boostorg/test/blob/develop/include/boost/test/impl/debug.ipp#L647) from [boost.test](https://www.boost.org/doc/libs/release/libs/test/doc/html/index.html), [IsDebuggerPresent()](https://learn.microsoft.com/en-us/windows/win32/api/debugapi/nf-debugapi-isdebuggerpresent) from Win32 API, [isDebuggerActive](https://github.com/catchorg/Catch2/blob/devel/src/catch2/internal/catch_debugger.cpp) from [Catch2](https://github.com/catchorg/Catch2), [IsDebuggerPresent](https://docs.unrealengine.com/5.0/en-US/API/Runtime/Core/GenericPlatform/FGenericPlatformMisc/IsDebuggerPresent/) from [Unreal Engine](https://www.unrealengine.com/), etc.

## Example
This section is incompleteReason: no example

## See also
- [breakpoint](/cpp/utility/breakpoint/)
- [breakpoint_if_debugging](/cpp/utility/breakpoint_if_debugging/)
