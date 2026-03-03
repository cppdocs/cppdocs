---
title: "std::add_lvalue_reference, std::add_rvalue_reference"
source_path: "cpp/types/add_reference"
header: "<type_traits>"
category: "types"
since: "C++11"
---

Creates an lvalue or rvalue reference type of T.

## Declarations
```cpp
template< class T >
struct add_lvalue_reference;
```
_(since C++11)_

```cpp
template< class T >
struct add_rvalue_reference;
```
_(since C++11)_

## Notes
The major difference to directly using T& or T&& is that T can be a non-[referenceable](/cpp/meta/#Definitions) type. For example, std::add_lvalue_reference<void>::type is void, while void& leads to a compilation error.

## Example
```cpp
#include <type_traits>
 
using non_ref = int;
static_assert(std::is_lvalue_reference_v<non_ref> == false);
 
using l_ref = std::add_lvalue_reference_t<non_ref>;
static_assert(std::is_lvalue_reference_v<l_ref> == true);
 
using r_ref = std::add_rvalue_reference_t<non_ref>;
static_assert(std::is_rvalue_reference_v<r_ref> == true);
 
using void_ref = std::add_lvalue_reference_t<void>;
static_assert(std::is_reference_v<void_ref> == false);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2101 | C++11 | the program was ill-formed if T is a function type with cv or ref | the type produced is T in this case |

## See also
- [is_reference](/cpp/types/is_reference/)
- [remove_reference](/cpp/types/remove_reference/)
- [remove_cvref](/cpp/types/remove_cvref/)
- [std::remove_cv](/cpp/types/remove_cv/)
- [std::remove_reference](/cpp/types/remove_reference/)
