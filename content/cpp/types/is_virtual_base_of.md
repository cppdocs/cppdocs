---
title: "std::is_virtual_base_of"
source_path: "cpp/types/is_virtual_base_of"
header: "<type_traits>"
category: "types"
since: "C++26"
---

std::is_virtual_base_of is a [BinaryTypeTrait](/cpp/named_req/binarytypetrait/).

## Declarations
```cpp
template< class Base, class Derived >
struct is_virtual_base_of;
```
_(since C++26)_

## Notes
std::is_virtual_base_of_v<A, B> is true even if A is a private, protected, or ambiguous base class of B.

If std::is_virtual_base_of_v<A, B> is true, then [std::is_base_of_v](/cpp/types/is_base_of/)<A, B> is also true. However, the converse is not always true because the check for virtual inheritance is more specific. In that case, std::is_virtual_base_of_v<T, T> is false even if T is a non-union class type.

## Example
```cpp
#include <type_traits>
 
class A {};
class B : A {};
class C : B {};
class D : virtual A {};
class E : D {};
 
union F {};
using I = int;
 
static_assert
(
    std::is_virtual_base_of_v<A, A> != true &&
    std::is_virtual_base_of_v<A, B> != true &&
    std::is_virtual_base_of_v<A, D> == true &&
    std::is_virtual_base_of_v<D, E> != true &&
    std::is_virtual_base_of_v<F, F> != true &&
    std::is_virtual_base_of_v<I, I> != true
);
 
int main() {}
```

## See also
- [is_base_of](/cpp/types/is_base_of/)
- [is_convertibleis_nothrow_convertible](/cpp/types/is_convertible/)
- [derived_from](/cpp/concepts/derived_from/)
