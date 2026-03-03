---
title: "std::boolalpha, std::noboolalpha"
source_path: "cpp/io/manip/boolalpha"
header: "<ios>"
category: "io"
---

1) Enables the boolalpha flag in the stream str as if by calling str.setf([std::ios_base::boolalpha](/cpp/io/ios_base/fmtflags/)).

## Declarations
```cpp
std::ios_base& boolalpha( std::ios_base& str );
```

```cpp
std::ios_base& noboolalpha( std::ios_base& str );
```

## Parameters
- `str`: reference to I/O stream

## Return value
str (reference to the stream after manipulation).

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    // boolalpha output
    std::cout << "default true: " << true << '\n'
              << "default false: " << false << '\n'
              << std::boolalpha 
              << "boolalpha true: " << true << '\n'
              << "boolalpha false: " << false << '\n'
              << std::noboolalpha 
              << "noboolalpha true: " << true << '\n'
              << "noboolalpha false: " << false << '\n';
 
    // boolalpha parse
    bool b1, b2;
    std::istringstream is("true false");
    is >> std::boolalpha >> b1 >> b2;
 
    std::cout << '"' << is.str() << "\" parsed as: "
              << std::boolalpha << b1 << ' ' << b2 << '\n';
}
```

## See also
- [resetiosflags](/cpp/io/manip/resetiosflags/)
- [setiosflags](/cpp/io/manip/setiosflags/)
- [do_truenamedo_falsename](/cpp/locale/numpunct/truefalsename/)
