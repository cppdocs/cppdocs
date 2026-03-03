---
title: "std::execution::sync_wait"
source_path: "cpp/thread/this_thread/sync_wait"
header: "<execution>"
category: "thread"
since: "C++26"
---

[1 Parameters](#Parameters)

## Declarations
```cpp
auto sync_wait( execution::sender auto sender )
requires (/*always-sends-some-values*/(sender))
-> std::optional<std::tuple</*value-sent-by*/(sender)>>;
```
_(since C++26)_

## Parameters
- `sender`: sender upon which the completion of sync_wait is blocked

## Return value
Returns an optional tuple of values that were sent by the provided sender on its completion of work.

## Notes
The sender returned by sync_wait similarly to ensure_started, except that it blocks the current [std::thread](/cpp/thread/thread/) or thread of main until the work is completed.

## See also
- [ensure_started](/cpp/execution/ensure_started/)
