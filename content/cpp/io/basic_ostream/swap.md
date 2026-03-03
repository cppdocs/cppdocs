---
title: "std::basic_ostream<CharT,Traits>::swap"
source_path: "cpp/io/basic_ostream/swap"
category: "io"
since: "C++11"
---

Calls basic_ios::swap(rhs) to swap all data members of the base class, except for rdbuf(), between *this and rhs. This swap function is protected: it is called by the swap functions of the swappable output stream classes [std::basic_ofstream](/cpp/io/basic_ofstream/) and [std::basic_ostringstream](/cpp/io/basic_ostringstream/), which know how to correctly swap the associated streambuffers.

## Declarations
```cpp
protected:
void swap( basic_ostream& rhs );
```
_(since C++11)_

## Parameters
- `rhs`: a basic_ostream of the same type to swap with

## Example
```cpp
#include <iostream>
#include <sstream>
#include <utility>
 
int main()
{
    std::ostringstream s1("hello");
    std::ostringstream s2("bye");
 
    s1.swap(s2); // OK, ostringstream has a public swap()
    std::swap(s1, s2); // OK, calls s1.swap(s2)
 
//  std::cout.swap(s2); // ERROR: swap is a protected member
 
    std::cout << s1.str() << '\n';
}
```
