---
title: "std::basic_ios<CharT,Traits>::rdbuf"
source_path: "cpp/io/basic_ios/rdbuf"
category: "io"
---

Manages the associated stream buffer.

## Declarations
```cpp
std::basic_streambuf<CharT, Traits>* rdbuf() const;
```

```cpp
std::basic_streambuf<CharT, Traits>* rdbuf( std::basic_streambuf<CharT, Traits>* sb );
```

## Parameters
- `sb`: Stream buffer to associate to.

## Return value
The associated stream buffer, or a null pointer if there was no associated stream buffer.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::ostringstream local;
    auto cout_buff = std::cout.rdbuf(); // save pointer to std::cout buffer
 
    std::cout.rdbuf(local.rdbuf()); // substitute internal std::cout buffer with
                                    // buffer of 'local' object
 
    // now std::cout work with 'local' buffer
    // you don't see this message
    std::cout << "some message";
 
    // go back to old buffer
    std::cout.rdbuf(cout_buff);
 
    // you will see this message
    std::cout << "back to default buffer\n";
 
    // print 'local' content
    std::cout << "local content: " << local.str() << "\n";
}
```

## See also
- [set_rdbuf](/cpp/io/basic_ios/set_rdbuf/)
