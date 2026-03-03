---
title: "std::is_copy_constructible, std::is_trivially_copy_constructible, std::is_nothrow_copy_constructible"
source_path: "cpp/types/is_copy_constructible"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If T is not a complete type, (possibly cv-qualified) void, or an array of unknown bound, the behavior is undefined.

## Declarations
```cpp
template< class T >
struct is_copy_constructible;
```
_(since C++11)_

```cpp
template< class T >
struct is_trivially_copy_constructible;
```
_(since C++11)_

```cpp
template< class T >
struct is_nothrow_copy_constructible;
```
_(since C++11)_

## Notes
In many implementations, is_nothrow_copy_constructible also checks if the destructor throws because it is effectively noexcept(T(arg)). Same applies to is_trivially_copy_constructible, which, in these implementations, also requires that the destructor is trivial: [GCC bug 51452](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=51452), [LWG issue 2116](https://cplusplus.github.io/LWG/issue2116).

## Example
```cpp
#include <string>
#include <type_traits>
 
struct S1
{
    std::string str; // member has a non-trivial copy constructor
};
static_assert(std::is_copy_constructible_v<S1>);
static_assert(!std::is_trivially_copy_constructible_v<S1>);
 
struct S2
{
    int n;
    S2(const S2&) = default; // trivial and non-throwing
};
static_assert(std::is_trivially_copy_constructible_v<S2>);
static_assert(std::is_nothrow_copy_constructible_v<S2>);
 
struct S3
{
    S3(const S3&) = delete; // explicitly deleted
};
static_assert(!std::is_copy_constructible_v<S3>);
 
struct S4
{
    S4(S4&) {}; // cannot bind const, hence not a copy-constructible
};
static_assert(!std::is_copy_constructible_v<S4>);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2196 | C++11 | the behavior was unclear if const T& cannot be formed | the value produced is false in this case |

## See also
- [is_constructibleis_trivially_constructibleis_nothrow_constructible](/cpp/types/is_constructible/)
- [is_default_constructibleis_trivially_default_constructibleis_nothrow_default_constructible](/cpp/types/is_default_constructible/)
- [is_move_constructibleis_trivially_move_constructibleis_nothrow_move_constructible](/cpp/types/is_move_constructible/)
- [copy_constructible](/cpp/concepts/copy_constructible/)
