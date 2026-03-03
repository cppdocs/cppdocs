---
title: "C++ named requirements: TimedLockable (since C++11)"
source_path: "cpp/named_req/TimedLockable"
category: "named_req"
since: "C++11"
---

The TimedLockable requirements describe the characteristics of types that provide timed exclusive blocking semantics for execution agents (threads, processes, tasks).

## Notes
The try_lock_for and try_lock_until member functions obtain a non-shared lock on m on success.

## See also
- [Thread support library](/cpp/atomic/)
- [TimedMutex](/cpp/named_req/timedmutex/)
- [Lockable](/cpp/named_req/lockable/)
- [BasicLockable](/cpp/named_req/basiclockable/)
