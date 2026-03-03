---
title: "std::basic_ostream<CharT,Traits>::operator="
source_path: "cpp/io/basic_ostream/operator"
category: "io"
since: "C++11"
---

1) The copy assignment operator is protected, and is deleted. Output streams are not [CopyAssignable](/cpp/named_req/copyassignable/).

## Declarations
```cpp
protected:
basic_ostream& operator=( const basic_ostream& rhs ) = delete;
```

```cpp
protected:
basic_ostream& operator=( basic_ostream&& rhs );
```
_(since C++11)_

## Parameters
- `rhs`: the basic_ostream object from which to assign to *this

## Example
```cpp
#include <iostream>
#include <sstream>
#include <utility>
 
int main()
{
    std::ostringstream s;
//  std::cout = s;            // ERROR: copy assignment operator is deleted
//  std::cout = std::move(s); // ERROR: move assignment operator is protected
    s = std::move(std::ostringstream() << 42); // OK, moved through derived
    std::cout << s.str() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2067 | C++11 | 1. the parameter type of overload (1) was basic_ostream&2. the parameter type of overload (2) was const basic_ostream&& | 1. added const2. removed const |
