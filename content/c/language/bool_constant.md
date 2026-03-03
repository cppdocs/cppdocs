---
title: "Predefined Boolean constants (since C23)"
source_path: "c/language/bool_constant"
category: "c"
---

[1 Syntax](#Syntax)

## Notes
See [integral conversions](/c/language/conversion/#Integer_conversions) for implicit conversions from bool to other types and [boolean conversions](/c/language/conversion/#Boolean_conversion) for the implicit conversions from other types to bool.

Until C23, true and false were implemented as macros provided in [<stdbool.h>](/c/types/). An implementation may also define bool, true, and false as predefined macros in C23 for compatibility.

## Example
```cpp
#include <assert.h>
 
int main()
{
    assert(true == 1 && 0 == false);
}
```

## See also
- [C++ documentation](/cpp/language/bool_literal/)
