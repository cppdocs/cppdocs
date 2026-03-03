---
title: "std::unique_ptr<T,Deleter>::operator<<"
source_path: "cpp/memory/unique_ptr/operator"
category: "memory"
since: "C++20"
---

Inserts the value of the pointer managed by p into the output stream os.

## Declarations
```cpp
template< class CharT, class Traits, class Y, class D >
std::basic_ostream<CharT, Traits>& operator<<( std::basic_ostream<CharT, Traits>& os,
const std::unique_ptr<Y, D>& p );
```
_(since C++20)_

## Parameters
- `os`: a std::basic_ostream to insert p into
- `p`: the pointer to be inserted into os

## Return value
os

## Notes
If [std::unique_ptr](/cpp/memory/unique_ptr/)<Y, D>::pointer is a pointer to a character type (e.g., when Y is char([]) or CharT([])), this may end up calling the [overloads of operator<< for null-terminated character strings](/cpp/io/basic_ostream/operator_ltlt2/) (causing undefined behavior if the pointer does not in fact point to such a string), rather than [the overload for printing the value of the pointer itself](/cpp/io/basic_ostream/operator_ltlt/).

## Example
```cpp
#include <iostream>
#include <memory>
 
class Foo {};
 
int main()
{
    auto p = std::make_unique<Foo>();
    std::cout << p << '\n';
    std::cout << p.get() << '\n';
}
```

## See also
- [get](/cpp/memory/unique_ptr/get/)
