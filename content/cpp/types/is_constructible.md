---
title: "std::is_constructible, std::is_trivially_constructible, std::is_nothrow_constructible"
source_path: "cpp/types/is_constructible"
header: "<type_traits>"
category: "types"
since: "C++11"
---

1) If T is an object or reference type and the variable definition T obj([std::declval](/cpp/utility/declval/)<Args>()...); is well-formed, provides the member constant value equal to true. In all other cases, value is false.
For the purposes of this check, the variable definition is never interpreted as a function declaration, and the use of [std::declval](/cpp/utility/declval/) is not considered an [odr-use](/cpp/language/definition/#ODR-use). [Access checks](/cpp/language/access/) are performed as if from a context unrelated to T and any of the types in Args. Only the validity of the immediate context of the variable definition is considered.

## Declarations
```cpp
template< class T, class... Args >
struct is_constructible;
```
_(since C++11)_

```cpp
template< class T, class... Args >
struct is_trivially_constructible;
```
_(since C++11)_

```cpp
template< class T, class... Args >
struct is_nothrow_constructible;
```
_(since C++11)_

## Notes
In many implementations, is_nothrow_constructible also checks if the destructor throws because it is effectively noexcept(T(arg)). Same applies to is_trivially_constructible, which, in these implementations, also requires that the destructor is trivial: [GCC bug 51452](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=51452) [LWG issue 2116](https://cplusplus.github.io/LWG/issue2116).

## Example
```cpp
#include <iostream>
#include <type_traits>
 
class Foo
{
    int v1;
    double v2;
public:
    Foo(int n) : v1(n), v2() {}
    Foo(int n, double f) noexcept : v1(n), v2(f) {}
};
 
int main()
{
    auto is = [](bool o) { return (o ? "\t" "is " : "\t" "isn't "); };
    std::cout << "Foo ...\n"
              << is(std::is_trivially_constructible_v<Foo, const Foo&>)
              << "Trivially-constructible from const Foo&\n"
              << is(std::is_trivially_constructible_v<Foo, int>)
              << "Trivially-constructible from int\n"
              << is(std::is_constructible_v<Foo, int>)
              << "Constructible from int\n"
              << is(std::is_nothrow_constructible_v<Foo, int>)
              << "Nothrow-constructible from int\n"
              << is(std::is_nothrow_constructible_v<Foo, int, double>)
              << "Nothrow-constructible from int and double\n";
}
```

## See also
- [is_default_constructibleis_trivially_default_constructibleis_nothrow_default_constructible](/cpp/types/is_default_constructible/)
- [is_copy_constructibleis_trivially_copy_constructibleis_nothrow_copy_constructible](/cpp/types/is_copy_constructible/)
- [is_move_constructibleis_trivially_move_constructibleis_nothrow_move_constructible](/cpp/types/is_move_constructible/)
- [constructible_from](/cpp/concepts/constructible_from/)
