---
title: "C++ identifier with special meaning: module (since C++20)"
source_path: "cpp/identifier_with_special_meaning/module"
category: "identifier_with_special_meaning"
since: "C++20"
---

[module declaration](/cpp/language/modules/#Module_declarations): declares that the current translation unit is a module unit

## Example
```cpp
module;            // starts a global module fragment
 
#include <string>
 
export module foo; // ends a global module fragment
                   // declares the primary module interface unit for named module 'foo'
                   // starts a module unit purview
 
export std::string f();
 
module : private;  // ends the portion of the module interface unit that
                   // can affect the behavior of other translation units
                   // starts a private module fragment
 
std::string f()
{
    return "foo";
}
```

## See also
- [import](/cpp/identifier_with_special_meaning/import/)
- [export](/cpp/keyword/export/)
- [private](/cpp/keyword/private/)
