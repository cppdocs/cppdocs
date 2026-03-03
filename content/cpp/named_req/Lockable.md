---
title: "C++ named requirements: Lockable (since C++11)"
source_path: "cpp/named_req/Lockable"
category: "named_req"
since: "C++11"
---

The Lockable requirements extends the [BasicLockable](/cpp/named_req/basiclockable/) requirements to include attempted locking.

## Notes
The try_lock member functions obtains a non-shared lock on m on success.

## See also
- [Thread support library](/cpp/atomic/)
- [Mutex](/cpp/named_req/mutex/)
- [BasicLockable](/cpp/named_req/basiclockable/)
- [TimedLockable](/cpp/named_req/timedlockable/)
