---
title: "std::strstreambuf::seekpos"
source_path: "cpp/io/strstreambuf/seekpos"
category: "io"
---

Repositions [std::basic_streambuf::gptr](/cpp/io/basic_streambuf/gptr/) and/or [std::basic_streambuf::pptr](/cpp/io/basic_streambuf/pptr/), if possible, to the position indicated by sp.

## Declarations
```cpp
protected:
virtual pos_type seekpos( pos_type sp,
std::ios_base::openmode which =
std::ios_base::in | std::ios_base::out );
```
_(deprecated in C++98) (removed in C++26)_

## Parameters
- `sp`: stream position, such as one obtained by seekoff() or seekpos()
- `which`: defines whether the input sequences, the output sequence, or both are affected. It can be one or a combination of the following constants: Constant Explanation in affect the input sequence out affect the output sequence

## Return value
The resultant offset converted to pos_type on success or pos_type(off_type(-1)) on failure.

## Notes
seekpos() is called by [std::basic_streambuf::pubseekpos()](/cpp/io/basic_streambuf/pubseekpos/), which is called by the single-argument versions of [std::basic_istream::seekg()](/cpp/io/basic_istream/seekg/) and [std::basic_ostream::seekp()](/cpp/io/basic_ostream/seekp/).

## Example
```cpp
#include <cstring>
#include <iostream>
#include <strstream>
 
struct mybuf : std::strstreambuf
{
    mybuf(const char* str) : std::strstreambuf(str, std::strlen(str)) {}
 
    pos_type seekpos(pos_type sp, std::ios_base::openmode which)
    {
        std::cout << "Before seekpos(" << sp << "), size of the get area is "
                  << egptr() - eback() << " with "
                  << egptr() - gptr() << " read positions available.\n";
 
        pos_type rc = std::strstreambuf::seekpos(sp, which);
 
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
| LWG 55 | C++98 | seekpos returned an undefinedinvalid stream position on failure | pos_type(off_type(-1))is returned on failure |

## See also
- [seekoff](/cpp/io/strstreambuf/seekoff/)
- [seekpos](/cpp/io/basic_streambuf/pubseekpos/)
- [seekpos](/cpp/io/basic_stringbuf/seekpos/)
- [seekpos](/cpp/io/basic_filebuf/seekpos/)
