---
title: "std::basic_istream<CharT,Traits>::swap"
source_path: "cpp/io/basic_istream/swap"
category: "io"
since: "C++11"
---

Calls basic_ios::swap(rhs) to swap all data members of the base class except for [rdbuf()](/cpp/io/basic_ios/rdbuf/), and swaps the values of the [gcount()](/cpp/io/basic_istream/gcount/) counters between *this and rhs. This swap function is protected: it is called by the swap functions of the swappable input stream classes [std::basic_ifstream](/cpp/io/basic_ifstream/) and [std::basic_istringstream](/cpp/io/basic_istringstream/), which know how to correctly swap the associated streambuffers.

## Declarations
```cpp
protected:
void swap( basic_istream& rhs );
```
_(since C++11)_

## Parameters
- `rhs`: different basic_istream object of the same type to swap with

## Example
```cpp
#include <iostream>
#include <sstream>
#include <utility>
 
int main()
{
    std::istringstream s1("hello");
    std::istringstream s2("bye");
 
    s1.swap(s2); // OK, istringstream has a public swap()
    std::swap(s1, s2); // OK, calls s1.swap(s2)
//  std::cin.swap(s2); // ERROR: swap is a protected member
 
    std::cout << s1.rdbuf() << '\n';
}
```
