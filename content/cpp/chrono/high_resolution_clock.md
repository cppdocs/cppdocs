---
title: "std::chrono::high_resolution_clock"
source_path: "cpp/chrono/high_resolution_clock"
header: "<chrono>"
category: "chrono"
since: "C++11"
---

Class std::chrono::high_resolution_clock represents the clock with the smallest tick period provided by the implementation. It may be an alias of [std::chrono::system_clock](/cpp/chrono/system_clock/) or [std::chrono::steady_clock](/cpp/chrono/steady_clock/), or a third, independent clock.

## Declarations
```cpp
class high_resolution_clock;
```
_(since C++11)_

## Notes
There has been some controversy around the use of high_resolution_clock. Howard Hinnant, who claims to have introduced high_resolution_clock to the language, stated in 2016 on the [ISO C++ Standard - Discussion mailing list](https://lists.isocpp.org/mailman/listinfo.cgi/std-discussion) that he was in favor of deprecating it. His rationale was that, because the standard allows for it to be an alias for [std::chrono::steady_clock](/cpp/chrono/steady_clock/) or [std::chrono::system_clock](/cpp/chrono/system_clock/), its use adds uncertainty to a program without benefit. However, other participants in the thread spoke out its favor, for instance on the basis that, because neither [std::chrono::steady_clock](/cpp/chrono/steady_clock/) nor [std::chrono::system_clock](/cpp/chrono/system_clock/) come with any particular resolution guarantees, high_resolution_clock serves a useful role by giving the vendor an opportunity to supply the platform's highest-resolution clock, when neither its [std::chrono::steady_clock](/cpp/chrono/steady_clock/) nor its [std::chrono::system_clock](/cpp/chrono/system_clock/) would be that.

It is often just an alias for [std::chrono::steady_clock](/cpp/chrono/steady_clock/) or [std::chrono::system_clock](/cpp/chrono/system_clock/), but which one it is depends on the library or configuration. When it is a system_clock, it is not monotonic (e.g., the time can go backwards). For example, as of 2023, libstdc++ has it aliased to system_clock "until higher-than-nanosecond definitions become feasible"[[1]](#cite_note-1), MSVC has it as steady_clock[[2]](#cite_note-2), and libc++ uses steady_clock when the C++ standard library implementation supports a monotonic clock and system_clock otherwise[[3]](#cite_note-3).

## See also
- [system_clock](/cpp/chrono/system_clock/)
- [steady_clock](/cpp/chrono/steady_clock/)
