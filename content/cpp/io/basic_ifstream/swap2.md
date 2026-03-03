---
title: "std::swap(std::basic_ifstream)"
source_path: "cpp/io/basic_ifstream/swap2"
category: "io"
since: "C++11"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::basic_ifstream](/cpp/io/basic_ifstream/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class CharT, class Traits >
void swap( basic_ifstream<CharT, Traits>& lhs, basic_ifstream<CharT, Traits>& rhs );
```

## Parameters
- `lhs, rhs`: streams whose state to swap

## Return value
(none)

## Example
```cpp
#include <fstream>
#include <iostream>
#include <string>
 
bool create_stream(std::ifstream& fs)
{
    try
    {
        std::string some_name = "/tmp/test_file.txt";
        std::ios_base::openmode some_flags = fs.trunc; // | other flags
 
        if (std::ifstream ts{some_name, some_flags}; ts.is_open())
        {
            std::swap(ts, fs); // stream objects are not copyable => swap
            return true;
        }
    }
    catch (...)
    {
        std::cout << "Exception!\n";
    }
    return false;
}
 
int main()
{
    if (std::ifstream fs; create_stream(fs))
    {
        // use fs stream
    }
}
```

## See also
- [swap](/cpp/io/basic_ifstream/swap/)
