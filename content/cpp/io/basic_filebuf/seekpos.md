---
title: "std::basic_filebuf<CharT,Traits>::seekpos"
source_path: "cpp/io/basic_filebuf/seekpos"
category: "io"
---

Repositions the file pointer, if possible, to the position indicated by sp. If the associated file is not open (is_open() == false), fails immediately.

## Declarations
```cpp
protected:
virtual pos_type seekpos( pos_type sp,
std::ios_base::openmode which = std::ios_base::in | std::ios_base::out );
```

## Parameters
- `sp`: file position obtained by seekoff() or seekpos() called earlier on the same file
- `which`: defines which of the input and/or output sequences to affect. It can be one or a combination of the following constants: Constant Explanation in affect the input sequence out affect the output sequence

## Return value
sp on success or pos_type(off_type(-1)) on failure.

## Notes
seekpos() is called by [std::basic_streambuf::pubseekpos()](/cpp/io/basic_streambuf/pubseekpos/), which is called by the single-argument versions of [std::basic_istream::seekg()](/cpp/io/basic_istream/seekg/) and [std::basic_ostream::seekp()](/cpp/io/basic_ostream/seekp/).

Many implementations do not update the get area in seekpos(), delegating to [underflow()](/cpp/io/basic_streambuf/underflow/) that is called by the next [sgetc()](/cpp/io/basic_streambuf/sgetc/).

## Example
```cpp
#include <fstream>
#include <iostream>
 
struct mybuf : std::filebuf
{
    pos_type seekpos(pos_type sp, std::ios_base::openmode which)
    {
        std::cout << "Before seekpos(" << sp << "), size of the get area is "
                  << egptr() - eback() << " with "
                  << egptr() - gptr() << " read positions available.\n";
 
        pos_type rc = std::filebuf::seekpos(sp, which);
 
        std::cout << "seekpos() returns " << rc << ".\nAfter the call, "
                  << "size of the get area is "
                  << egptr() - eback() << " with "
                  << egptr() - gptr() << " read positions available.\n";
// uncomment if get area is emptied by seekpos()
//        std::filebuf::underflow();
//        std::cout << "after forced underflow(), size of the get area is "
//                  << egptr() - eback() << " with "
//                  << egptr() - gptr() << " read positions available.\n";
 
        return rc;
    }
};
 
int main()
{
    mybuf buf;
    buf.open("test.txt", std::ios_base::in);
    std::istream stream(&buf);
    stream.get(); // read one char to force underflow()
    stream.seekg(2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 55 | C++98 | seekpos returned an undefinedinvalid stream position on failure | pos_type(off_type(-1))is returned on failure |
| LWG 171 | C++98 | the sequence of the operations of reposition was not clear | made clear |

## See also
- [pubseekpos](/cpp/io/basic_streambuf/pubseekpos/)
- [seekoff](/cpp/io/basic_filebuf/seekoff/)
- [fseek](/cpp/io/c/fseek/)
