---
title: "std::execution::ensure_started"
source_path: "cpp/execution/ensure_started"
header: "<execution>"
category: "execution"
since: "C++26"
---

Returns a sender which completes when the provided sender completes and sends values equivalent to those of the provided sender.

## Declarations
```cpp
execution::sender auto ensure_started( execution::sender auto sender );
```
_(since C++26)_

## Parameters
- `sender`: input sender of which the stopped channel is mapped into err

## Return value
Returns a sender which completes when the provided sender completes and sends values equivalent to those of the provided sender.

## Notes
Once ensure_started returns, it is known that the provided sender has been connected and start has been called on the resulting operation state. In other words, the work described by the provided sender has been submitted for execution on the appropriate execution resources.
If the returned sender is destroyed before execution::connect() is called, or if execution::connect() is called but the returned operation-state is destroyed before execution::start() is called, then a stop-request is sent to the eagerly launched operation and the operation is detached and will run to completion in the background.
In such a case, the operation's result will be discarded when it is eventually complete.
Note that the application will need to make sure that resources are kept alive in the case that the operation detaches (e.g. by holding a std::shared_ptr to those resources).
