---
title: "std::ios_base::pword"
source_path: "cpp/io/ios_base/pword"
category: "io"
---

First, allocates or resizes the private storage (dynamic array of void* or another indexable data structure) sufficiently to make index a valid index, then returns a reference to the void* element of the private storage with the index index.

## Declarations
```cpp
void*& pword( int index );
```

## Parameters
- `index`: index value of the element

## Return value
A reference to the element.

## Notes
If the pointers stored in pword require management, [register_callback()](/cpp/io/ios_base/register_callback/) may be used to install handlers that execute deep copy or deallocation as needed.

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
| LWG 36 | C++98 | the stored value might not beretained if the reference is invalidated | the stored value is retaineduntil the next call of copyfmt() |
| LWG 41 | C++98 | the function set badbit by itself on failure,but ios_base does not provide such interface | badbit is set by basic_ios(if *this is its base class subobject) |

## See also
- [iword](/cpp/io/ios_base/iword/)
- [xalloc](/cpp/io/ios_base/xalloc/)
- [iword()](/cpp/io/ios_base/iword/)
