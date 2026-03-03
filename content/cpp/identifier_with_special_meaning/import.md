---
title: "C++ identifier with special meaning: import (since C++20)"
source_path: "cpp/identifier_with_special_meaning/import"
category: "identifier_with_special_meaning"
since: "C++20"
---

[module import declaration](/cpp/language/modules/#Importing_modules_and_headers): imports a set of translation units

## Example
```cpp
export module foo;
 
import bar;   // imports all module interface units of module bar
import :baz;  // imports the so-named module partition baz of module foo
import <set>; // imports a synthesized header unit formed from header <set>
```

## See also
- [export](/cpp/keyword/export/)
- [module](/cpp/identifier_with_special_meaning/module/)
