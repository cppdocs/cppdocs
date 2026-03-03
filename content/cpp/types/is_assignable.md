---
title: "std::is_assignable, std::is_trivially_assignable, std::is_nothrow_assignable"
source_path: "cpp/types/is_assignable"
header: "<type_traits>"
category: "types"
since: "C++11"
---

1) If the expression [std::declval](/cpp/utility/declval/)<T>() = [std::declval](/cpp/utility/declval/)<U>() is well-formed in unevaluated context, provides the member constant value equal to true. Otherwise, value is false. [Access checks](/cpp/language/access/) are performed as if from a context unrelated to either type.

## Declarations
```cpp
template< class T, class U >
struct is_assignable;
```
_(since C++11)_

```cpp
template< class T, class U >
struct is_trivially_assignable;
```
_(since C++11)_

```cpp
template< class T, class U >
struct is_nothrow_assignable;
```
_(since C++11)_

## Notes
This trait does not check anything outside the immediate context of the assignment expression: if the use of T or U would trigger template specializations, generation of implicitly-defined special member functions etc, and those have errors, the actual assignment may not compile even if std::is_assignable<T,U>::value compiles and evaluates to true.

## Example
```cpp
#include <iostream>
#include <string>
#include <type_traits>
 
struct Ex1 { int n; };
 
int main()
{
    std::cout << std::boolalpha
              << "int is assignable from int? "
              << std::is_assignable<int, int>::value << '\n' // 1 = 1; wouldn't compile
              << "int& is assignable from int? "
              << std::is_assignable<int&, int>::value << '\n' // int a; a = 1; works
              << "int is assignable from double? "
              << std::is_assignable<int, double>::value << '\n'
              << "int& is nothrow assignable from double? "
              << std::is_nothrow_assignable<int&, double>::value << '\n'
              << "string is assignable from double? "
              << std::is_assignable<std::string, double>::value << '\n'
              << "Ex1& is trivially assignable from const Ex1&? "
              << std::is_trivially_assignable<Ex1&, const Ex1&>::value << '\n';
}
```

## See also
- [is_copy_assignableis_trivially_copy_assignableis_nothrow_copy_assignable](/cpp/types/is_copy_assignable/)
- [is_move_assignableis_trivially_move_assignableis_nothrow_move_assignable](/cpp/types/is_move_assignable/)
- [assignable_from](/cpp/concepts/assignable_from/)
