---
title: "std::shared_ptr<T>::operator<<"
source_path: "cpp/memory/shared_ptr/operator"
category: "memory"
---

Inserts the value of the pointer stored in ptr into the output stream os.

## Declarations
```cpp
template< class T, class U, class V >
std::basic_ostream<U, V>& operator<<( std::basic_ostream<U, V>& os, const std::shared_ptr<T>& ptr );
```

## Parameters
- `os`: a std::basic_ostream to insert ptr into
- `ptr`: the data to be inserted into os

## Return value
os

## Example
```cpp
#include <iostream>
#include <memory>
 
class Foo {};
 
int main()
{
    auto sp = std::make_shared<Foo>();
    std::cout << sp << '\n';
    std::cout << sp.get() << '\n';
}
```

## See also
- [get](/cpp/memory/shared_ptr/get/)
