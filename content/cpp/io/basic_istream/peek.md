---
title: "std::basic_istream<CharT,Traits>::peek"
source_path: "cpp/io/basic_istream/peek"
category: "io"
---

Behaves as [UnformattedInputFunction](/cpp/named_req/unformattedinputfunction/). After constructing and testing the sentry object, reads the next character from the input stream without extracting it.

## Declarations
```cpp
int_type peek();
```

## Return value
If good() == true, returns the next character as obtained by rdbuf()->sgetc().

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::istringstream s1("Hello, world.");
    char c1 = s1.peek();
    char c2 = s1.get();
    std::cout << "Peeked: " << c1 << " got: " << c2 << '\n';
}
```

## See also
- [sgetc](/cpp/io/basic_streambuf/sgetc/)
- [get](/cpp/io/basic_istream/get/)
- [unget](/cpp/io/basic_istream/unget/)
