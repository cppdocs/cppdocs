---
title: "std::ostrstream::pcount"
source_path: "cpp/io/ostrstream/pcount"
category: "io"
---

Returns the number of characters that were output in the put area of the associated [std::strstreambuf](/cpp/io/strstreambuf/). Effectively calls rdbuf()->pcount().

## Declarations
```cpp
int pcount() const;
```
_(deprecated in C++98) (removed in C++26)_

## Return value
The number of characters in the put area, or zero if nothing was output.

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    std::ostrstream dyn; // dynamically-allocated output buffer
    dyn << "Test: " << 1.23 << std::ends;
    std::cout << "The size of the output is " << dyn.pcount()
              << " and it holds \"" << dyn.str() << "\"\n";
    dyn.freeze(false);
 
    char buf[10];
    std::ostrstream user(buf, 10); // user-provided output buffer
    user << 1.23; // note: no std::ends
    std::cout.write(buf, user.pcount());
    std::cout << '\n';
}
```

## See also
- [pcount](/cpp/io/strstreambuf/pcount/)
