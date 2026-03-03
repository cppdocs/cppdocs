---
title: "C++ named requirements: SharedTimedLockable (since C++14)"
source_path: "cpp/named_req/SharedTimedLockable"
category: "named_req"
since: "C++14"
---

The SharedTimedLockable requirements describe the characteristics of types that provide timed shared blocking semantics for execution agents (threads, processes, tasks).

## Notes
The try_lock_shared_for and try_lock_shared_until member functions obtain a shared lock on m on success.

## See also
- [Thread support library](/cpp/atomic/)
- [SharedTimedMutex](/cpp/named_req/sharedtimedmutex/)
- [SharedLockable](/cpp/named_req/sharedlockable/)
