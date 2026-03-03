---
title: "std::basic_streambuf<CharT,Traits>::sputn, std::basic_streambuf<CharT,Traits>::xsputn"
source_path: "cpp/io/basic_streambuf/sputn"
category: "io"
---

1) Calls xsputn(s, count) of the most derived class.

## Declarations
```cpp
std::streamsize sputn( const char_type* s, std::streamsize count );
```

```cpp
protected:
virtual std::streamsize xsputn( const char_type* s, std::streamsize count );
```

## Return value
The number of characters successfully written.

## Notes
"achieved by other means" permits bulk I/O without intermediate buffering: that is how [std::ofstream::write()](/cpp/io/basic_ostream/write/) simply passes the pointer to the suitable system call in some implementations.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::ostringstream s1;
    std::streamsize sz = s1.rdbuf()->sputn("This is a test", 14);
    s1 << '\n';
    std::cout << "The call to sputn() returned " << sz << '\n'
              << "The output sequence contains " << s1.str();
 
    std::istringstream s2;
    sz = s2.rdbuf()->sputn("This is a test", 14);
    std::cout << "The call to sputn() on an input stream returned " << sz << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 565 | C++98 | xsputn() always called overflow() if pptr() == epptr() | it does not actually need to be called |

## See also
- [sgetn](/cpp/io/basic_streambuf/sgetn/)
