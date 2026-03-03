---
title: "std::future_status"
source_path: "cpp/thread/future_status"
header: "<future>"
category: "thread"
since: "C++11"
---

Specifies state of a future as returned by wait_for and wait_until functions of [std::future](/cpp/thread/future/) and [std::shared_future](/cpp/thread/shared_future/).

## Declarations
```cpp
enum class future_status {
ready,
timeout,
deferred
};
```
_(since C++11)_

## See also
- [wait_for](/cpp/thread/future/wait_for/)
- [wait_for](/cpp/thread/shared_future/wait_for/)
- [wait_until](/cpp/thread/future/wait_until/)
- [wait_until](/cpp/thread/shared_future/wait_until/)
