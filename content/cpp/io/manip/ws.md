---
title: "std::ws"
source_path: "cpp/io/manip/ws"
header: "<istream>"
category: "io"
---

Discards leading whitespace from an input stream.

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_istream<CharT, Traits>& ws( std::basic_istream<CharT, Traits>& is );
```

## Parameters
- `is`: reference to input stream

## Return value
is (reference to the stream after extraction of consecutive whitespace).

## Notes
If eofbit is set on the stream prior to the call, the construction of the sentry object will set failbit.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <istream>
#include <sstream>
#include <string>
 
int main()
{
    for (const char* str : {"     #1 test", "\t #2 test", "#3 test"})
    {
        std::string line;
        std::getline(std::istringstream{str}, line);
        std::cout << "getline returns:\t" << std::quoted(line) << '\n';
 
        std::istringstream iss{str};
        std::getline(iss >> std::ws, line);
        std::cout << "ws + getline returns:\t" << std::quoted(line) << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 415 | C++98 | calling std::ws might not construct the sentryobject (insonsistent with other input functions) | required to constructthe sentry object |

## See also
- [ignore](/cpp/io/basic_istream/ignore/)
