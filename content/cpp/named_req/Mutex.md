---
title: "C++ named requirements: Mutex (since C++11)"
source_path: "cpp/named_req/Mutex"
category: "named_req"
since: "C++11"
---

The Mutex requirements extends the [Lockable](/cpp/named_req/lockable/) requirements to include inter-thread synchronization.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2309 | C++11 | lock might throw std::system_errorwith error code std::errc::device_or_resource_busy | not allowed |

## See also
- [Thread support library](/cpp/atomic/)
- [Lockable](/cpp/named_req/lockable/)
- [TimedMutex](/cpp/named_req/timedmutex/)
