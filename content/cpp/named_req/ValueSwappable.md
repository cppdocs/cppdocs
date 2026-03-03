---
title: "C++ named requirements: ValueSwappable (since C++11)"
source_path: "cpp/named_req/ValueSwappable"
category: "named_req"
since: "C++11"
---

Two objects of this type can be dereferenced and the resulting values can be swapped using unqualified function call swap() in the context where both [std::swap](/cpp/utility/swap/) and the user-defined swap()s are visible.

## Example
```cpp
#include <iostream>
#include <vector>
 
class IntVector
{
    std::vector<int> v;
//  IntVector& operator=(IntVector); // not assignable (C++98 way)
public:
    IntVector& operator=(IntVector) = delete; // not assignable
    void swap(IntVector& other)
    {
        v.swap(other.v);
    }
};
 
void swap(IntVector& v1, IntVector& v2)
{
    v1.swap(v2);
}
 
int main()
{
    IntVector v1, v2;    // IntVector is Swappable, but not MoveAssignable
    IntVector* p1 = &v1;
    IntVector* p2 = &v2; // IntVector* is ValueSwappable
    std::iter_swap(p1, p2); // OK: iter_swap requires ValueSwappable
//  std::swap(v1, v2); // compiler error! std::swap requires MoveAssignable
}
```

## See also
- [indirectly_swappable](/cpp/iterator/indirectly_swappable/)
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
