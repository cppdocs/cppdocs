---
title: "std::is_base_of"
source_path: "cpp/types/is_base_of"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_base_of is a [BinaryTypeTrait](/cpp/named_req/binarytypetrait/).

## Declarations
```cpp
template< class Base, class Derived >
struct is_base_of;
```
_(since C++11)_

## Notes
std::is_base_of<A, B>::value is true even if A is a private, protected, or ambiguous base class of B. In many situations, [std::is_convertible](/cpp/types/is_convertible/)<B*, A*> is the more appropriate test.

Although no class is its own base, std::is_base_of<T, T>::value is true because the intent of the trait is to model the "is-a" relationship, and T is a T. Despite that, std::is_base_of<int, int>::value is false because only classes participate in the relationship that this trait models.

## Example
```cpp
#include <type_traits>
 
class A {};
class B : A {};
class C : B {};
class D {};
union E {};
using I = int;
 
static_assert
(
    std::is_base_of_v<A, A> == true &&
    std::is_base_of_v<A, B> == true &&
    std::is_base_of_v<A, C> == true &&
    std::is_base_of_v<A, D> != true &&
    std::is_base_of_v<B, A> != true &&
    std::is_base_of_v<E, E> != true &&
    std::is_base_of_v<I, I> != true
);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2015 | C++11 | the behavior might be undefined ifDerived is an incomplete union type | the base characteristic isstd::false_type in this case |

## See also
- [is_virtual_base_of](/cpp/types/is_virtual_base_of/)
- [is_convertibleis_nothrow_convertible](/cpp/types/is_convertible/)
- [derived_from](/cpp/concepts/derived_from/)
