---
title: "std::basic_istream<CharT,Traits>::putback"
source_path: "cpp/io/basic_istream/putback"
category: "io"
---

Puts the character ch back to the input stream so the next extracted character will be ch.

## Declarations
```cpp
basic_istream& putback( char_type ch );
```

## Parameters
- `ch`: character to put into input stream

## Return value
*this

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::stringstream s1("Hello, world"); // IO stream
    s1.get();
    if (s1.putback('Y')) // modifies the buffer
        std::cout << s1.rdbuf() << '\n';
    else
        std::cout << "putback failed\n";
 
    std::cout << "--\n";
 
    std::istringstream s2("Hello, world"); // input-only stream
    s2.get();
    if (s2.putback('Y')) // cannot modify input-only buffer
        std::cout << s2.rdbuf() << '\n';
    else
        std::cout << "putback failed\n"; 
    s2.clear();
 
    std::cout << "--\n";
 
    if (s2.putback('H')) // non-modifying putback
        std::cout << s2.rdbuf() << '\n';
    else
        std::cout << "putback failed\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2243 | C++98 | sputbackc() was called without any argument | called with ch |

## See also
- [sputbackc](/cpp/io/basic_streambuf/sputbackc/)
- [unget](/cpp/io/basic_istream/unget/)
- [peek](/cpp/io/basic_istream/peek/)
