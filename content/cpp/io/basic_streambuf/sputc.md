---
title: "std::basic_streambuf<CharT,Traits>::sputc"
source_path: "cpp/io/basic_streambuf/sputc"
category: "io"
---

Writes one character to the output sequence.

## Declarations
```cpp
int_type sputc( char_type ch );
```

## Parameters
- `ch`: character to write

## Return value
The written character, converted to int_type with Traits::to_int_type(ch) on success.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::ostringstream s;
    s.rdbuf()->sputc('a');
    std::cout << s.str() << '\n';
}
```

## See also
- [sputn](/cpp/io/basic_streambuf/sputn/)
