---
title: "std::basic_filebuf<CharT,Traits>::setbuf"
source_path: "cpp/io/basic_filebuf/setbuf"
category: "io"
---

If s is a null pointer and n is zero, the filebuf becomes unbuffered for output, meaning pbase() and pptr() are null and any output is immediately sent to file.

## Declarations
```cpp
protected:
virtual std::basic_streambuf<CharT, Traits>* setbuf( char_type* s, std::streamsize n )
```

## Parameters
- `s`: pointer to the first CharT in the user-provided buffer or null
- `n`: the number of CharT elements in the user-provided buffer or zero

## Return value
this

## Notes
The conditions when this function may be used and the way in which the provided buffer is used is implementation-defined.

The standard does not define any behavior for this function except that setbuf(0, 0) called before any I/O has taken place is required to set unbuffered output.

## Example
```cpp
#include <fstream>
#include <iostream>
#include <string>
 
int main()
{
    int cnt = 0;
    std::ifstream file;
    char buf[10241];
 
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
| LWG 173 | C++98 | the type of n was misspecified as int | corrected to std::streamsize |

## See also
- [pubsetbuf](/cpp/io/basic_streambuf/pubsetbuf/)
- [setvbuf](/cpp/io/c/setvbuf/)
