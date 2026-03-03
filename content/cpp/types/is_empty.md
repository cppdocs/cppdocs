---
title: "std::is_empty"
source_path: "cpp/types/is_empty"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_empty is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_empty;
```
_(since C++11)_

## Notes
Inheriting from empty base classes usually does not increase the size of a class due to [empty base optimization](/cpp/language/ebo/).

std::is_empty<T> and all other type traits are empty classes.

## Example
```cpp
#include <iostream>
#include <type_traits>
 
struct A {};
static_assert(std::is_empty_v<A> == true);
 
struct B { int m; };
static_assert(std::is_empty_v<B> == false);
 
struct C { static int m; };
static_assert(std::is_empty_v<C> == true);
 
struct D { virtual ~D(); };
static_assert(std::is_empty_v<D> == false);
 
union E {};
static_assert(std::is_empty_v<E> == false);
 
struct F { [[no_unique_address]] E e; };
 
struct G
{
    int:0;
    // C++ standard allow "as a special case, an unnamed bit-field with a width of zero
    // specifies alignment of the next bit-field at an allocation unit boundary.
    // Only when declaring an unnamed bit-field may the width be zero."
};
static_assert(std::is_empty_v<G>); // holds only unnamed bit-fields of zero width
 
int main()
{
    std::cout << std::boolalpha;
    std::cout << "F: " << std::is_empty_v<F> << '\n'; // the result is ABI-dependent
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2015 | C++11 | the behavior was undefined ifT is an incomplete union type | the base characteristic isstd::false_type in this case |

## See also
- [is_class](/cpp/types/is_class/)
