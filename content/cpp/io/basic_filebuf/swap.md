---
title: "std::basic_filebuf<CharT,Traits>::swap"
source_path: "cpp/io/basic_filebuf/swap"
category: "io"
since: "C++11"
---

Swaps the state and the contents of *this and rhs.

## Declarations
```cpp
void swap( std::basic_filebuf& rhs );
```
_(since C++11)_

## Parameters
- `rhs`: another basic_filebuf

## Return value
(none)

## Notes
This function is called automatically when swapping [std::fstream](/cpp/io/basic_fstream/) objects, it is rarely necessary to call it directly.

## Example
```cpp
#include <fstream>
#include <iostream>
#include <string>
 
int main()
{
    std::ifstream fin("test.in"); // read-only
    std::ofstream fout("test.out"); // write-only
 
    std::string s;
    getline(fin, s);
    std::cout << s << '\n'; // outputs the first line of test.in
 
    fin.rdbuf()->swap(*fout.rdbuf()); //swap the underlying buffers
 
    getline(fin, s); // fails: cannot read from a write-only filebuf
    std::cout << s << '\n'; // prints empty line
}
```

## See also
- [operator=](/cpp/io/basic_filebuf/operator/)
- [std::swap(std::basic_filebuf)](/cpp/io/basic_filebuf/swap2/)
- [std::swap](/cpp/utility/swap/)
- [swap](/cpp/io/basic_fstream/swap/)
