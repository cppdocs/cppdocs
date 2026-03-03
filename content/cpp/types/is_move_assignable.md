---
title: "std::is_move_assignable, std::is_trivially_move_assignable, std::is_nothrow_move_assignable"
source_path: "cpp/types/is_move_assignable"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If T is not a complete type, (possibly cv-qualified) void, or an array of unknown bound, the behavior is undefined.

## Declarations
```cpp
template< class T >
struct is_move_assignable;
```
_(since C++11)_

```cpp
template< class T >
struct is_trivially_move_assignable;
```
_(since C++11)_

```cpp
template< class T >
struct is_nothrow_move_assignable;
```
_(since C++11)_

## Notes
The trait std::is_move_assignable is less strict than [MoveAssignable](/cpp/named_req/moveassignable/) because it does not check the type of the result of the assignment (which, for a [MoveAssignable](/cpp/named_req/moveassignable/) type, must be T&), nor the semantic requirement that the target's value after the assignment is equivalent to the source's value before the assignment.

The type does not have to implement a [move assignment operator](/cpp/language/move_operator/) in order to satisfy this trait; see [MoveAssignable](/cpp/named_req/moveassignable/) for details.

## Example
```cpp
#include <iostream>
#include <string>
#include <type_traits>
 
struct Foo { int n; };
 
struct NoMove
{
    // prevents implicit declaration of default move assignment operator
    // however, the class is still move-assignable because its
    // copy assignment operator can bind to an rvalue argument
    NoMove& operator=(const NoMove&) { return *this; }
};
 
int main()
{
    std::cout << std::boolalpha
              << "std::string is nothrow move-assignable? "
              << std::is_nothrow_move_assignable<std::string>::value << '\n'
              << "int[2] is move-assignable? "
              << std::is_move_assignable<int[2]>::value << '\n'
              << "Foo is trivially move-assignable? "
              << std::is_trivially_move_assignable<Foo>::value << '\n'
              << "NoMove is move-assignable? "
              << std::is_move_assignable<NoMove>::value << '\n'
              << "NoMove is nothrow move-assignable? "
              << std::is_nothrow_move_assignable<NoMove>::value << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2196 | C++11 | the behavior was unclear if T&& cannot be formed | the value produced is false in this case |

## See also
- [is_assignableis_trivially_assignableis_nothrow_assignable](/cpp/types/is_assignable/)
- [is_copy_assignableis_trivially_copy_assignableis_nothrow_copy_assignable](/cpp/types/is_copy_assignable/)
