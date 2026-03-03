---
title: "std::basic_ostream<CharT,Traits>::~basic_ostream"
source_path: "cpp/io/basic_ostream/~basic_ostream"
category: "io"
---

Destroys the basic_ostream object. This destructor does not perform any operation on the underlying streambuffer (rdbuf()): the destructors of the derived output streams such as [std::basic_ofstream](/cpp/io/basic_ofstream/) and [std::basic_ostringstream](/cpp/io/basic_ostringstream/) are responsible for calling the destructors of the stream buffers.

## Declarations
```cpp
virtual ~basic_ostream();
```

## Example
```cpp
#include <iostream>
#include <sstream>
 
void add_words(std::streambuf* p)
{
    std::ostream buf(p); // buf shares the buffer with s
    buf << " is the answer";
} // calls the destructor of buf. p remains unaffected
 
int main()
{
    std::ostringstream s;
    s << 42;
    add_words(s.rdbuf());
    s << ".";
    std::cout << s.str() << '\n';
}
```
