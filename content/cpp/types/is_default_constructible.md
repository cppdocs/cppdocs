---
title: "std::is_default_constructible, std::is_trivially_default_constructible, std::is_nothrow_default_constructible"
source_path: "cpp/types/is_default_constructible"
header: "<type_traits>"
category: "types"
since: "C++11"
---

1) Provides the member constant value equal to [std::is_constructible](/cpp/types/is_constructible/)<T>::value.

## Declarations
```cpp
template< class T >
struct is_default_constructible;
```
_(since C++11)_

```cpp
template< class T >
struct is_trivially_default_constructible;
```
_(since C++11)_

```cpp
template< class T >
struct is_nothrow_default_constructible;
```
_(since C++11)_

## Notes
In many implementations, std::is_nothrow_default_constructible also checks if the destructor throws because it is effectively noexcept(T()). Same applies to std::is_trivially_default_constructible, which, in these implementations, also requires that the destructor is trivial: [GCC bug 51452](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=51452), [LWG issue 2116](https://cplusplus.github.io/LWG/issue2116).

std::is_default_constructible<T> does not test that T x; would compile; it attempts [direct-initialization](/cpp/language/direct_initialization/) with an empty argument list (see [std::is_constructible](/cpp/types/is_constructible/)). Thus, std::is_default_constructible_v<const int> and std::is_default_constructible_v<const int[10]> are true.

## Example
```cpp
#include <string>
#include <type_traits>
 
struct S1
{
    std::string str; // member has a non-trivial default constructor
};
static_assert(std::is_default_constructible_v<S1> == true);
static_assert(std::is_trivially_default_constructible_v<S1> == false);
 
struct S2
{
    int n;
    S2() = default; // trivial and non-throwing
};
static_assert(std::is_trivially_default_constructible_v<S2> == true);
static_assert(std::is_nothrow_default_constructible_v<S2> == true);
 
int main() {}
```

## See also
- [is_constructibleis_trivially_constructibleis_nothrow_constructible](/cpp/types/is_constructible/)
- [is_copy_constructibleis_trivially_copy_constructibleis_nothrow_copy_constructible](/cpp/types/is_copy_constructible/)
- [is_move_constructibleis_trivially_move_constructibleis_nothrow_move_constructible](/cpp/types/is_move_constructible/)
- [default_initializable](/cpp/concepts/default_initializable/)
