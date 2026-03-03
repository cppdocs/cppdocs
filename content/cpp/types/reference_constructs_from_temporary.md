---
title: "std::reference_constructs_from_temporary"
source_path: "cpp/types/reference_constructs_from_temporary"
header: "<type_traits>"
category: "types"
since: "C++23"
---

Let V be [std::remove_cv_t](/cpp/types/remove_cv/)<U> if U is a scalar type or cv void, or U otherwise. If T is a reference type, and given a hypothetic expression e such that decltype(e) is V, the variable definition T ref(e); is well-formed and [binds a temporary object](/cpp/language/reference_initialization/#Lifetime_of_a_temporary) to ref, then provides the member constant value equal to true. Otherwise, value is false.

## Declarations
```cpp
template< class T, class U >
struct reference_constructs_from_temporary;
```
_(since C++23)_

## Notes
std::reference_constructs_from_temporary can be used for rejecting some cases that always produce dangling references.

It is also possible to use member initializer list to reject binding a temporary object to a reference if the compiler has implemented [CWG1696](https://cplusplus.github.io/CWG/issues/1696.html).

## Example
```cpp
#include <type_traits>
 
static_assert(std::reference_constructs_from_temporary_v<int&&, int> == true);
static_assert(std::reference_constructs_from_temporary_v<const int&, int> == true);
static_assert(std::reference_constructs_from_temporary_v<int&&, int&&> == false);
static_assert(std::reference_constructs_from_temporary_v<const int&, int&&> == false);
static_assert(std::reference_constructs_from_temporary_v<int&&, long&&> == true);
static_assert(std::reference_constructs_from_temporary_v<int&&, long> == true);
 
int main() {}
```

## See also
- [is_constructibleis_trivially_constructibleis_nothrow_constructible](/cpp/types/is_constructible/)
- [(constructor)](/cpp/utility/tuple/tuple/)
- [(constructor)](/cpp/utility/pair/pair/)
- [make_from_tuple](/cpp/utility/make_from_tuple/)
