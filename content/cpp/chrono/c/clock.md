---
title: "std::clock"
source_path: "cpp/chrono/c/clock"
header: "<ctime>"
category: "chrono"
---

Returns the approximate processor time used by the process since the beginning of an implementation-defined era related to the program's execution. To convert result value to seconds divide it by [CLOCKS_PER_SEC](/cpp/chrono/c/clocks_per_sec/).

## Declarations
```cpp
std::clock_t clock();
```

## Return value
Processor time used by the program so far.

## Notes
On POSIX-compatible systems, [clock_gettime](https://pubs.opengroup.org/onlinepubs/9799919799/functions/clock_getres.html) with clock id CLOCK_PROCESS_CPUTIME_ID offers better resolution.

The value returned by clock() may wrap around on some implementations. For example, on such an implementation, if [std::clock_t](/cpp/chrono/c/clock_t/) is a signed 32-bit integer and [CLOCKS_PER_SEC](/cpp/chrono/c/clocks_per_sec/) is 1'000'000, it will wrap after about 2147 seconds (about 36 minutes).

## Example
```cpp
#include <chrono>
#include <ctime>
#include <iomanip>
#include <iostream>
#include <thread>
 
// The function f() does some time-consuming work.
void f()
{
    volatile double d = 0;
    for (int n = 0; n != 10000; ++n)
        for (int m = 0; m != 10000; ++m)
            d += d * n * m;
}
 
int main()
{
    const std::clock_t c_start = std::clock();
    auto t_start = std::chrono::high_resolution_clock::now();
    std::thread t1(f);
    std::thread t2(f); // f() is called on two threads
    t1.join();
    t2.join();
    const std::clock_t c_end = std::clock();
    const auto t_end = std::chrono::high_resolution_clock::now();
 
    std::cout << std::fixed << std::setprecision(2) << "CPU time used: "
              << 1000.0 * (c_end - c_start) / CLOCKS_PER_SEC << "ms\n"
              << "Wall clock time passed: "
              << std::chrono::duration<double, std::milli>(t_end - t_start) << '\n';
}
```

## See also
- [ctime](/cpp/chrono/c/ctime/)
- [std::time_t](/cpp/chrono/c/time_t/)
- [time](/cpp/chrono/c/time/)
- [C documentation](/c/chrono/clock/)
