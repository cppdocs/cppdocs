---
title: "Increment/decrement operators"
source_path: "cpp/language/operator"
category: "language"
---

Increment/decrement operators increment or decrement the value of the object.

## Declarations
```cpp
A& operator++(A&)
```

```cpp
bool& operator++(bool&)
```
_(deprecated)(until C++17)_

```cpp
P& operator++(P&)
```

```cpp
A& operator--(A&)
```

```cpp
P& operator--(P&)
```

## Notes
Because of the side-effects involved, built-in increment and decrement operators must be used with care to avoid undefined behavior due to violations of [sequencing rules](/cpp/language/eval_order/).

Because a temporary copy of the object is constructed during post-increment and post-decrement, pre-increment or pre-decrement operators are usually more efficient in contexts where the returned value is not used.

## Example
```cpp
#include <iostream>
 
int main()
{
    int n1 = 1;
    int n2 = ++n1;
    int n3 = ++ ++n1;
    int n4 = n1++;
//  int n5 = n1++ ++;   // error
//  int n6 = n1 + ++n1; // undefined behavior
    std::cout << "n1 = " << n1 << '\n'
              << "n2 = " << n2 << '\n'
              << "n3 = " << n3 << '\n'
              << "n4 = " << n4 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2855 | C++98 | usual arithmetic conversions are applied for built-in pre-increment andpre-decrement, but were not applied for their postfix counterparts[1] | also applied |
| CWG 2901 | C++98 | lvalue-to-rvalue conversions were not appliedfor built-in post-increment and post-decrement | applied |

## See also
- [Operator precedence](/cpp/language/operator_precedence/)
- [Operator overloading](/cpp/language/operators/)
- [assignment](/cpp/language/operator_assignment/)
- [arithmetic](/cpp/language/operator_arithmetic/)
- [logical](/cpp/language/operator_logical/)
- [comparison](/cpp/language/operator_comparison/)
- [memberaccess](/cpp/language/operator_member_access/)
- [other](/cpp/language/operator_other/)
- [static_cast](/cpp/language/static_cast/)
- [dynamic_cast](/cpp/language/dynamic_cast/)
- [const_cast](/cpp/language/const_cast/)
- [cv](/cpp/language/cv/)
- [reinterpret_cast](/cpp/language/reinterpret_cast/)
- [C-style cast](/cpp/language/explicit_cast/)
- [new](/cpp/language/new/)
- [delete](/cpp/language/delete/)
- [sizeof](/cpp/language/sizeof/)
- [sizeof...](/cpp/language/sizeof.../)
- [pack](/cpp/language/parameter_pack/)
- [typeid](/cpp/language/typeid/)
- [noexcept](/cpp/language/noexcept/)
- [alignof](/cpp/language/alignof/)
- [C documentation](/c/language/operator_incdec/)
