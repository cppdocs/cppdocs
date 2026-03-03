---
title: "Namespaces"
source_path: "cpp/language/namespace"
category: "language"
---

Namespaces provide a method for preventing name conflicts in large projects.

## Notes
The using-directive using namespace std; at any namespace scope introduces every name from the namespace std into the global namespace (since the global namespace is the nearest namespace that contains both std and any user-declared namespace), which may lead to undesirable name collisions. This, and other using directives are generally considered bad practice at file scope of a header file ([SF.7: Don’t write using namespace at global scope in a header file](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Rs-using-directive)).

## Example
```cpp
#include <vector>
 
namespace vec
{
    template<typename T>
    class vector
    {
        // ...
    };
} // of vec
 
int main()
{
    std::vector<int> v1; // Standard vector.
    vec::vector<int> v2; // User defined vector.
 
    // v1 = v2;          // Error: v1 and v2 are different object's type.
 
    {
        using namespace std;
        vector<int> v3;  // Same as std::vector
        v1 = v3; // OK
    }
 
    {
        using vec::vector;
        vector<int> v4;  // Same as vec::vector
        v2 = v4; // OK
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 101 | C++98 | the program is ill-formed if a function declaration in namespacescope or block scope and a function introduced by ausing-declaration declare the same function (no ambiguity) | allowed |
| CWG 373 | C++98 | lookup only considered namespace declarations only forthe last name in the operand of a using-directive (which issub-optimal, because classes cannot contain namespaces) | the lookup restrictionapplies to all names in theoperands of using-directives |
| CWG 460 | C++98 | a using-declaration could name a namespace | prohibited |
| CWG 565 | C++98 | a using-declaration cannot introduce a functionidentical to another function in the same scope, butthe restriction was not applied to function templates | apply the same restrictionto function templates as well |
| CWG 986 | C++98 | using-directive was transitive for qualified lookup | only transitive for unqualified lookup |
| CWG 987 | C++98 | entities declared in a nested namespace wasalso members of the enclosing namespace | nested scopes excluded |
| CWG 1021 | C++98 | it was unclear whether an entity whose definitionis introduced to a namespace via using-declarationis considered to be defined in that namespace | not defined in that namespace |
| CWG 1838 | C++98 | unqualified definition in an outer namespacecould define an entity declared, but not defined inanother namespace and pulled in by a using | unqualified definitionalways refers toits namespace |
| CWG 2155 | C++98 | the resolution of CWG issue 1838 was notapplied to class and enumeration declarations | applied |

## See also
- [namespace alias](/cpp/language/namespace_alias/)
