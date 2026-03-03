---
title: "std::is_copy_assignable, std::is_trivially_copy_assignable, std::is_nothrow_copy_assignable"
source_path: "cpp/types/is_copy_assignable"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If T is not a complete type, (possibly cv-qualified) void, or an array of unknown bound, the behavior is undefined.

## Declarations
```cpp
template< class T >
struct is_copy_assignable;
```
_(since C++11)_

```cpp
template< class T >
struct is_trivially_copy_assignable;
```
_(since C++11)_

```cpp
template< class T >
struct is_nothrow_copy_assignable;
```
_(since C++11)_

## Notes
The trait std::is_copy_assignable is less strict than [CopyAssignable](/cpp/named_req/copyassignable/) because it does not check the type of the result of the assignment (which, for a [CopyAssignable](/cpp/named_req/copyassignable/) type, must be an lvalue of type T) and does not check the semantic requirement that the argument expression remains unchanged. It also does not check that T satisfies [MoveAssignable](/cpp/named_req/moveassignable/), which is required of all [CopyAssignable](/cpp/named_req/copyassignable/) types.

## Example
```cpp
#include <iostream>
#include <type_traits>
#include <utility>
 
struct Foo { int n; };
 
int main()
{
    std::cout << std::boolalpha
              << "Foo is trivially copy-assignable? "
              << std::is_trivially_copy_assignable<Foo>::value << '\n'
              << "int[2] is copy-assignable? "
              << std::is_copy_assignable<int[2]>::value << '\n'
              << "int is nothrow copy-assignable? "
              << std::is_nothrow_copy_assignable<int>::value << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2196 | C++11 | the behavior was unclear if const T& cannot be formed | the value produced is false in this case |

## See also
- [is_assignableis_trivially_assignableis_nothrow_assignable](/cpp/types/is_assignable/)
- [is_move_assignableis_trivially_move_assignableis_nothrow_move_assignable](/cpp/types/is_move_assignable/)
