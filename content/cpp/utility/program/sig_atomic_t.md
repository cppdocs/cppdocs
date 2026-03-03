---
title: "std::sig_atomic_t"
source_path: "cpp/utility/program/sig_atomic_t"
header: "<csignal>"
category: "utility"
---

An integer type which can be accessed as an atomic entity even in the presence of asynchronous interrupts made by signals.

## Declarations
```cpp
typedef /* unspecified */ sig_atomic_t;
```

## Notes
Until C++11, which introduced [std::atomic](/cpp/atomic/atomic/) and [std::atomic_signal_fence](/cpp/atomic/atomic_signal_fence/), about the only thing a strictly conforming program could do in a signal handler was to assign a value to a volatile static std::sig_atomic_t variable and promptly return.

## See also
- [signal](/cpp/utility/program/signal/)
- [atomic_signal_fence](/cpp/atomic/atomic_signal_fence/)
- [C documentation](/c/program/sig_atomic_t/)
