---
title: "C++ named requirements: TimedMutex (since C++11)"
source_path: "cpp/named_req/TimedMutex"
category: "named_req"
since: "C++11"
---

The TimedMutex requirements extend the [TimedLockable](/cpp/named_req/timedlockable/) requirements to include inter-thread synchronization.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2093 | C++11 | timeout-related exceptions were missing in the specification | mentioned |

## See also
- [Thread support library](/cpp/atomic/)
- [TimedLockable](/cpp/named_req/timedlockable/)
- [Mutex](/cpp/named_req/mutex/)
