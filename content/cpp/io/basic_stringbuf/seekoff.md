---
title: "std::basic_stringbuf<CharT,Traits,Allocator>::seekoff"
source_path: "cpp/io/basic_stringbuf/seekoff"
category: "io"
---

Repositions [std::basic_streambuf::gptr](/cpp/io/basic_streambuf/gptr/) and/or [std::basic_streambuf::pptr](/cpp/io/basic_streambuf/pptr/), if possible, to the position that corresponds to exactly off characters from beginning, end, or current position of the get and/or put area of the buffer.

## Declarations
```cpp
protected:
virtual pos_type seekoff( off_type off,
std::ios_base::seekdir dir,
std::ios_base::openmode which = std::ios_base::in | std::ios_base::out );
```

## Parameters
- `off`: relative position to set the next pointer(s) to
- `dir`: defines base position to apply the relative offset to. It can be one of the following constants: Constant Explanation beg the beginning of a stream end the ending of a stream cur the current position of stream position indicator
- `which`: defines whether the input sequences, the output sequence, or both are affected. It can be one or a combination of the following constants: Constant Explanation in affect the input sequence out affect the output sequence

## Return value
pos_type(newoff) on success, pos_type(off_type(-1)) on failure or if pos_type cannot represent the resulting stream position.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::stringstream ss("123"); // in/out
    std::cout << "put pos = " << ss.tellp()
              << " get pos = " << ss.tellg() << '\n';
 
    // absolute positioning both pointers
    ss.rdbuf()->pubseekoff(1, std::ios_base::beg); // move both 1 forward
    std::cout << "put pos = " << ss.tellp()
              << " get pos = " << ss.tellg() << '\n';
 
    // try to move both pointers 1 forward from current position
    if (-1 == ss.rdbuf()->pubseekoff(1, std::ios_base::cur))
        std::cout << "moving both pointers from current position failed\n";
    std::cout << "put pos = " << ss.tellp()
              << " get pos = " << ss.tellg() << '\n';
 
    // move the write pointer 1 forward, but not the read pointer
    // can also be called as ss.seekp(1, std::ios_base::cur);
    ss.rdbuf()->pubseekoff(1, std::ios_base::cur, std::ios_base::out);
    std::cout << "put pos = " << ss.tellp()
              << " get pos = " << ss.tellg() << '\n';
 
    ss << 'a'; // write at put position
    std::cout << "Wrote 'a' at put position, the buffer is now " << ss.str() << '\n';
 
    char ch;
    ss >> ch;
    std::cout << "reading at get position gives '" << ch << "'\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 55 | C++98 | seekoff returned an undefinedinvalid stream position on failure | pos_type(off_type(-1))is returned on failure |
| LWG 375 | C++98 | static constant members of std::ios_base weremisspecified as members of std::basic_ios | corrected |
| LWG 432 | C++98 | seekoff might succeed even if newoff + offwould point past the last initialized character | seekoff failsin this case |
| LWG 453 | C++98 | repositioning null gptr() and/or null pptr()with a new offset of zero always failed | it can succeed in this case |
| LWG 563 | C++98 | the end pointer could not be used to calculate newoff because it couldnot be precisely controlled by the program after resolving LWG issue 432 | use the high watermarkpointer instead |

## See also
- [pubseekoff](/cpp/io/basic_streambuf/pubseekoff/)
- [seekpos](/cpp/io/basic_stringbuf/seekpos/)
- [seekoff](/cpp/io/basic_filebuf/seekoff/)
- [seekoff](/cpp/io/strstreambuf/seekoff/)
