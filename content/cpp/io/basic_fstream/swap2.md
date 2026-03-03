---
title: "std::swap(std::basic_fstream)"
source_path: "cpp/io/basic_fstream/swap2"
category: "io"
since: "C++11"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::basic_fstream](/cpp/io/basic_fstream/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class CharT, class Traits >
void swap( basic_fstream<CharT, Traits>& lhs, basic_fstream<CharT, Traits>& rhs );
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
 
bool create_stream(std::fstream& fs)
{
    try
    {
        std::string some_name = "/tmp/test_file.txt";
        std::ios_base::openmode some_flags = fs.trunc; // | other flags
 
        if (std::fstream ts{some_name, some_flags}; ts.is_open())
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
    if (std::fstream fs; create_stream(fs))
    {
        // use fs stream
    }
}
```

## See also
- [swap](/cpp/io/basic_fstream/swap/)
