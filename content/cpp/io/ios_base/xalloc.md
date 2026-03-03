---
title: "std::ios_base::xalloc"
source_path: "cpp/io/ios_base/xalloc"
category: "io"
---

Returns a unique (program-wide) index value that can be used to access one long and one void* elements in the private storage of std::ios_base by calling [iword()](/cpp/io/ios_base/iword/) and [pword()](/cpp/io/ios_base/pword/). The call to xalloc does not allocate memory.

## Declarations
```cpp
static int xalloc();
```

## Return value
Unique integer for use as pword/iword index.

## Example
```cpp
#include <iostream>
 
template<class CharT, class Traits = std::char_traits<CharT>>
class mystream : public std::basic_ostream<CharT, Traits>
{
public:
    static const int xindex;
 
    mystream(std::basic_ostream<CharT, Traits>& ostr) :
        std::basic_ostream<CharT, Traits>(ostr.rdbuf())
    {
        this->pword(xindex) = this;
    }
 
    void myfn()
    {
        *this << "[special handling for mystream]";
    }
};
 
// Each specialization of mystream obtains a unique index from xalloc()
template<class CharT, class Traits>
const int mystream<CharT, Traits>::xindex = std::ios_base::xalloc();
 
// This I/O manipulator will be able to recognize ostreams that are mystreams
// by looking up the pointer stored in pword
template<class CharT, class Traits>
std::basic_ostream<CharT, Traits>& mymanip(std::basic_ostream<CharT, Traits>& os)
{
    if (os.pword(mystream<CharT, Traits>::xindex) == &os)
        static_cast<mystream<CharT, Traits>&>(os).myfn();
    return os;
}
 
int main()
{
    std::cout << "cout, narrow-character test " << mymanip << '\n';
 
    mystream<char> myout(std::cout);
    myout << "myout, narrow-character test " << mymanip << '\n';
 
    std::wcout << "wcout, wide-character test " << mymanip << '\n';
 
    mystream<wchar_t> mywout(std::wcout);
    mywout << "mywout, wide-character test " << mymanip << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2143 | C++11 | xalloc was not thread-safe | made thread-safe |

## See also
- [pword](/cpp/io/ios_base/pword/)
- [iword](/cpp/io/ios_base/iword/)
