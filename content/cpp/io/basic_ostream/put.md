---
title: "std::basic_ostream<CharT,Traits>::put"
source_path: "cpp/io/basic_ostream/put"
category: "io"
---

Behaves as an [UnformattedOutputFunction](/cpp/named_req/unformattedoutputfunction/). After constructing and checking the sentry object, writes the character ch to the output stream.

## Declarations
```cpp
basic_ostream& put( char_type ch );
```

## Parameters
- `ch`: character to write

## Return value
*this

## Notes
This function is not overloaded for the types signed char or unsigned char, unlike the formatted [operator<<](/cpp/io/basic_ostream/operator_ltlt2/).

Unlike formatted output functions, this function does not set the failbit if the output fails.

## Example
```cpp
#include <fstream>
#include <iostream>
 
int main()
{
    std::cout.put('a'); // normal usage
    std::cout.put('\n');
 
    std::ofstream s("/does/not/exist/");
    s.clear(); // pretend the stream is good
    std::cout << "Unformatted output: ";
    s.put('c'); // this will set badbit, but not failbit
    std::cout << " fail=" << bool(s.rdstate() & s.failbit);
    std::cout << " bad=" << s.bad() << '\n';
    s.clear();
    std::cout << "Formatted output:   ";
    s << 'c'; // this will set badbit and failbit
    std::cout << " fail=" << bool(s.rdstate() & s.failbit);
    std::cout << " bad=" << s.bad() << '\n';
}
```

## See also
- [operator<<(std::basic_ostream)](/cpp/io/basic_ostream/operator_ltlt2/)
- [write](/cpp/io/basic_ostream/write/)
