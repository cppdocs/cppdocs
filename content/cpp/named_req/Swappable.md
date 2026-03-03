---
title: "C++ named requirements: Swappable"
source_path: "cpp/named_req/Swappable"
category: "named_req"
---

Any lvalue or rvalue of this type can be swapped with any lvalue or rvalue of some other type, using unqualified function call swap() in the context where both [std::swap](/cpp/utility/swap/) and the user-defined swap()s are visible.

## Notes
It is unspecified whether [<algorithm>](/cpp/header/algorithm/)(until C++11)[<utility>](/cpp/header/utility/)(since C++11) is actually included when the standard library functions perform the swap, so the user-provided swap() should not expect it to be included.

## Example
```cpp
#include <iostream>
#include <vector>
 
struct IntVector
{
    std::vector<int> v;
 
    IntVector& operator=(IntVector) = delete; // not assignable
 
    void swap(IntVector& other)
    {
        v.swap(other.v);
    }
 
    void operator()(auto rem, auto term = " ")
    {
        std::cout << rem << "{{";
        for (int n{}; int e : v)
            std::cout << (n++ ? ", " : "") << e;
        std::cout << "}}" << term;
    }
};
 
void swap(IntVector& v1, IntVector& v2)
{
    v1.swap(v2);
}
 
int main()
{
    IntVector v1{{1, 1, 1, 1}}, v2{{2222, 2222}};
 
    auto prn = [&]{ v1("v1", ", "), v2("v2", ";\n"); };
 
//  std::swap(v1, v2); // Compiler error! std::swap requires MoveAssignable
    prn();
    std::iter_swap(&v1, &v2); // OK: library calls unqualified swap()
    prn();
    std::ranges::swap(v1, v2); // OK: library calls unqualified swap()
    prn();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 226 | C++98 | it was unclear how the standard library uses swap | clarified to use both std:: and ADL-found swap |

## See also
- [is_swappable_withis_swappableis_nothrow_swappable_withis_nothrow_swappable](/cpp/types/is_swappable/)
- [swappableswappable_with](/cpp/concepts/swappable/)
