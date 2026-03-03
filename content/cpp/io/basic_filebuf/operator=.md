---
title: "std::basic_filebuf<CharT,Traits>::operator="
source_path: "cpp/io/basic_filebuf/operator"
category: "io"
since: "C++11"
---

Assigns another basic_filebuf object.

## Declarations
```cpp
std::basic_filebuf& operator=( std::basic_filebuf&& rhs );
```
_(since C++11)_

```cpp
std::basic_filebuf& operator=( const std::basic_filebuf& rhs ) = delete;
```

## Parameters
- `rhs`: another basic_filebuf that will be moved from

## Return value
*this

## Example
```cpp
#include <cassert>
#include <fstream>
#include <iostream>
#include <string>
 
int main()
{
    std::ofstream{"test.in"} << "test\n"; // writes via a temporary object
    std::ifstream fin("test.in"); // read-only stream
    std::ofstream fout("test.out"); // write-only stream
 
    std::string s;
    std::getline(fin, s);
    std::cout << "s = [" << s << "]\n"; // s contains "test"
 
    assert(fout.is_open());
    *fin.rdbuf() = std::move(*fout.rdbuf());
    assert(!fout.is_open());
 
    std::getline(fin, s);
    std::cout << "s = [" << s << "]\n"; // s is empty input
}
```

## See also
- [(constructor)](/cpp/io/basic_filebuf/basic_filebuf/)
- [swap](/cpp/io/basic_filebuf/swap/)
