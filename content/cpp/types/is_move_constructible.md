---
title: "std::is_move_constructible, std::is_trivially_move_constructible, std::is_nothrow_move_constructible"
source_path: "cpp/types/is_move_constructible"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If T is not a complete type, (possibly cv-qualified) void, or an array of unknown bound, the behavior is undefined.

## Declarations
```cpp
template< class T >
struct is_move_constructible;
```
_(since C++11)_

```cpp
template< class T >
struct is_trivially_move_constructible;
```
_(since C++11)_

```cpp
template< class T >
struct is_nothrow_move_constructible;
```
_(since C++11)_

## Notes
Types without a move constructor, but with a copy constructor that accepts const T& arguments, satisfy std::is_move_constructible.

Move constructors are usually noexcept, since otherwise they are unusable in any code that provides strong exception guarantee.

In many implementations, std::is_nothrow_move_constructible also checks if the destructor throws because it is effectively noexcept(T(arg)). Same applies to std::is_trivially_move_constructible, which, in these implementations, also requires that the destructor is trivial: [GCC bug 51452](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=51452), [LWG issue 2116](https://cplusplus.github.io/LWG/issue2116).

## Example
```cpp
#include <string>
#include <type_traits>
 
struct Ex1
{
    std::string str; // member has a non-trivial but non-throwing move constructor
};
static_assert(std::is_move_constructible_v<Ex1>);
static_assert(!std::is_trivially_move_constructible_v<Ex1>);
static_assert(std::is_nothrow_move_constructible_v<Ex1>);
 
struct Ex2
{
    int n;
    Ex2(Ex2&&) = default; // trivial and non-throwing
};
static_assert(std::is_move_constructible_v<Ex2>);
static_assert(std::is_trivially_move_constructible_v<Ex2>);
static_assert(std::is_nothrow_move_constructible_v<Ex2>);
 
struct NoMove1
{
    // prevents implicit declaration of default move constructor;
    // however, the class is still move-constructible because its
    // copy constructor can bind to an rvalue argument
    NoMove1(const NoMove1&) {}
};
static_assert(std::is_move_constructible_v<NoMove1>);
static_assert(!std::is_trivially_move_constructible_v<NoMove1>);
static_assert(!std::is_nothrow_move_constructible_v<NoMove1>);
 
struct NoMove2
{
    // Not move-constructible since the lvalue reference
    // can't bind to the rvalue argument
    NoMove2(NoMove2&) {}
};
static_assert(!std::is_move_constructible_v<NoMove2>);
static_assert(!std::is_trivially_move_constructible_v<NoMove2>);
static_assert(!std::is_nothrow_move_constructible_v<NoMove2>);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2196 | C++11 | the behavior was unclear if T&& cannot be formed | the value produced is false in this case |

## See also
- [is_constructibleis_trivially_constructibleis_nothrow_constructible](/cpp/types/is_constructible/)
- [is_default_constructibleis_trivially_default_constructibleis_nothrow_default_constructible](/cpp/types/is_default_constructible/)
- [is_copy_constructibleis_trivially_copy_constructibleis_nothrow_copy_constructible](/cpp/types/is_copy_constructible/)
- [move_constructible](/cpp/concepts/move_constructible/)
- [move](/cpp/utility/move/)
- [move_if_noexcept](/cpp/utility/move_if_noexcept/)
