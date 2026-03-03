---
title: "std::any::reset"
source_path: "cpp/utility/any/reset"
category: "utility"
since: "C++17"
---

If *this contains a value, destroys the contained value.

## Declarations
```cpp
void reset() noexcept;
```
_(since C++17)_

## Return value
(none)

## Example
```cpp
#include <any>
#include <cassert>
 
int main()
{
    std::any a{42};
    assert(a.has_value());
    a.reset();
    assert(not a.has_value());
}
```

## See also
- [has_value](/cpp/utility/any/has_value/)
