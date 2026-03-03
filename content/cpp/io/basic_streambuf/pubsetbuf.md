---
title: "std::basic_streambuf<CharT,Traits>::pubsetbuf, std::basic_streambuf<CharT,Traits>::setbuf"
source_path: "cpp/io/basic_streambuf/pubsetbuf"
category: "io"
---

1) Calls setbuf(s, n) of the most derived class.

## Declarations
```cpp
public:
basic_streambuf<CharT, Traits>* pubsetbuf( char_type* s, std::streamsize n )
```

```cpp
protected:
virtual basic_streambuf<CharT, Traits>* setbuf( char_type* s, std::streamsize n )
```

## Parameters
- `s`: pointer to the first CharT in the user-provided buffer
- `n`: the number of CharT elements in the user-provided buffer

## Example
```cpp
#include <fstream>
#include <iostream>
#include <string>
 
int main()
{
    int cnt = 0;
    std::ifstream file;
    char buf[1024 * 10 + 1];
 
    file.rdbuf()->pubsetbuf(buf, sizeof buf);
 
    file.open("/usr/share/dict/words");
 
    for (std::string line; getline(file, line);)
        ++cnt;
 
    std::cout << cnt << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 158 | C++98 | the default behavior of setbuf was only specifiedif gptr() is not null and not equal to egptr() | specified as no-opfor all cases |

## See also
- [setbuf](/cpp/io/basic_stringbuf/setbuf/)
- [setbuf](/cpp/io/basic_filebuf/setbuf/)
- [setbuf](/cpp/io/strstreambuf/setbuf/)
- [setbuf](/cpp/io/c/setbuf/)
