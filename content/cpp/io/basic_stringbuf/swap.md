---
title: "std::basic_stringbuf<CharT,Traits,Allocator>::swap"
source_path: "cpp/io/basic_stringbuf/swap"
category: "io"
since: "C++20"
---

Swaps the state and the contents of *this and rhs.

## Declarations
```cpp
void swap( basic_stringbuf& rhs );
```
_(since C++11) (until C++20)_

```cpp
void swap( basic_stringbuf& rhs ) noexcept(/* see below */);
```
_(since C++20)_

## Parameters
- `rhs`: another basic_stringbuf

## Return value
(none)

## Notes
This function is called automatically when swapping [std::stringstream](/cpp/io/basic_stringstream/) objects. It is rarely necessary to call it directly.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <sstream>
#include <string>
 
int main()
{
    std::istringstream one("one");
    std::ostringstream two("two");
 
    std::cout << "Before swap: one = " << std::quoted(one.str())
              << ", two = " << std::quoted(two.str()) << ".\n";
 
    one.rdbuf()->swap(*two.rdbuf());
 
    std::cout << "After  swap: one = " << std::quoted(one.str())
              << ", two = " << std::quoted(two.str()) << ".\n";
}
```

## See also
- [(constructor)](/cpp/io/basic_stringbuf/basic_stringbuf/)
- [swap](/cpp/io/basic_stringstream/swap/)
