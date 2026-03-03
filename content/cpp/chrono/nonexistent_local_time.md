---
title: "std::chrono::nonexistent_local_time"
source_path: "cpp/chrono/nonexistent_local_time"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Defines a type of object to be thrown as exception to report that an attempt was made to convert a nonexistent std::chrono::local_time to a std::chrono::sys_time without specifying a std::chrono::choose (such as choose::earliest or choose::latest).

## Declarations
```cpp
class nonexistent_local_time;
```
_(since C++20)_

## Parameters
- `tp`: the time point for which conversion was attempted
- `i`: a std::chrono::local_info describing the result of the conversion attempt
- `other`: another nonexistent_local_time to copy

## Return value
*this

## Notes
Because copying a standard library class derived from std::exception is not permitted to throw exceptions, this message is typically stored internally as a separately-allocated reference-counted string.

## See also
- [ambiguous_local_time](/cpp/chrono/ambiguous_local_time/)
