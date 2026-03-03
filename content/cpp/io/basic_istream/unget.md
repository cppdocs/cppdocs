---
title: "std::basic_istream<CharT,Traits>::unget"
source_path: "cpp/io/basic_istream/unget"
category: "io"
---

Makes the most recently extracted character available again.

## Declarations
```cpp
basic_istream& unget();
```

## Return value
*this

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::istringstream s1("Hello, world.");
    char c1 = s1.get();
    if (s1.unget())
    {
        char c2 = s1.get();
        std::cout << "Got: '" << c1 << "'. Got again: '" << c2 << "'.\n";
    }
}
```

## See also
- [sungetc](/cpp/io/basic_streambuf/sungetc/)
- [get](/cpp/io/basic_istream/get/)
- [peek](/cpp/io/basic_istream/peek/)
- [putback](/cpp/io/basic_istream/putback/)
