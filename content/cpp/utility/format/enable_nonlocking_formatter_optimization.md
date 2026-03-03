---
title: "std::enable_nonlocking_formatter_optimization"
source_path: "cpp/utility/format/enable_nonlocking_formatter_optimization"
header: "<format>"
category: "utility"
since: "C++23"
---

This template can be used by implementations to enable efficient implementations of [std::print](/cpp/io/print/) and [std::println](/cpp/io/println/).

## Declarations
```cpp
template< class T >
constexpr bool enable_nonlocking_formatter_optimization = false;
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_print
202403L
(C++26)(DR23)
Formatted output with stream locking
202406L
(C++26)(DR23)
Enabling nonlocking formatter optimization for more formattable types

## See also
- [formatter](/cpp/utility/format/formatter/)
- [print](/cpp/io/print/)
- [stdout](/cpp/io/c/std_streams/)
- [formatted](/cpp/utility/format/)
- [println](/cpp/io/println/)
