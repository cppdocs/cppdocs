---
title: "std::unitbuf, std::nounitbuf"
source_path: "cpp/io/manip/unitbuf"
header: "<ios>"
category: "io"
---

Enables or disables automatic flushing of the output stream after any output operation. Has no effect on input.

## Declarations
```cpp
std::ios_base& unitbuf( std::ios_base& str );
```

```cpp
std::ios_base& nounitbuf( std::ios_base& str );
```

## Parameters
- `str`: reference to I/O stream

## Return value
str (reference to the stream after manipulation).

## Notes
Flushing is performed in the destructor of the [std::basic_ostream::sentry](/cpp/io/basic_ostream/sentry/) object, which calls str.rdbuf()->pubsync() if str.flags() & [std::ios_base::unitbuf](/cpp/io/ios_base/fmtflags/) is true.

The standard output objects [std::cerr](/cpp/io/cerr/) and [std::wcerr](/cpp/io/cerr/) have their unitbuf bit set by default.

## Example
```cpp
#include <chrono>
#include <iostream>
 
template<typename Diff>
void log_progress(Diff d)
{
    std::cout << std::chrono::duration_cast<std::chrono::milliseconds>(d)
              << " ... ";
}
 
int main()
{
    volatile int sink = 0;
    std::cout << std::unitbuf; // enable automatic flushing
 
    const auto start = std::chrono::high_resolution_clock::now();
    for (int j = 0; j < 5; ++j)
    {
        for (int n = 0; n < 10000; ++n)
            for (int m = 0; m < 20000; ++m)
                sink += m * n; // do some work
        log_progress(std::chrono::high_resolution_clock::now() - start);
    }
    std::cout << '\n';
}
```

## See also
- [flush](/cpp/io/manip/flush/)
- [endl](/cpp/io/manip/endl/)
