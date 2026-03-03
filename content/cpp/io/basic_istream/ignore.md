---
title: "std::basic_istream<CharT,Traits>::ignore"
source_path: "cpp/io/basic_istream/ignore"
category: "io"
---

Extracts and discards characters from the input stream until and including delim.

## Declarations
```cpp
basic_istream& ignore( std::streamsize count = 1, int_type delim = Traits::eof() );
```

## Parameters
- `count`: number of characters to extract
- `delim`: delimiting character to stop the extraction at. It is also extracted

## Return value
*this

## Example
```cpp
#include <iostream>
#include <limits>
#include <sstream>
 
constexpr auto max_size = std::numeric_limits<std::streamsize>::max();
 
int main()
{
    std::istringstream input("1\n"
                             "some non-numeric input\n"
                             "2\n");
    for (;;)
    {
        int n;
        input >> n;
 
        if (input.eof() || input.bad())
            break;
        else if (input.fail())
        {
            input.clear(); // unset failbit
            input.ignore(max_size, '\n'); // skip bad input
        }
        else
            std::cout << n << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 172 | C++98 | the type of count was misspecified as int | corrected to std::streamsize |

## See also
- [get](/cpp/io/basic_istream/get/)
- [getline](/cpp/io/basic_istream/getline/)
