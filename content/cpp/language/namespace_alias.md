---
title: "Namespace aliases"
source_path: "cpp/language/namespace_alias"
category: "language"
---

Namespace aliases allow the programmer to define an alternate name for a namespace.

## Example
```cpp
#include <iostream>
 
namespace foo
{
    namespace bar
    {
         namespace baz
         {
             int qux = 42;
         }
    }
}
 
namespace fbz = foo::bar::baz;
 
int main()
{
    std::cout << fbz::qux << '\n';
}
```

## See also
- [namespace declaration](/cpp/language/namespace/)
- [type alias declaration](/cpp/language/type_alias/)
