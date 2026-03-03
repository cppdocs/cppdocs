---
title: "std::stacktrace_entry"
source_path: "cpp/utility/stacktrace_entry"
header: "<stacktrace>"
---

The stacktrace_entry class provides operations for querying information about an evaluation in a stacktrace. Each stacktrace_entry object is either empty, or represents an evaluation in a stacktrace.

## Declarations
```cpp
class stacktrace_entry;
```
_(since C++23)_

## Notes
boost::stacktrace::frame (available in [Boost.Stacktrace](https://www.boost.org/doc/libs/release/doc/html/stacktrace.html)) can be used instead when std::stacktrace_entry is not available.

## Example
This section is incompleteReason: no example

## See also
- [basic_stacktrace](/cpp/utility/basic_stacktrace/)
- [source_location](/cpp/utility/source_location/)
