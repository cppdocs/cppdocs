---
title: "std::condition_variable_any"
source_path: "cpp/thread/condition_variable_any"
header: "<condition_variable>"
category: "thread"
since: "C++11"
---

The condition_variable_any class is a generalization of [std::condition_variable](/cpp/thread/condition_variable/). Whereas [std::condition_variable](/cpp/thread/condition_variable/) works only on [std::unique_lock](/cpp/thread/unique_lock/)<[std::mutex](/cpp/thread/mutex/)>, condition_variable_any can operate on any lock that meets the [BasicLockable](/cpp/named_req/basiclockable/) requirements.

## Declarations
```cpp
class condition_variable_any;
```
_(since C++11)_

## Notes
std::condition_variable_any can be used with [std::shared_lock](/cpp/thread/shared_lock/) in order to wait on a [std::shared_mutex](/cpp/thread/shared_mutex/) in shared ownership mode.

A possible use for std::condition_variable_any with custom [Lockable](/cpp/named_req/lockable/) types is to provide convenient interruptible waits: the custom lock operation would both lock the associated mutex as expected, and also perform the necessary setup to notify this condition variable when the interrupting signal is received.[[1]](#cite_note-1)

## See also
- [condition_variable](/cpp/thread/condition_variable/)
- [std::unique_lock](/cpp/thread/unique_lock/)
