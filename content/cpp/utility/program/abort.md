---
title: "std::abort"
source_path: "cpp/utility/program/abort"
header: "<cstdlib>"
category: "utility"
since: "C++11"
---

Causes abnormal program termination unless [SIGABRT](/cpp/utility/program/sig_types/) is being caught by a signal handler passed to [std::signal](/cpp/utility/program/signal/) and the handler does not return.

## Declarations
```cpp
void abort();
```
_(until C++11)_

```cpp
[[noreturn]] void abort() noexcept;
```
_(since C++11)_

## Return value
None because it does not return.

## Notes
POSIX specifies that the [abort()](https://pubs.opengroup.org/onlinepubs/9699919799/functions/abort.html) function overrides blocking or ignoring the SIGABRT signal.

Some compiler intrinsics, e.g. [__builtin_trap](https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html) (gcc, clang, and icc) or [__fastfail](https://learn.microsoft.com/en-us/cpp/intrinsics/fastfail)/[__debugbreak](https://learn.microsoft.com/en-us/cpp/intrinsics/debugbreak) (msvc), can be used to terminate the program as fast as possible.

## Example
```cpp
#include <csignal>
#include <cstdlib>
#include <iostream>
 
class Tester
{
public:
    Tester()  { std::cout << "Tester ctor\n"; }
    ~Tester() { std::cout << "Tester dtor\n"; }
};
 
Tester static_tester; // Destructor not called
 
void signal_handler(int signal) 
{
    if (signal == SIGABRT)
        std::cerr << "SIGABRT received\n";
    else
        std::cerr << "Unexpected signal " << signal << " received\n";
    std::_Exit(EXIT_FAILURE);
}
 
int main()
{
    Tester automatic_tester; // Destructor not called
 
    // Setup handler
    auto previous_handler = std::signal(SIGABRT, signal_handler);
    if (previous_handler == SIG_ERR)
    {
        std::cerr << "Setup failed\n";
        return EXIT_FAILURE;
    }
 
    std::abort(); // Raise SIGABRT
    std::cout << "This code is unreachable\n";
}
```

## See also
- [exit](/cpp/utility/program/exit/)
- [atexit](/cpp/utility/program/atexit/)
- [std::exit()](/cpp/utility/program/exit/)
- [quick_exit](/cpp/utility/program/quick_exit/)
- [at_quick_exit](/cpp/utility/program/at_quick_exit/)
- [std::quick_exit](/cpp/utility/program/quick_exit/)
- [signal](/cpp/utility/program/signal/)
- [terminate](/cpp/error/terminate/)
- [C documentation](/c/program/abort/)
