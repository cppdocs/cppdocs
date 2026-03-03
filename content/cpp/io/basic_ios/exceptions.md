---
title: "std::basic_ios<CharT,Traits>::exceptions"
source_path: "cpp/io/basic_ios/exceptions"
category: "io"
---

Gets and sets the exception mask of the stream. The exception mask determines which error states trigger exceptions of type [failure](/cpp/io/ios_base/failure/).

## Declarations
```cpp
std::ios_base::iostate exceptions() const;
```

```cpp
void exceptions( std::ios_base::iostate except );
```

## Parameters
- `except`: exception mask

## Notes
This section is incompleteReason: discuss LWG2349 and link from ios_base::clear, and from (un)formatted(i/o)utputfunction requirement pages (or perhaps the behavior should be fully elaborated on the requirement pages and linked from here). See also stackoverflow.com/a/35089910

## Example
```cpp
#include <fstream>
#include <iostream>
 
int main() 
{
    int ivalue;
    try
    {
        std::ifstream in("in.txt");
        in.exceptions(std::ifstream::failbit); // may throw
        in >> ivalue; // may throw
    }
    catch (const std::ios_base::failure& fail)
    {
        // handle exception here
        std::cout << fail.what() << '\n';
    }
}
```
