---
title: "std::flush"
source_path: "cpp/io/manip/flush"
header: "<ostream>"
category: "io"
---

Flushes the output sequence os as if by calling os.flush().

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>& flush( std::basic_ostream<CharT, Traits>& os );
```

## Parameters
- `os`: reference to output stream

## Return value
os (reference to the stream after manipulation).

## Notes
This manipulator may be used to produce an incomplete line of output immediately, e.g. when displaying output from a long-running process, logging activity of multiple threads or logging activity of a program that may crash unexpectedly. An explicit flush of [std::cout](/cpp/io/cout/) is also necessary before a call to [std::system](/cpp/utility/program/system/), if the spawned process performs any screen I/O (a common example is [std::system](/cpp/utility/program/system/)("pause") on Windows). In most other usual interactive I/O scenarios, [std::endl](/cpp/io/manip/endl/) is redundant when used with [std::cout](/cpp/io/cout/) because any input from [std::cin](/cpp/io/cin/), output to [std::cerr](/cpp/io/cerr/), or program termination forces a call to [std::cout](/cpp/io/cout/).flush().

When a complete line of output needs to be flushed, the [std::endl](/cpp/io/manip/endl/) manipulator may be used.

When every output operation needs to be flushed, the [std::unitbuf](/cpp/io/manip/unitbuf/) manipulator may be used.

## Example
```cpp
#include <chrono>
#include <iostream>
 
template<typename Diff>
void log_progress(Diff d)
{
    std::cout << std::chrono::duration_cast<std::chrono::milliseconds>(d) << " ... "
              << std::flush;
}
 
int main()
{
    volatile int sink = 0;
 
    auto t1 = std::chrono::high_resolution_clock::now();
    for (int j = 0; j < 5; ++j)
    {
        for (int n = 0; n < 10000; ++n)
            for (int m = 0; m < 20000; ++m)
                sink += m * n; // do some work
        auto now = std::chrono::high_resolution_clock::now();
        log_progress(now - t1);
    }
    std::cout << '\n';
}
```

## See also
- [unitbufnounitbuf](/cpp/io/manip/unitbuf/)
- [endl](/cpp/io/manip/endl/)
- [flush](/cpp/io/basic_ostream/flush/)
