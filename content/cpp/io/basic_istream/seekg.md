---
title: "std::basic_istream<CharT,Traits>::seekg"
source_path: "cpp/io/basic_istream/seekg"
category: "io"
---

Sets input position indicator of the current associated streambuf object.

## Declarations
```cpp
basic_istream& seekg( pos_type pos );
```

```cpp
basic_istream& seekg( off_type off, std::ios_base::seekdir dir );
```

## Parameters
- `pos`: absolute position to set the input position indicator to
- `off`: relative position (positive or negative) to set the input position indicator to
- `dir`: defines base position to apply the relative offset to. It can be one of the following constants: Constant Explanation beg the beginning of a stream end the ending of a stream cur the current position of stream position indicator

## Return value
*this

## Notes
seekg(n) is not necessarily equivalent to seekg(n, ios::beg). [std::basic_ifstream](/cpp/io/basic_ifstream/), for example, requires the absolute position n to come from [tellg()](/cpp/io/basic_istream/tellg/).

## Example
```cpp
#include <iostream>
#include <sstream>
#include <string>
 
int main()
{
    std::string str = "Hello, world";
    std::istringstream in(str);
    std::string word1, word2;
 
    in >> word1;
    in.seekg(0); // rewind
    in >> word2;
 
    std::cout << "word1 = " << word1 << '\n'
              << "word2 = " << word2 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 129 | C++98 | there was no way to indicate a failure | sets failbit on failure |
| LWG 136 | C++98 | seekg could set the output stream | only sets the input stream |
| LWG 537 | C++98 | the type of off was off_type& | corrected to off_type |

## See also
- [tellg](/cpp/io/basic_istream/tellg/)
- [tellp](/cpp/io/basic_ostream/tellp/)
- [seekp](/cpp/io/basic_ostream/seekp/)
- [pubseekpos](/cpp/io/basic_streambuf/pubseekpos/)
- [seekpos](/cpp/io/basic_filebuf/seekpos/)
- [seekpos](/cpp/io/basic_stringbuf/seekpos/)
- [seekpos](/cpp/io/strstreambuf/seekpos/)
- [pubseekoff](/cpp/io/basic_streambuf/pubseekoff/)
- [seekoff](/cpp/io/basic_filebuf/seekoff/)
- [seekoff](/cpp/io/basic_stringbuf/seekoff/)
- [seekoff](/cpp/io/strstreambuf/seekoff/)
