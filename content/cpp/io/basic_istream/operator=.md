---
title: "std::basic_istream<CharT,Traits>::operator="
source_path: "cpp/io/basic_istream/operator"
category: "io"
since: "C++11"
---

1) The copy assignment operator is protected, and is deleted. Input streams are not CopyAssignable.

## Declarations
```cpp
protected:
basic_istream& operator=( const basic_istream& rhs ) = delete;
```

```cpp
protected:
basic_istream& operator=( basic_istream&& rhs );
```
_(since C++11)_

## Parameters
- `rhs`: the basic_istream object from which to assign to *this

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::istringstream s1;
    s1 = std::istringstream("test"); // OK
 
//  std::cin = std::istringstream("test"); // ERROR: 'operator=' is protected
}
```
