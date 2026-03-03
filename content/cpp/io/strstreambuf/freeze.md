---
title: "std::strstreambuf::freeze"
source_path: "cpp/io/strstreambuf/freeze"
category: "io"
---

If the buffer uses dynamic allocation, sets the frozen status of the stream to freezefl.

## Declarations
```cpp
void freeze( bool freezefl = true );
```
_(deprecated in C++98) (removed in C++26)_

## Parameters
- `freezefl`: new value to set the freeze status to

## Return value
(none)

## Notes
Every call to [str()](/cpp/io/strstreambuf/str/) freezes the stream to preserve the validity of the pointer it returns. To allow the destructor to deallocate the buffer, freeze(false) needs to be called explicitly.

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    {
        std::strstream dyn; // dynamically-allocated read/write buffer
        dyn << "Test: " << 1.23; // note: no std::ends to demonstrate append behavior
        std::cout << "dynamic buffer holds " << dyn.pcount() << " characters: '";
        std::cout.write(dyn.str(), dyn.pcount()) << "'\n";
        // the buffer is now frozen, further output will not make the buffer grow
        dyn << "more output, hopefully enough to run out of the allocated space"
            << std::ends;
        std::cout << "After more output, it holds "
                  << dyn.pcount() << " characters: '" << dyn.str() << "'\n";
        dyn.freeze(false); // unfreeze before destructor
    } // memory freed by the destructor
 
    {
        char arr[20];
        std::ostrstream st(arr, sizeof arr); // fixed-size buffer
        st << 1.23; // note: no std::ends to demonstrate append behavior
        std::cout << "static buffer holds "
                  << st.pcount() << " characters: '";
        std::cout.write(st.str(), st.pcount());
        std::cout << "'\n";
        st << "more output, hopefully enough to run out of the allocated space"
           << std::ends;
        std::cout << "static buffer holds "
                  << st.pcount() << " characters: '";
        std::cout.write(st.str(), st.pcount());
        std::cout << "'\n";
    } // nothing to deallocate, no need to unfreeze,
}
```

## See also
- [freeze](/cpp/io/strstream/freeze/)
- [freeze](/cpp/io/ostrstream/freeze/)
- [(destructor)](/cpp/io/strstreambuf/~strstreambuf/)
- [overflow](/cpp/io/strstreambuf/overflow/)
