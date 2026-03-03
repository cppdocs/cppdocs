---
title: "std::ends"
source_path: "cpp/io/manip/ends"
header: "<ostream>"
category: "io"
---

Inserts a null character into the output sequence os as if by calling os.put(CharT()).

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>& ends( std::basic_ostream<CharT, Traits>& os );
```

## Parameters
- `os`: reference to output stream

## Return value
os (reference to the stream after insertion of the null character).

## Notes
This manipulator is typically used with [std::ostrstream](/cpp/io/ostrstream/), when the associated output buffer needs to be null-terminated to be processed as a C string.

Unlike [std::endl](/cpp/io/manip/endl/), this manipulator does not flush the stream.

## Example
```cpp
#include <cstdio>
#include <strstream>
 
int main()
{
    std::ostrstream oss;
    oss << "Sample text: " << 42 << std::ends;
    std::printf("%s\n", oss.str());
    oss.freeze(false); // enable memory deallocation
}
```

## See also
- [ostrstream](/cpp/io/ostrstream/)
