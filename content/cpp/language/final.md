---
title: "final specifier (since C++11)"
source_path: "cpp/language/final"
category: "language"
since: "C++11"
---

Specifies that a [virtual function](/cpp/language/virtual/) cannot be overridden in a derived class, or that a class cannot be [derived from](/cpp/language/derived_class/).

## Example
```cpp
struct Base
{
    virtual void foo();
};
 
struct A : Base
{
    void foo() final; // Base::foo is overridden and A::foo is the final override
    void bar() final; // Error: bar cannot be final as it is non-virtual
};
 
struct B final : A // struct B is final
{
    void foo() override; // Error: foo cannot be overridden as it is final in A
};
 
struct C : B {}; // Error: B is final
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1318 | C++11 | a class definition which has final after the class name and anempty member specification list might make final an identifier | final is always aspecifier in this case |

## See also
- [override specifier](/cpp/language/override/)
