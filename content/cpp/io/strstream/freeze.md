---
title: "std::strstream::freeze"
source_path: "cpp/io/strstream/freeze"
category: "io"
---

If the stream is using a dynamically-allocated array for output, disables (flag == true) or enables (flag == false) automatic allocation/deallocation of the buffer. Effectively calls rdbuf()->freeze(flag).

## Declarations
```cpp
void freeze( bool flag = true );
```
_(deprecated in C++98) (removed in C++26)_

## Parameters
- `flag`: desired status

## Return value
(none)

## Notes
After a call to [str()](/cpp/io/strstream/str/), dynamic streams become frozen automatically. A call to freeze(false) is required before exiting the scope in which this strstream object was created, otherwise the destructor will leak memory. Also, additional output to a frozen stream may be truncated once it reaches the end of the allocated buffer.

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    std::strstream dyn; // dynamically-allocated output buffer
    dyn << "Test: " << 1.23; // note: no std::ends to demonstrate appending
    std::cout << "The output stream contains \"";
    std::cout.write(dyn.str(), dyn.pcount()) << "\"\n";
    // the stream is now frozen due to str()
    dyn << " More text"; // output to a frozen stream may be truncated
    std::cout << "The output stream contains \"";
    std::cout.write(dyn.str(), dyn.pcount()) << "\"\n";
    dyn.freeze(false); // freeze(false) must be called or the  destructor will leak
 
    std::strstream dyn2; // dynamically-allocated output buffer
    dyn2 << "Test: " << 1.23; // note: no std::ends
    std::cout << "The output stream contains \"";
    std::cout.write(dyn2.str(), dyn2.pcount()) << "\"\n";
    dyn2.freeze(false);   // unfreeze the stream after str()
    dyn2 << " More text" << std::ends; // output will not be truncated (buffer grows)
    std::cout << "The output stream contains \"" << dyn2.str() << "\"\n";
    dyn2.freeze(false); // freeze(false) must be called or the  destructor will leak 
}
```

## See also
- [freeze](/cpp/io/strstreambuf/freeze/)
