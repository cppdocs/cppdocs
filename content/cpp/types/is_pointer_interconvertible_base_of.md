---
title: "std::is_pointer_interconvertible_base_of"
source_path: "cpp/types/is_pointer_interconvertible_base_of"
header: "<type_traits>"
category: "types"
since: "C++20"
---

If Derived is unambiguously derived from Base and every Derived object is [pointer-interconvertible](/cpp/language/static_cast/#pointer-interconvertible) with its Base subobject, or if both are the same non-union class (in both cases ignoring cv-qualification), provides the member constant value equal to true. Otherwise value is false.

## Declarations
```cpp
template< class Base, class Derived >
struct is_pointer_interconvertible_base_of;
```
_(since C++20)_

## Notes
std::is_pointer_interconvertible_base_of_v<T, U> may be true even if T is a private or protected base class of U.

Let

reinterpret_cast<T&>(u) always has well-defined result if std::is_pointer_interconvertible_base_of_v<T, U> is true.

If T and U are not the same type (ignoring cv-qualification) and T is a pointer-interconvertible base class of U, then both [std::is_standard_layout_v](/cpp/types/is_standard_layout/)<T> and [std::is_standard_layout_v](/cpp/types/is_standard_layout/)<U> are true.

If T is standard layout class type, then all base classes of T (if any) are pointer-interconvertible base class of T.

## Example
```cpp
#include <type_traits>
 
struct Foo {};
 
struct Bar {};
 
class Baz : Foo, public Bar { int x; };
 
class NonStdLayout : public Baz { int y; };
 
static_assert(std::is_pointer_interconvertible_base_of_v<Bar, Baz>);
static_assert(std::is_pointer_interconvertible_base_of_v<Foo, Baz>);
static_assert(not std::is_pointer_interconvertible_base_of_v<Baz, NonStdLayout>);
static_assert(std::is_pointer_interconvertible_base_of_v<NonStdLayout, NonStdLayout>);
 
int main() {}
```

## See also
- [is_base_of](/cpp/types/is_base_of/)
- [is_empty](/cpp/types/is_empty/)
- [is_standard_layout](/cpp/types/is_standard_layout/)
- [standard-layout](/cpp/language/data_members/#Standard-layout)
