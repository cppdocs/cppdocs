---
title: "std::ios_base::iword"
source_path: "cpp/io/ios_base/iword"
category: "io"
---

First, allocates or resizes the private storage (dynamic array of long or another indexable data structure) sufficiently to make index a valid index, then returns a reference to the long element of the private storage with the index index.

## Declarations
```cpp
long& iword( int index );
```

## Parameters
- `index`: index value of the element

## Return value
A reference to the element.

## Notes
Typical use of iword storage is to pass information (e.g. custom formatting flags) from user-defined I/O manipulators to user-defined operator<< and operator>> or to user-defined formatting facets imbued into standard streams.

## Example
```cpp
#include <iostream>
#include <string>
 
struct Foo
{
    static int foo_xalloc;
    std::string data; 
 
    Foo(const std::string& s) : data(s) {}
};
 
// Allocates the iword storage for use with Foo objects
int Foo::foo_xalloc = std::ios_base::xalloc();
 
// This user-defined operator<< prints the string in reverse if the iword holds 1
std::ostream& operator<<(std::ostream& os, Foo& f)
{
    if (os.iword(Foo::foo_xalloc) == 1)
        return os << std::string(f.data.rbegin(), f.data.rend());
    else
        return os << f.data;
}
 
// This I/O manipulator flips the number stored in iword between 0 and 1
std::ios_base& rev(std::ios_base& os)
{
    os.iword(Foo::foo_xalloc) = !os.iword(Foo::foo_xalloc);
    return os;
}
 
int main()
{
    Foo f("example");
    std::cout << f << '\n' << rev << f << '\n' << rev << f << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 36 | C++98 | the stored value might not beretained if the reference is invalidated | the stored value is retaineduntil the next call of copyfmt() |
| LWG 41 | C++98 | the function set badbit by itself on failure,but ios_base does not provide such interface | badbit is set by basic_ios(if *this is its base class subobject) |

## See also
- [pword](/cpp/io/ios_base/pword/)
- [xalloc](/cpp/io/ios_base/xalloc/)
- [pword()](/cpp/io/ios_base/pword/)
