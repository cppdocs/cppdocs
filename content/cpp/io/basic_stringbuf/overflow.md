---
title: "std::basic_stringbuf<CharT,Traits,Allocator>::overflow"
source_path: "cpp/io/basic_stringbuf/overflow"
category: "io"
---

Appends the character c to the output character sequence.

## Declarations
```cpp
protected:
virtual int_type overflow( int_type c = Traits::eof() );
```

## Parameters
- `c`: the character to store in the put area

## Return value
Traits::eof() to indicate failure, c if the character c was successfully appended, or some value other than Traits::eof() if called with Traits::eof() as the argument.

## Notes
This function is different from a typical overflow() which moves the contents of the buffer to the associated character sequence because for a [std::basic_stringbuf](/cpp/io/basic_stringbuf/), the buffer and the associated sequence are one and the same.

## Example
```cpp
#include <sstream>
#include <iostream>
 
struct mybuf : std::stringbuf
{
    mybuf(const std::string& new_str,
          std::ios_base::openmode which = std::ios_base::in | std::ios_base::out)
        : std::stringbuf(new_str, which) {}
 
    int_type overflow(int_type c = EOF) override
    {
        std::cout << "stringbuf::overflow('" << char(c) << "') called\n"
                  << "Before: size of get area: " << egptr() - eback() << '\n'
                  << "        size of put area: " << epptr() - pbase() << '\n';
 
        int_type ret = std::stringbuf::overflow(c);
 
        std::cout << "After : size of get area: " << egptr() - eback() << '\n'
                  << "        size of put area: " << epptr() - pbase() << '\n';
 
        return ret;
    }
};
 
int main()
{
    std::cout << "read-write stream:\n";
    mybuf sbuf("   "); // read-write stream
    std::iostream stream(&sbuf);
    stream << 1234;
    std::cout << sbuf.str() << '\n';
 
    std::cout << "\nread-only stream:\n";
    mybuf ro_buf("   ", std::ios_base::in); // read-only stream
    std::iostream ro_stream(&ro_buf);
    ro_stream << 1234;
 
    std::cout << "\nwrite-only stream:\n";
    mybuf wr_buf("   ", std::ios_base::out); // write-only stream
    std::iostream wr_stream(&wr_buf);
    wr_stream << 1234;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 169 | C++98 | the buffer (re)allocated could only hold one extra character | allows more extra characters |
| LWG 432 | C++98 | overflow moved epptr() to point just past the newwrite position if the std::stringbuf is open for input | it is not moved |

## See also
- [overflow](/cpp/io/basic_streambuf/overflow/)
- [underflow](/cpp/io/basic_stringbuf/underflow/)
