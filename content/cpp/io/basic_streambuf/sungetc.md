---
title: "std::basic_streambuf<CharT,Traits>::sungetc"
source_path: "cpp/io/basic_streambuf/sungetc"
category: "io"
---

If a putback position is available in the get area (gptr() > eback()), then decrements the next pointer ([gptr()](/cpp/io/basic_streambuf/gptr/)) and returns the character it now points to.

## Declarations
```cpp
int_type sungetc();
```

## Return value
If putback position was available, returns the character that the next pointer is now pointing at, converted to int_type with Traits::to_int_type(*gptr()). The next single-character input from this streambuf will return this character.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::stringstream s("abcdef"); // gptr() points to 'a'
    char c1 = s.get(); // c = 'a', gptr() now points to 'b' 
    char c2 = s.rdbuf()->sungetc(); // same as s.unget(): gptr() points to 'a' again 
    char c3 = s.get(); // c3 = 'a', gptr() now points to 'b'
    char c4 = s.get(); // c4 = 'b', gptr() now points to 'c'
    std::cout << c1 << c2 << c3 << c4 << '\n';
 
    s.rdbuf()->sungetc();  // back to 'b'
    s.rdbuf()->sungetc();  // back to 'a'
    int eof = s.rdbuf()->sungetc();  // nothing to unget: pbackfail() fails
    if (eof == EOF)
            std::cout << "Nothing to unget after 'a'\n";
}
```

## See also
- [sputbackc](/cpp/io/basic_streambuf/sputbackc/)
- [unget](/cpp/io/basic_istream/unget/)
