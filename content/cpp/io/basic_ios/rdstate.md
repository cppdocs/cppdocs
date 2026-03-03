---
title: "std::basic_ios<CharT,Traits>::rdstate"
source_path: "cpp/io/basic_ios/rdstate"
category: "io"
---

Returns the current stream error state.

## Declarations
```cpp
iostate rdstate() const;
```

## Return value
current stream error state. It is a bitmask type and can be a combination of the following constants:

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::ostringstream stream;
 
    if (stream.rdstate() == std::ios_base::goodbit)
        std::cout << "stream state is goodbit\n";
 
    stream.setstate(std::ios_base::eofbit);
 
    // check state is exactly eofbit (no failbit and no badbit)
    if (stream.rdstate() == std::ios_base::eofbit)
        std::cout << "stream state is eofbit\n";
}
```

## See also
- [setstate](/cpp/io/basic_ios/setstate/)
- [clear](/cpp/io/basic_ios/clear/)
