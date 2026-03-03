---
title: "std::cv_status"
source_path: "cpp/thread/cv_status"
header: "<condition_variable>"
category: "thread"
since: "C++11"
---

The scoped enumeration std::cv_status describes whether a timed wait returned because of timeout or not.

## Declarations
```cpp
enum class cv_status {
no_timeout,
timeout
};
```
_(since C++11)_

## See also
- [wait_for](/cpp/thread/condition_variable/wait_for/)
- [wait_for](/cpp/thread/condition_variable_any/wait_for/)
- [wait_until](/cpp/thread/condition_variable/wait_until/)
- [wait_until](/cpp/thread/condition_variable_any/wait_until/)
