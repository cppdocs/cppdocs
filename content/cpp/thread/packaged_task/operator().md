---
title: "std::packaged_task<R(Args...)>::operator()"
source_path: "cpp/thread/packaged_task/operator"
category: "thread"
since: "C++11"
---

Calls the stored task as if by [INVOKE<R>](/cpp/utility/functional/)(f, args...), where f is the stored task. The return value of the task or any exceptions thrown are stored in the shared state. The shared state is made ready and any threads waiting for this are unblocked.

## Declarations
```cpp
void operator()( ArgTypes... args );
```
_(since C++11)_

## Parameters
- `args`: the parameters to pass on invocation of the stored task

## Return value
(none)

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2142 | C++11 | a successful call to operator() synchronized witha call to any member function of a std::future orstd::shared_future that share their shared state with *this | no additional synchronizationguarantees other than what isalready provided by shared state |

## See also
- [make_ready_at_thread_exit](/cpp/thread/packaged_task/make_ready_at_thread_exit/)
