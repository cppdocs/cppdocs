---
title: "std::signal"
source_path: "cpp/utility/program/signal"
header: "<csignal>"
category: "utility"
---

Changes handling of the signal sig. Depending on handler, the signal can be ignored, set to default, or handled by a user-defined function.

## Declarations
```cpp
/* signal-handler */* signal( int sig, /* signal-handler */* handler );
```

```cpp
extern "C" using /* signal-handler */ = void(int);
```
_(exposition only*)_

## Parameters
- `sig`: the signal to set the signal handler to. It can be an implementation-defined value or one of the following values: SIGABRTSIGFPESIGILLSIGINTSIGSEGVSIGTERM defines signal types (macro constant) [edit]
- `handler`: the signal handler. This must be one of the following: SIG_DFL macro. The signal handler is set to default signal handler. SIG_IGN macro. The signal is ignored. A pointer to a function. The signature of the function must be equivalent to the following: extern "C" void fun(int sig);

## Return value
Previous signal handler on success or [SIG_ERR](/cpp/utility/program/sig_err/) on failure (setting a signal handler can be disabled on some implementations).

## Notes
POSIX requires that signal is thread-safe, and [specifies a list of async-signal-safe library functions](https://pubs.opengroup.org/onlinepubs/9699919799/functions/V2_chap02.html#tag_15_04) that may be called from any signal handler.

Signal handlers are expected to have [C linkage](/cpp/language/language_linkage/) and, in general, only use the features from the common subset of C and C++. However, common implementations allow a function with C++ linkage to be used as a signal handler.

## Example
```cpp
#include <csignal>
#include <iostream>
 
namespace
{
    volatile std::sig_atomic_t gSignalStatus;
}
 
void signal_handler(int signal)
{
    gSignalStatus = signal;
}
 
int main()
{
    // Install a signal handler
    std::signal(SIGINT, signal_handler);
 
    std::cout << "SignalValue: " << gSignalStatus << '\n';
    std::cout << "Sending signal: " << SIGINT << '\n';
    std::raise(SIGINT);
    std::cout << "SignalValue: " << gSignalStatus << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3756 | C++17 | it was unclear whether std::atomic_flag is signal-safe | it is |

## See also
- [raise](/cpp/utility/program/raise/)
- [atomic_signal_fence](/cpp/atomic/atomic_signal_fence/)
- [C documentation](/c/program/signal/)
