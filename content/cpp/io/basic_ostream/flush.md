---
title: "std::basic_ostream<CharT,Traits>::flush"
source_path: "cpp/io/basic_ostream/flush"
category: "io"
---

Writes uncommitted changes to the underlying output sequence. Behaves as an [UnformattedOutputFunction](/cpp/named_req/unformattedoutputfunction/).

## Declarations
```cpp
basic_ostream& flush();
```

## Return value
*this

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
 
using namespace std::chrono_literals;
 
void f()
{
    std::cout << "Output from thread... ";
    for (int i{1}; i != 10; ++i)
    {
        std::this_thread::sleep_for(250ms);
        std::cout << i << ' ';
 
        // output three numbers at once;
        // the effect is observable only in real-time
        if (0 == (i % 3))
            std::cout.flush();
    }
    std::cout << std::endl; // flushes as well
}
 
int main()
{
    std::thread tr{f};
    std::this_thread::sleep_for(150ms);
    std::clog << "Output from main\n";
    tr.join();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 581 | C++98 | flush() did not behave as an UnformattedOutputFunctionbecause of the resolution of LWG issue 60 | behaves as anUnformattedOutputFunction |

## See also
- [pubsync](/cpp/io/basic_streambuf/pubsync/)
- [sync](/cpp/io/basic_streambuf/pubsync/)
- [flush](/cpp/io/manip/flush/)
- [endl](/cpp/io/manip/endl/)
- [sync](/cpp/io/basic_istream/sync/)
