---
title: "std::basic_stringbuf<CharT,Traits,Allocator>::seekpos"
source_path: "cpp/io/basic_stringbuf/seekpos"
category: "io"
---

Repositions [std::basic_streambuf::gptr](/cpp/io/basic_streambuf/gptr/) and/or [std::basic_streambuf::pptr](/cpp/io/basic_streambuf/pptr/), if possible, to the position indicated by sp.

## Declarations
```cpp
protected:
virtual pos_type seekpos( pos_type sp,
std::ios_base::openmode which = std::ios_base::in | std::ios_base::out );
```

## Parameters
- `sp`: stream position, such as one obtained by seekoff() or seekpos()
- `which`: defines whether the input sequences, the output sequence, or both are affected. It can be one or a combination of the following constants: Constant Explanation in affect the input sequence out affect the output sequence

## Return value
sp on success or pos_type(off_type(-1)) on failure.

## Notes
seekpos() is called by [std::basic_streambuf::pubseekpos()](/cpp/io/basic_streambuf/pubseekpos/), which is called by the single-argument versions of [std::basic_istream::seekg()](/cpp/io/basic_istream/seekg/) and [std::basic_ostream::seekp()](/cpp/io/basic_ostream/seekp/).

## Example
```cpp
#include <sstream>
#include <iostream>
 
struct mybuf : std::stringbuf
{
    mybuf(const std::string& str) : std::stringbuf(str) {}
 
    pos_type seekpos(pos_type sp, std::ios_base::openmode which)
    {
        std::cout << "Before seekpos(" << sp << "), size of the get area is "
                  << egptr() - eback() << " with "
                  << egptr() - gptr() << " read positions available.\n";
 
        pos_type rc = std::stringbuf::seekpos(sp, which);
 
        std::cout << "seekpos() returns " << rc << ".\nAfter the call, "
                  << "size of the get area is "
                  << egptr() - eback() << " with "
                  << egptr() - gptr() << " read positions available.\n";
 
        return rc;
    }
};
 
int main()
{
    mybuf buf("12345");
    std::iostream stream(&buf);
    stream.seekg(2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 375 | C++98 | static constant members of std::ios_base weremisspecified as members of std::basic_ios | corrected |
| LWG 564 | C++98 | if was unclear how to reposition gptr and/or pptr | they are repositioned by seekoff() |

## See also
- [pubseekpos](/cpp/io/basic_streambuf/pubseekpos/)
- [seekoff](/cpp/io/basic_stringbuf/seekoff/)
- [seekpos](/cpp/io/basic_filebuf/seekpos/)
- [seekpos](/cpp/io/strstreambuf/seekpos/)
