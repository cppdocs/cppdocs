---
title: "std::basic_ios<CharT,Traits>::copyfmt"
source_path: "cpp/io/basic_ios/copyfmt"
category: "io"
---

If other refers to the same object as *this, has no effects. Otherwise, copies the state of the stream other into *this. This is done in the following sequence:

## Declarations
```cpp
basic_ios& copyfmt( const basic_ios& other );
```

## Parameters
- `other`: another stream to use as source

## Return value
*this

## Notes
The second pass through the callbacks may be used to deep-copy the user-defined objects pointed to by the pointers in [std::ios_base::pword](/cpp/io/ios_base/pword/).

copyfmt() may be used to save and restore the state of a stream. Boost provides a more fine-grained [I/O state savers](https://www.boost.org/doc/libs/release/libs/io/doc/ios_state.html) library for the same purpose.

## Example
```cpp
#include <bitset>
#include <climits>
#include <fstream>
#include <iostream>
 
int main()
{
    std::ofstream out;
 
    out.copyfmt(std::cout); // copy everything except rdstate and rdbuf
    out.clear(std::cout.rdstate()); // copy rdstate
    out.basic_ios<char>::rdbuf(std::cout.rdbuf()); // share the buffer
 
    out << "Hello, world\n";
 
    auto bin = [](std::ios_base::fmtflags f)
    {
        return std::bitset<sizeof(std::ios_base::fmtflags) * CHAR_BIT>
            { static_cast<unsigned long long>(f) };
    };
    std::ofstream out2;
    std::cout << "1) out2.flags(): " << bin(out2.flags()) << '\n';
    std::cout << "2) cout.flags(): " << bin(std::cout.flags()) << '\n';
    std::cout.setf(std::ios::hex | std::ios::fixed | std::ios::boolalpha);
    std::cout << "3) cout.flags(): " << bin(std::cout.flags()) << '\n';
    out2.copyfmt(std::cout); // copy everything except rdstate and rdbuf
    std::cout << "4) out2.flags(): " << bin(out2.flags()) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 256 | C++98 | step 3 called the registered callbacks with theevent type copy_event, which is not defined | corrected tocopyfmt_event |
| LWG 292 | C++98 | if other refers to the same object as *this, the member objectswere still copied and the registered callbacks were still called | do nothingin this case |
