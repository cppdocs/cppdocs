---
title: "std::basic_ostream<CharT,Traits>::seekp"
source_path: "cpp/io/basic_ostream/seekp"
category: "io"
---

Sets the output position indicator of the current associated streambuf object.

## Declarations
```cpp
basic_ostream& seekp( pos_type pos );
```

```cpp
basic_ostream& seekp( off_type off, std::ios_base::seekdir dir );
```

## Parameters
- `pos`: absolute position to set the output position indicator to
- `off`: relative position (positive or negative) to set the output position indicator to
- `dir`: defines base position to apply the relative offset to. It can be one of the following constants: Constant Explanation beg the beginning of a stream end the ending of a stream cur the current position of stream position indicator

## Return value
*this

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::ostringstream os("hello, world");
    os.seekp(7);
    os << 'W';
    os.seekp(0, std::ios_base::end);
    os << '!';
    os.seekp(0);
    os << 'H';
    std::cout << os.str() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 129 | C++98 | there was no way to indicate a failure | sets failbit on failure |
| LWG 136 | C++98 | seekp could set the input stream | only sets the output stream |
| LWG 537 | C++98 | 1. the type of pos was pos_type&2. the type of off was off_type& | 1. corrected to pos_type2. corrected to off_type |
| LWG 2341 | C++98 | the resolution of LWG issue 129 for overload (2) was removed | restored |

## See also
- [tellp](/cpp/io/basic_ostream/tellp/)
- [tellg](/cpp/io/basic_istream/tellg/)
- [seekg](/cpp/io/basic_istream/seekg/)
