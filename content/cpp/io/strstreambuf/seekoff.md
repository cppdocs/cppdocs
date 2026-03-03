---
title: "std::strstreambuf::seekoff"
source_path: "cpp/io/strstreambuf/seekoff"
category: "io"
---

Repositions [std::basic_streambuf::gptr](/cpp/io/basic_streambuf/gptr/) and/or [std::basic_streambuf::pptr](/cpp/io/basic_streambuf/pptr/), if possible, to the position that corresponds to exactly off characters from beginning, end, or current position of the get and/or put area of the buffer.

## Declarations
```cpp
protected:
virtual pos_type seekoff( off_type off,
ios_base::seekdir way,
ios_base::openmode which = ios_base::in | ios_base::out );
```
_(deprecated in C++98) (removed in C++26)_

## Parameters
- `off`: relative position to set the next pointer(s) to
- `way`: defines base position to apply the relative offset to. It can be one of the following constants: Constant Explanation beg the beginning of a stream end the ending of a stream cur the current position of stream position indicator
- `which`: defines whether the input sequences, the output sequence, or both are affected. It can be one or a combination of the following constants: Constant Explanation in affect the input sequence out affect the output sequence

## Return value
pos_type(newoff) on success, pos_type(off_type(-1)) on failure and if pos_type cannot represent the resulting stream position.

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    char a[] = "123";
    std::strstream ss(a, sizeof a); // in/out
    std::cout << "put pos = " << ss.tellp()
              << " get pos = " << ss.tellg() << '\n';
 
    // absolute positioning both pointers
    ss.rdbuf()->pubseekoff(1, std::ios_base::beg); // move both forward
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
    std::cout << "Wrote 'a' at put position, the buffer is now: '";
    std::cout.write(a, sizeof a);
    std::cout << "'\n";
 
    char ch;
    ss >> ch;
    std::cout << "reading at get position gives '" << ch << "'\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 55 | C++98 | seekoff returned an undefinedinvalid stream position on failure | pos_type(off_type(-1))is returned on failure |

## See also
- [seekpos](/cpp/io/strstreambuf/seekpos/)
- [seekoff](/cpp/io/basic_streambuf/pubseekoff/)
- [seekoff](/cpp/io/basic_stringbuf/seekoff/)
- [seekoff](/cpp/io/basic_filebuf/seekoff/)
