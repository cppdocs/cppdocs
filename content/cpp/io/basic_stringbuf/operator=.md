---
title: "std::basic_stringbuf<CharT,Traits,Allocator>::operator="
source_path: "cpp/io/basic_stringbuf/operator"
category: "io"
since: "C++11"
---

1) Move assignment operator: Moves the contents of rhs into *this. After the move, *this has the associated string, the open mode, the locale, and all other state formerly held by rhs. The six pointers of [std::basic_streambuf](/cpp/io/basic_streambuf/) in *this are guaranteed to be different from the corresponding pointers in the moved-from rhs unless null.

## Declarations
```cpp
std::basic_stringbuf& operator=( std::basic_stringbuf&& rhs );
```
_(since C++11)_

```cpp
std::basic_stringbuf& operator=( const std::basic_stringbuf& rhs ) = delete;
```

## Parameters
- `rhs`: another basic_stringbuf that will be moved from

## Return value
*this

## Example
```cpp
#include <iostream>
#include <sstream>
#include <string>
 
int main()
{
    std::istringstream one("one");
    std::ostringstream two("two");
 
    std::cout << "Before move, one = \"" << one.str() << '"'
              << " two = \"" << two.str() << "\"\n";
 
    *one.rdbuf() = std::move(*two.rdbuf());
 
    std::cout << "After move, one = \"" << one.str() << '"'
              << " two = \"" << two.str() << "\"\n";
}
```

## See also
- [(constructor)](/cpp/io/basic_stringbuf/basic_stringbuf/)
