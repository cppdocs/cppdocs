---
title: "std::is_destructible, std::is_trivially_destructible, std::is_nothrow_destructible"
source_path: "cpp/types/is_destructible"
header: "<type_traits>"
category: "types"
since: "C++11"
---

1) If T is a reference type, provides the member constant value equal to true.

## Declarations
```cpp
template< class T >
struct is_destructible;
```
_(since C++11)_

```cpp
template< class T >
struct is_trivially_destructible;
```
_(since C++11)_

```cpp
template< class T >
struct is_nothrow_destructible;
```
_(since C++11)_

## Notes
Because the C++ program terminates if a destructor throws an exception during stack unwinding (which usually cannot be predicted), all practical destructors are non-throwing even if they are not declared noexcept. All destructors found in the C++ standard library are non-throwing.

Storage occupied by [trivially destructible](/cpp/language/destructor/#Trivial_destructor) objects [may be reused](/cpp/language/lifetime/#Storage_reuse) without calling the destructor.

## Example
```cpp
#include <iostream>
#include <string>
#include <type_traits>
 
struct Foo
{
    std::string str;
    ~Foo() noexcept {};
};
 
struct Bar
{
    ~Bar() = default;
};
 
static_assert(std::is_destructible<std::string>::value == true);
static_assert(std::is_trivially_destructible_v<Foo> == false);
static_assert(std::is_nothrow_destructible<Foo>() == true);
static_assert(std::is_trivially_destructible<Bar>{} == true);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2049 | C++11 | the specification was incompletable because of the imaginary wrapping struct | made complete |

## See also
- [is_constructibleis_trivially_constructibleis_nothrow_constructible](/cpp/types/is_constructible/)
- [has_virtual_destructor](/cpp/types/has_virtual_destructor/)
- [destructible](/cpp/concepts/destructible/)
- [destructor](/cpp/language/destructor/)
