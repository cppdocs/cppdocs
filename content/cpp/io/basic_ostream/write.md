---
title: "std::basic_ostream<CharT,Traits>::write"
source_path: "cpp/io/basic_ostream/write"
category: "io"
---

Behaves as an [UnformattedOutputFunction](/cpp/named_req/unformattedoutputfunction/). After constructing and checking the sentry object, outputs the characters from successive locations in the character array whose first element is pointed to by s. Characters are inserted into the output sequence until one of the following occurs:

## Declarations
```cpp
basic_ostream& write( const char_type* s, std::streamsize count );
```

## Parameters
- `s`: pointer to the character string to write
- `count`: number of characters to write

## Return value
*this

## Notes
This function is not overloaded for the types signed char or unsigned char, unlike the formatted [operator<<](/cpp/io/basic_ostream/operator_ltlt2/).

Also, unlike the formatted output functions, this function does not set the [failbit](/cpp/io/ios_base/iostate/) on failure.

When using a non-converting locale (the default locale is non-converting), the overrider of this function in [std::basic_ofstream](/cpp/io/basic_ofstream/) may be optimized for zero-copy bulk I/O (by means of overriding [std::streambuf::xsputn](/cpp/io/basic_streambuf/sputn/)).

## Example
```cpp
#include <iostream>
 
int main()
{
    int n = 0x41424344;
    std::cout.write(reinterpret_cast<char*>(&n), sizeof n) << '\n';
 
    char c[] = "This is sample text.";
    std::cout.write(c, 4).write("!\n", 2);
}
```

## See also
- [operator<<(std::basic_ostream)](/cpp/io/basic_ostream/operator_ltlt2/)
- [put](/cpp/io/basic_ostream/put/)
