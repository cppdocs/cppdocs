---
title: "std::endl"
source_path: "cpp/io/manip/endl"
header: "<ostream>"
category: "io"
---

Inserts a newline character into the output sequence os and flushes it as if by calling os.put(os.widen('\n')) followed by os.flush().

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>& endl( std::basic_ostream<CharT, Traits>& os );
```

## Parameters
- `os`: reference to output stream

## Return value
os (reference to the stream after manipulation).

## Notes
This manipulator may be used to produce a line of output immediately, e.g. when displaying output from a long-running process, logging activity of multiple threads or logging activity of a program that may crash unexpectedly. An explicit flush of [std::cout](/cpp/io/cout/) is also necessary before a call to [std::system](/cpp/utility/program/system/), if the spawned process performs any screen I/O. In most other usual interactive I/O scenarios, std::endl is redundant when used with [std::cout](/cpp/io/cout/) because any input from [std::cin](/cpp/io/cin/), output to [std::cerr](/cpp/io/cerr/), or program termination forces a call to [std::cout](/cpp/io/cout/).flush(). Use of std::endl in place of '\n', encouraged by some sources, may significantly degrade output performance.

In many implementations, standard output is line-buffered, and writing '\n' causes a flush anyway, unless std::ios::sync_with_stdio(false) was executed. In those situations, unnecessary endl only degrades the performance of file output, not standard output.

The code samples on this wiki [follow Bjarne Stroustrup](https://www.stroustrup.com/3rd_code.html) and [The C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Rio-endl) in flushing the standard output only where necessary.

When an incomplete line of output needs to be flushed, the [std::flush](/cpp/io/manip/flush/) manipulator may be used.

When every character of output needs to be flushed, the [std::unitbuf](/cpp/io/manip/unitbuf/) manipulator may be used.

## Example
```cpp
#include <chrono>
#include <iostream>
 
template<typename Diff>
void log_progress(Diff d)
{
    std::cout << std::chrono::duration_cast<std::chrono::milliseconds>(d)
              << " passed" << std::endl;
}
 
int main()
{
    std::cout.sync_with_stdio(false); // on some platforms, stdout flushes on \n
 
    static volatile int sink{};
    const auto t1 = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < 5; ++i)
    {
        for (int j = 0; j < 10000; ++j)
            for (int k = 0; k < 20000; ++k)
                sink += i * j * k; // do some work
        log_progress(std::chrono::high_resolution_clock::now() - t1);
    }
}
```

## See also
- [unitbufnounitbuf](/cpp/io/manip/unitbuf/)
- [flush](/cpp/io/manip/flush/)
- [flush](/cpp/io/basic_ostream/flush/)
