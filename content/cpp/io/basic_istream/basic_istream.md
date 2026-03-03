---
title: "std::basic_istream<CharT,Traits>::basic_istream"
source_path: "cpp/io/basic_istream/basic_istream"
category: "io"
since: "C++11"
---

1) Constructs the basic_istream object, assigning initial values to the base class by calling basic_ios::init(sb). The value of gcount() is initialized to zero.

## Declarations
```cpp
explicit basic_istream( std::basic_streambuf<CharT, Traits>* sb );
```

```cpp
protected:
basic_istream( const basic_istream& rhs ) = delete;
```
_(since C++11)_

```cpp
protected:
basic_istream( basic_istream&& rhs );
```
_(since C++11)_

## Parameters
- `sb`: streambuffer to use as underlying device

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::istringstream s1("hello");
    std::istream s2(s1.rdbuf()); // OK: s2 shares the buffer with s1
 
//  std::istream s3(std::istringstream("test")); // ERROR: move constructor is protected
//  std::istream s4(s2);                         // ERROR: copy constructor is deleted
    std::istringstream s5(std::istringstream("world")); // OK: move ctor called
                                                        //     by derived class
 
    std::cout << s2.rdbuf() << ' ' << s5.rdbuf() << '\n';
}
```
