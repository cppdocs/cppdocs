---
title: "std::basic_streambuf<CharT,Traits>::sputbackc"
source_path: "cpp/io/basic_streambuf/sputbackc"
category: "io"
---

Puts back a character back to the get area.

## Declarations
```cpp
int_type sputbackc( char_type c );
```

## Parameters
- `c`: character to put back

## Return value
If putback position was available, returns the character that the next pointer is now pointing at, converted to int_type with Traits::to_int_type(*gptr()). The next single-character input from this streambuf will return this character.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::stringstream s("abcdef"); // gptr() points to 'a' in "abcdef"
    std::cout << "Before putback, string holds " << s.str() << '\n';
    char c1 = s.get(); // c1 = 'a', gptr() now points to 'b' in "abcdef"
    char c2 = s.rdbuf()->sputbackc('z'); // same as s.putback('z')
                                         // gptr() now points to 'z' in "zbcdef"
    std::cout << "After putback, string holds " << s.str() << '\n';
    char c3 = s.get(); // c3 = 'z', gptr() now points to 'b' in "zbcdef"
    char c4 = s.get(); // c4 = 'b', gptr() now points to 'c' in "zbcdef"
    std::cout << c1 << c2 << c3 << c4 << '\n';
 
    s.rdbuf()->sputbackc('b');  // gptr() now points to 'b' in "zbcdef"
    s.rdbuf()->sputbackc('z');  // gptr() now points to 'z' in "zbcdef"
    int eof = s.rdbuf()->sputbackc('x');  // nothing to unget: pbackfail() fails
    if (eof == EOF)
        std::cout << "No room to putback after 'z'\n";
}
```

## See also
- [sungetc](/cpp/io/basic_streambuf/sungetc/)
- [putback](/cpp/io/basic_istream/putback/)
