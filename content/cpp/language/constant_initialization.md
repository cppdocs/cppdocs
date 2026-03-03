---
title: "Constant initialization"
source_path: "cpp/language/constant_initialization"
category: "language"
---

Sets the initial values of the [static](/cpp/language/storage_duration/) variables to a compile-time constant.

## Notes
The compiler is permitted to initialize other staticand thread-local(since C++11) objects using constant initialization, if it can guarantee that the value would be the same as if the standard order of initialization was followed.

Constant initialization usually happens when the program loads into memory, as part of initializing the program's runtime environment.

## Example
```cpp
#include <iostream>
#include <array>
 
struct S
{
    static const int c;
};
 
const int d = 10 * S::c; // not a constant expression: S::c has no preceding
                         // initializer, this initialization happens after const
const int S::c = 5;      // constant initialization, guaranteed to happen first
 
int main()
{
    std::cout << "d = " << d << '\n';
    std::array<int, S::c> a1; // OK: S::c is a constant expression
//  std::array<int, d> a2;    // error: d is not a constant expression
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 441 | C++98 | references could not be constant initialized | made constant initializable |
| CWG 1489 | C++11 | it was unclear whether value-initializingan object can be a constant initialization | it can |
| CWG 1747 | C++11 | binding a reference to a function could not be constant initialization | it can |
| CWG 1834 | C++11 | binding a reference to an xvalue could not be constant initialization | it can |

## See also
- [constinit](/cpp/language/constinit/)
- [constexpr](/cpp/language/constexpr/)
- [constructor](/cpp/language/initializer_list/)
- [converting constructor](/cpp/language/converting_constructor/)
- [copy constructor](/cpp/language/copy_constructor/)
- [default constructor](/cpp/language/default_constructor/)
- [explicit](/cpp/language/explicit/)
- [initialization](/cpp/language/initialization/)
- [aggregate initialization](/cpp/language/aggregate_initialization/)
- [copy initialization](/cpp/language/copy_initialization/)
- [default initialization](/cpp/language/default_initialization/)
- [direct initialization](/cpp/language/direct_initialization/)
- [list initialization](/cpp/language/list_initialization/)
- [reference initialization](/cpp/language/reference_initialization/)
- [value initialization](/cpp/language/value_initialization/)
- [zero initialization](/cpp/language/zero_initialization/)
- [move constructor](/cpp/language/move_constructor/)
