---
title: "std::shared_lock"
source_path: "cpp/thread/shared_lock"
header: "<shared_mutex>"
category: "thread"
since: "C++14"
---

The class shared_lock is a general-purpose shared mutex ownership wrapper allowing deferred locking, timed locking and transfer of lock ownership. Locking a shared_lock locks the associated shared mutex in shared mode (to lock it in exclusive mode, [std::unique_lock](/cpp/thread/unique_lock/) can be used).

## Declarations
```cpp
template< class Mutex >
class shared_lock;
```
_(since C++14)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2981 | C++17 | redundant deduction guide from shared_lock<Mutex> was provided | removed |
